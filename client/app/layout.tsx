import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  description: `
  CrazyCodes.me is a dedicated platform designed to streamline the submission process for students' lab assignments. With a user-friendly interface and seamless functionality, students can securely send their lab work files directly to their college-provided email addresses or personal emails without any hassle. This ensures a smooth and efficient submission process, reducing the dependency on personal Gmail accounts or third-party services.
  `,
  generator: "Next.js",

  keywords: [
    "crazycodes",
    "crazycodes.me",
    "crazy codes",
    "crazy codes me",
    "crazy codes submission",
    "crazy codes lab submission",
    "crazy codes lab submission platform",
    "crazy codes lab submission website",
    "crazy codes lab submission site",
    "crazy codes lab submission app",
    "crazy codes lab submission application",
    "crazy codes lab submission tool",
    "crazy codes lab submission service",
    "crazy codes lab submission software",
    "crazy codes lab submission system",
    "crazy codes lab submission program",
    "crazy codes lab submission solution",
    "crazy codes lab submission product",
    "crazy codes lab submission utility",
    "crazy codes lab submission helper",
    "crazy codes lab submission assistant",
    "crazy codes lab submission aid",
    "crazy codes lab submission support",
    "crazy codes lab submission resource",
    "crazy codes lab submission feature",
    "crazy codes lab submission function",
    "crazy codes lab submission module",
    "crazy codes lab submission component",
    "crazy codes lab submission element",
    "crazy codes lab submission object",
    "crazy codes lab submission item",
    "crazy codes lab submission thing",
    "crazy codes lab submission stuff",
    "crazy codes lab submission matter",
    "crazy codes lab submission subject",
    "crazy codes lab submission topic",
    "crazy codes lab submission issue",
    "crazy codes lab submission concern",
    "crazy codes lab submission problem",
    "crazy codes lab submission trouble",
    "crazy codes lab submission worry",
    "crazy codes lab submission difficulty",
    "crazy codes lab submission challenge",
    "crazy codes lab submission obstacle",
    "crazy codes lab submission barrier",
    "crazy codes lab submission block",
    "crazy codes lab submission hindrance",
    "crazy codes lab submission setback",
    "crazy codes lab submission disadvantage",
    "crazy codes lab submission downside",
    "crazy codes lab submission negative",
    "crazy codes lab submission limitation",
    "crazy codes lab submission restriction",
    "crazy codes lab submission constraint"
  ],

  // og: {
  //   description: `
  //   Crazy
  //   Codes.me is a dedicated platform designed to streamline the submission process for students' lab assignments. With a user-friendly interface and seamless functionality, students can securely send their lab work files directly to their college-provided email addresses or personal emails without any hassle. This ensures a smooth and efficient submission process, reducing the dependency on personal Gmail accounts or third-party services.
  //   `,
  //   image: {
  //     url: "https://crazycodes.me/og-image.png",
  //     alt: "CrazyCodes.me",
  //     width: 1200,
  //     height: 630,
  //   },
  //   site_name: "CrazyCodes.me",
  //   title: "CrazyCodes.me",
  //   type: "website",
  //   url: "https://crazycodes.me",
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   creator: "@crazycodesme",
  //   description: `
  //   Crazy
  //   Codes.me is a dedicated platform designed to streamline the submission process for students' lab assignments. With a user-friendly interface and seamless functionality, students can securely send their lab work files directly to their college-provided email addresses or personal emails without any hassle. This ensures a smooth and efficient submission process, reducing the dependency on personal Gmail accounts or third-party services.
  //   `,
  //   image: {  // 1200x675
  //     url: "https://crazycodes.me/twitter-image.png",
  //     alt: "CrazyCodes.me",
  //     width: 1200,
  //     height: 675,
  //   },
  //   site: "@crazycodesme",
  //   title: "CrazyCodes.me",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-adsense-account" content="ca-pub-6049004127367436" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>crazycodes</title>
        <link rel="icon" href="/favicon.ico" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6049004127367436"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
