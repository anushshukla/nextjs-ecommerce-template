"use client";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { usePathname } from 'next/navigation';

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isArtemisPage = pathname === '/artemis';

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {isArtemisPage && (
          <>
            <script
              id="artemis-start-time"
              nonce="456723789323765435"
              dangerouslySetInnerHTML={{
                __html: "window.startTime=performance.now();/*_vwo_cookieDomain='nextjs-ecommerce-template-ruddy.vercel.app'*/;",
              }}
            />
            <script
              nonce="456723789323765435"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://dacdn.abtasty.com/cloud-run-testing/final/4001222.js"
              id="vwoCode"
            />
          </>
        )}
      </head>
      <body>
        <ReduxProvider>
          <CartModalProvider>
            <ModalProvider>
              <PreviewSliderProvider>
                <Header />
                {children}

                <QuickViewModal />
                <CartSidebarModal />
                <PreviewSliderModal />
              </PreviewSliderProvider>
            </ModalProvider>
          </CartModalProvider>
        </ReduxProvider>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
