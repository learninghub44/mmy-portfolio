import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Chris Odhiambo — Full Stack Software Developer",
  description: "Full Stack Software Developer based in Nairobi, building web applications, SaaS platforms, and business software for Kenyan and global markets.",
  keywords: ["Full Stack Developer", "Software Engineer", "SaaS", "Web Development", "React", "Next.js", "TypeScript", "Nairobi", "Kenya"],
  authors: [{ name: "Chris Odhiambo" }],
  openGraph: {
    title: "Chris Odhiambo — Full Stack Software Developer",
    description: "Full Stack Software Developer based in Nairobi, building web applications, SaaS platforms, and business software for Kenyan and global markets.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chris Odhiambo — Full Stack Software Developer",
    description: "Full Stack Software Developer based in Nairobi, building web applications, SaaS platforms, and business software for Kenyan and global markets.",
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
      className={`${inter.variable} ${fraunces.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
