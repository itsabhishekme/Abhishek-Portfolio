import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/layout/ScrollProgress";
import ThemeProvider from "@/context/ThemeContext";

import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: [
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abhishekkumar.dev"),

  title: {
    default: "Abhishek Kumar | DevOps Engineer Portfolio",
    template: "%s | Abhishek Kumar",
  },

  description:
    "Professional Portfolio of Abhishek Kumar. DevOps Engineer, QA Automation Engineer, AWS, Docker, Kubernetes, Terraform, Jenkins, Cypress, Playwright, Linux, Git, SQL.",

  keywords: [
    "Abhishek Kumar",
    "Portfolio",
    "DevOps",
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Jenkins",
    "Linux",
    "Git",
    "Automation Testing",
    "Playwright",
    "Cypress",
    "React",
    "Next.js",
    "TypeScript",
    "QA Engineer",
  ],

  authors: [
    {
      name: "Abhishek Kumar",
      url: "https://abhishekkumar.dev",
    },
  ],

  creator: "Abhishek Kumar",

  publisher: "Abhishek Kumar",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhishekkumar.dev",
    title: "Abhishek Kumar Portfolio",
    description:
      "DevOps Engineer | QA Automation Engineer | AWS | Docker | Kubernetes | Terraform",

    siteName: "Abhishek Kumar",

    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Kumar Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kumar Portfolio",

    description:
      "DevOps Engineer | QA Automation Engineer | AWS | Docker | Kubernetes",

    creator: "@abhishekkumar",

    images: ["/images/profile.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#2563eb",
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
    >
      <body
        className={`
          ${inter.variable}
          ${poppins.variable}
          bg-white
          text-gray-900
          antialiased
          min-h-screen
          flex
          flex-col
        `}
      >
        <ThemeProvider>

          {/* Scroll Progress */}
          <ScrollProgress />

          {/* Navigation */}
          <Navbar />

          {/* Toast Notifications */}
          <Toaster
            position="top-right"
            reverseOrder={false}
            toastOptions={{
              duration: 3000,

              style: {
                borderRadius: "12px",
                background: "#1f2937",
                color: "#ffffff",
              },
            }}
          />

          {/* Main Content */}
          <main
            className="
              flex-1
              w-full
              overflow-x-hidden
              scroll-smooth
            "
          >
            {children}
          </main>

          {/* Footer */}
          <Footer />

        </ThemeProvider>
      </body>
    </html>
  );
}