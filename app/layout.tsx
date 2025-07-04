import type { Metadata } from "next";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import CustomNavbar from "@/components/customNavbar";
import { ThemeProvider } from "./ThemeContext";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Baalavignesh A  | Portfolio",
  description: "brrr",
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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`antialiased bg-white dark:bg-dark-primary text-gray-900 dark:text-gray-100 transition-colors duration-200`}>
        <ThemeProvider>
          <div className="flex flex-col items-center w-full">
            <CustomNavbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
