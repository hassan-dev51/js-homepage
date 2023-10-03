import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Js Mastery",
  description:
    "Want to learn coding to get dream job, congratulations you are on the right place",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black-100 font-poppins">{children}</body>
    </html>
  );
}
