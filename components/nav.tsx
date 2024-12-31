import NewNote from "./new-note";

interface NavProps {
  addNewPinnedNote: (slug: string) => void;
  clearSearch: () => void;
  setSelectedNoteSlug: (slug: string | null) => void;
  isMobile: boolean;
  isScrolled: boolean;
}

export function Nav({
  addNewPinnedNote,
  clearSearch,
  setSelectedNoteSlug,
  isMobile,
  isScrolled,
}: NavProps) {
  return (
    <div
      className={`px-4 py-2 flex items-center justify-between ${
        isScrolled
          ? "border-b border-border/40 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1)]"
          : ""
      }`}
    >
      <div className="flex items-center gap-1.5 p-2">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>
      <NewNote
        addNewPinnedNote={addNewPinnedNote}
        clearSearch={clearSearch}
        setSelectedNoteSlug={setSelectedNoteSlug}
        isMobile={isMobile}
      />
    </div>
  );
}
