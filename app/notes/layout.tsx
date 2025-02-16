import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { createClient as createBrowserClient } from "@/utils/supabase/client";
import SidebarLayout from "@/components/sidebar-layout";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.title,
};

export const revalidate = 0;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabase = createBrowserClient();
  
  // Fetch notes and site config
  const [{ data: notes }, { data: siteConfig }] = await Promise.all([
    supabase.from("notes").select("*").eq("public", true),
    supabase.from("site_config").select("*").single()
  ]);

  // Provide a fallback title if siteConfig is null
  const title = siteConfig?.title || "My Notes";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>{title}</title>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta property="twitter:title" content={title}></meta>
        <meta
          property="twitter:description"
          content={title}
        ></meta>
        <meta property="og:site_name" content={title}></meta>
        <meta property="og:description" content={title}></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:url" content={siteConfig?.url || ""}></meta>
      </head>
      <body
        className={cn("min-h-dvh font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarLayout notes={notes}>
            <Analytics />
            {children}
          </SidebarLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
