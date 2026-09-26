import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tejesh Chowdary Geda | ML & Data Engineer",
  description:
    "Computer Science Graduate specializing in Machine Learning, Deep Learning, Data Analytics, and AWS Cloud. Based in Rajahmundry, Andhra Pradesh.",
  keywords: ["Machine Learning", "Data Science", "AWS Cloud", "Python", "NLP", "Deep Learning", "Tejesh Chowdary Geda"],
  openGraph: {
    title: "Tejesh Chowdary Geda | ML & Data Engineer",
    description: "CS Graduate passionate about ML, Data, and AI. Portfolio showcasing research projects, internships, and certifications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}