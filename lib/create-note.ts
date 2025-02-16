import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/utils/supabase/client";
import { toast } from "@/components/ui/use-toast";
import { useEffect } from "react";

export async function createNote(
  sessionId: string | null,
  router: any,
  addNewPinnedNote: (slug: string) => void,
  refreshSessionNotes: () => Promise<void>,
  setSelectedNoteSlug: (slug: string | null) => void,
  isMobile: boolean,
  setSessionId: (id: string) => void
) {
  const supabase = createClient();
  const noteId = uuidv4();
  const slug = `new-note-${noteId}`;

  const note = {
    id: noteId,
    slug: slug,
    title: "",
    content: "",
    public: false,
    created_at: new Date().toISOString(),
    session_id: sessionId,
    category: "today",
    emoji: "👋🏼",
  };

  try {
    const { error } = await supabase.from("notes").insert(note);

    if (error) throw error;

    addNewPinnedNote(slug);

    if (!isMobile) {
      refreshSessionNotes().then(() => {
        setSelectedNoteSlug(slug);
        router.push(`/notes/${slug}`);
        router.refresh();
      });
    } else {
      router.push(`/notes/${slug}`).then(() => {
        refreshSessionNotes();
        setSelectedNoteSlug(slug);
      });
    }

    toast({
      description: "Private note created",
    });
  } catch (error) {
    console.error("Error creating note:", error);
  }
}

export function useSessionId(setSessionId: (id: string) => void) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentSessionId = localStorage.getItem("session_id") || uuidv4();
      if (!localStorage.getItem("session_id")) {
        localStorage.setItem("session_id", currentSessionId);
      }
      setSessionId(currentSessionId);
    }
  }, [setSessionId]);
}
