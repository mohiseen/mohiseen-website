import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mohiseen Shaik | Frontend Web Developer | UI Developer | UI Designer",
  description: "CSS and Javascript, CSS3, HTML5, web developer, web developer, design web, PSD to HTML, React JS, Next JS, Figma to HTML",
  openGraph: {
    type: "website",
    title: "Mohiseen Shaik | Frontend Web Developer | UI Developer | UI Designer",
    description: "CSS and Javascript, CSS3, HTML5, web developer, web developer, design web, PSD to HTML, React JS, Next JS, Figma to HTML",
    url: "https://mohiseen.com/",
    images: [
      {
        url: "https://mohiseen.netlify.app/images/mohiseen-front-end-developer-2.JPG",
        width: 1200,
        height: 630,
      },
    ],
    siteName: "Mohiseen Shaik | Frontend Web Developer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohiseen Shaik | Frontend Web Developer | UI Developer | UI Designer",
    description: "CSS and Javascript, CSS3, HTML5, web developer, web developer, design web, PSD to HTML, React JS, Next JS, Figma to HTML",
    images: ["https://mohiseen.netlify.app/images/mohiseen-front-end-developer-2.JPG"],
    site: "@mohiseen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}