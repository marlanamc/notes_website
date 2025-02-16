import { Metadata } from "next";
import { redirect } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Marlana's Notes",
    openGraph: {
      images: [`/notes/api/og/?title=${encodeURIComponent("Marlana's Notes")}&emoji=${encodeURIComponent("✏️")}`],
    },
  };
}

export default function Home() {
  redirect('/notes/new-note-19e86fe4-ee7d-4718-b956-d94325bdc2c6');
  return null; // This component won't be rendered because of the redirect
}