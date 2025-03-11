import type { Metadata } from "next";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: "Simplifying Lab Assignment Submissions",
  description: `
  CrazyCodes.me is a dedicated platform designed to streamline the submission process for students' lab assignments. With a user-friendly interface and seamless functionality, students can securely send their lab work files directly to their college-provided email addresses or personal emails without any hassle. This ensures a smooth and efficient submission process, reducing the dependency on personal Gmail accounts or third-party services.
  `,
  generator: "crazyCodes.me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-adsense-account" content="ca-pub-6049004127367436"></meta>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>crazycodes</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}
        <SpeedInsights />
      </body>
    </html>
  );
}
