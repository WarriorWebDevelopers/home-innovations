import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Define custom fonts with next/font/local
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

// Metadata for SEO purposes
export const metadata: Metadata = {
  title: "Rosales Home Innovations - Expert Home Repairs & Remodeling in Tennessee",
  description: "Professional home repair, remodeling, and renovation services in Murfreesboro, Nashville, and surrounding Tennessee areas. Specializing in drywall, painting, flooring, and complete home improvement solutions.",
  authors: [
    {
      name: "Alejandro Quintero Rosales", // Author's name
      url: "https://www.rosaleshomeinnovations.com", // Author's website (optional)
    },
  ],
  keywords: "home repairs Tennessee, remodeling contractors TN, drywall installation Murfreesboro, painting services Nashville, commercial remodeling Smyrna, home renovation Fayetteville TN, residential repairs Shelbyville, kitchen remodeling Spring Hill TN, bathroom renovation Tullahoma, flooring installation Eagleville, home improvement Lynchburg, local construction services Woodbury, licensed contractor TN, insured home repairs, affordable home renovations, custom home remodeling, interior and exterior painting, handyman services TN, expert drywall repair, quality craftsmanship, Tennessee home repair specialists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
