import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IconsSprite } from "../components/Icon";
import { Footer, Header } from "../components/Layout";

const siteUrl = process.env.NEXT_PUBLIC_URL ?? "https://suraj-portfolio-suraj-6277s-projects.vercel.app";

export const viewport: Viewport = {
  themeColor: "black",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",  
    },
  },
  title: "Suraj Jadhav",
  description: "Software Design and Engineering",
  keywords: [
    "Software Engineering",
    "Full Stack",
    "Backend",
    "Frontend",
    "Mobile App",
    "Open Source Contributor",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Suraj Jadhav",
    description: "Software Design and Engineering",
    url: siteUrl,
    type: "website",
    images: "/og-image.png",
    siteName: "Suraj Jadhav - Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    site: "@surajjadhav_07",
    creator: "@surajjadhav_07",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body className={`antialiased`}>
        <div className="max-w-2xl mx-auto d-border-l d-border-r border-dashed d-border-d border-gray-200">
          <Header />
          {children}
          <Footer />
        </div>
        <IconsSprite />
      </body>
    </html>
  );
}
