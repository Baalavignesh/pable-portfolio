import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import CustomNavbar from "@/components/customNavbar";
import { ThemeProvider } from "./ThemeContext";
import { PostHogProvider } from "@/components/PostHogProvider";
config.autoAddCss = false;
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Baalavignesh A | Software Engineer",
  description:
    "Portfolio of Baalavignesh A — Software Engineer specializing in full-stack development, mobile apps, and AI-powered products.",
  metadataBase: new URL("https://baalavignesh.com"),
  openGraph: {
    title: "Baalavignesh A | Software Engineer",
    description:
      "Portfolio of Baalavignesh A — Software Engineer specializing in full-stack development, mobile apps, and AI-powered products.",
    url: "https://baalavignesh.com",
    siteName: "Baalavignesh A",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Baalavignesh A | Software Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Baalavignesh A | Software Engineer",
    description:
      "Portfolio of Baalavignesh A — Software Engineer specializing in full-stack development, mobile apps, and AI-powered products.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body
        className={`antialiased bg-white dark:bg-dark-primary text-gray-900 dark:text-gray-100 transition-colors duration-200`}
      >
        <PostHogProvider>
          <ThemeProvider>
            <div className="flex flex-col items-center w-full">
              <CustomNavbar />
              {children}
            </div>
          </ThemeProvider>
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}