"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import Script from 'next/script'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-DQ392ZF0QX"></Script>
      <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-DQ392ZF0QX');`}
      </Script>
      {/* initApollo Script */}
      <Script id="init-apollo" strategy="afterInteractive">
        {`
          function initApollo() {
            var randomString = Math.random().toString(36).substring(7);
            var scriptElement = document.createElement("script");
            scriptElement.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + randomString;
            scriptElement.async = true;
            scriptElement.defer = true;
            scriptElement.onload = function() {
              window.trackingFunctions.onLoad({ appId: "6665ec708bd70703a112d2e9" });
            };
            document.head.appendChild(scriptElement);
          }
          initApollo();
        `}
      </Script>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="bg-bg-color-primary dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
