import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Marlana's Notes",
    openGraph: {
      images: [`/notes/api/og/?title=${encodeURIComponent("Marlana's Notes")}&emoji=${encodeURIComponent("✏️")}`],
    },
  };
}

export default async function Home() {}