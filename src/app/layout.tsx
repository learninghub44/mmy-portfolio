import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Chris Odhiambo | Full Stack Software Developer",
  description: "Full Stack Software Developer & AI Engineer specializing in building scalable web applications, AI-powered solutions, SaaS platforms, and business software.",
  keywords: ["Full Stack Developer", "Software Engineer", "AI Engineer", "SaaS", "Web Development", "React", "Next.js", "TypeScript"],
  authors: [{ name: "Chris Odhiambo" }],
  openGraph: {
    title: "Chris Odhiambo | Full Stack Software Developer",
    description: "Full Stack Software Developer & AI Engineer specializing in building scalable web applications, AI-powered solutions, SaaS platforms, and business software.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Odhiambo | Full Stack Software Developer",
    description: "Full Stack Software Developer & AI Engineer specializing in building scalable web applications, AI-powered solutions, SaaS platforms, and business software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
