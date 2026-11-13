import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0B0D12",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://abdelrahmanfathy.dev"),
  title: {
    default: "FathyTech by Abdelrahman Fathy | Product Engineer",
    template: "%s | Abdelrahman Fathy",
  },
  description:
    "FathyTech,by Abdelrahman Fathy, Product Engineer and founder of FathyTech. Building modern web applications, digital experiences, SEO strategies, and automation solutions.",
  keywords: [
    "FathyTech",
    "Abdelrahman Fathy",
    "Product Engineer Egypt",
    "React Developer Egypt",
    "Next.js Developer",
    "Frontend Developer",
    "Web Application Development",
    "SEO-Friendly Websites",
    "React and Next.js Developer",
    "n8n Automation",
    "TypeScript Engineer",
    "مهندس منتجات برمجية",
    "مطور واجهات أمامية",
  ],
  authors: [{ name: "Abdelrahman Fathy", url: "https://abdelrahmanfathy.dev" }],
  creator: "Abdelrahman Fathy",
  publisher: "FathyTech",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_EG"],
    url: "https://abdelrahmanfathy.dev",
    siteName: "FathyTech — By Abdelrahman Fathy",
    title: "Abdelrahman Fathy | Founder of FathyTech & Product Engineer",
    description:
      "Abdelrahman Fathy, Product Engineer and founder of FathyTech. Building modern web applications, digital experiences, SEO strategies, and automation solutions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FathyTech — Abdelrahman Fathy, Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdelrahman Fathy | Founder of FathyTech & Product Engineer",
    description:
      "Product Engineer and founder of FathyTech, building modern web applications, digital experiences, SEO strategies, and automation solutions.",
    creator: "@abdelrahmanfathy",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://abdelrahmanfathy.dev",
    languages: {
      "en-US": "https://abdelrahmanfathy.dev",
      "ar-EG": "https://abdelrahmanfathy.dev",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://abdelrahmanfathy.dev/#person",
      name: "Abdelrahman Fathy",
      jobTitle: "Product Engineer",
      email: "afat7i2005@gmail.com",
      telephone: "+201220407008",
      image: "https://abdelrahmanfathy.dev/abdelrahman-fathy-portrait.jpg",
      url: "https://abdelrahmanfathy.dev",
      worksFor: {
        "@id": "https://abdelrahmanfathy.dev/#organization",
      },
      sameAs: [
        "https://linkedin.com/in/abdelrahmanfathyradwan",
        "https://github.com/abdelrahmanfathyradwan",
        "https://mostaql.com/u/abdelrahmanfthy",
        "https://khamsat.com/user/afathyredwan",
      ],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "Technical SEO",
        "Frontend Architecture",
        "Workflow Automation",
        "n8n",
        "Tailwind CSS",
      ],
      description:
        "Product Engineer and founder of FathyTech, specializing in modern web applications, React, Next.js, TypeScript, SEO-friendly architecture, and workflow automation.",
    },
    {
      "@type": "Organization",
      "@id": "https://abdelrahmanfathy.dev/#organization",
      name: "FathyTech",
      url: "https://abdelrahmanfathy.dev",
      logo: "https://abdelrahmanfathy.dev/fathytech-logo.png",
      founder: {
        "@id": "https://abdelrahmanfathy.dev/#person",
      },
      description:
        "FathyTech is the independent technology brand of Abdelrahman Fathy, a Product Engineer building modern web applications, digital experiences, SEO strategies, and automation solutions.",
    },
    {
      "@type": "WebSite",
      "@id": "https://abdelrahmanfathy.dev/#website",
      url: "https://abdelrahmanfathy.dev",
      name: "FathyTech — By Abdelrahman Fathy",
      publisher: {
        "@id": "https://abdelrahmanfathy.dev/#organization",
      },
      inLanguage: ["en-US", "ar-EG"],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${cairo.variable} bg-[#0B0D12] text-[#F5F7FA] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
