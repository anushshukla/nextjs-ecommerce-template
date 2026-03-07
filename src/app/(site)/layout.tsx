"use client";
import "../css/euclid-circular-a-font.css";
import "../css/style.css";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import { usePathname } from "next/navigation";
import { ArtemisHead } from "@/components/HeadScripts/ArtemisHead";
import { AbtastyHead } from "@/components/HeadScripts/AbtastyHead";
import { VwoSyncHead } from "@/components/HeadScripts/VwoSyncHead";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        {pathname === "/artemis" && <ArtemisHead />}
        {pathname === "/abtasty" && <AbtastyHead />}
        {pathname === "/vwo" && <VwoSyncHead />}
      </head>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var originalError = console.error;
                console.error = function() {
                  var msg = arguments[0];
                  if (typeof msg === 'string' && msg.includes('Minified React error #418')) return;
                  if (msg && typeof msg === 'object' && typeof msg.message === 'string' && msg.message.includes('418')) return;
                  originalError.apply(console, arguments);
                };
              })();
            `,
          }}
        />
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


