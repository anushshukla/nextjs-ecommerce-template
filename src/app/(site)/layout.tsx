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
import { ArtemisSequentialHead } from "@/components/HeadScripts/ArtemisV1Head";
import { ArtemisAsyncHead } from "@/components/HeadScripts/ArtemisAsyncHead";
import { ArtemisAsyncV3Head } from "@/components/HeadScripts/ArtemisAsyncV3Head";
import { ArtemisInsightsHead } from "@/components/HeadScripts/ArtemisInsightsHead";
import { AbtastyHead } from "@/components/HeadScripts/AbtastyHead";
import { VwoSyncHead } from "@/components/HeadScripts/VwoSyncHead";
import { HybridModeV1Head } from "@/components/HeadScripts/HybridModeV1Head";
import { HybridModeV2Head } from "@/components/HeadScripts/HybridModeV2Head";

const HEAD_COMPONENTS = {
  "/artemis": <ArtemisHead />,
  "/artemis-insights": <ArtemisInsightsHead />,
  "/artemis-sequential": <ArtemisSequentialHead />,
  "/artemis-async": <ArtemisAsyncHead />,
  "/artemis-async-v3": <ArtemisAsyncV3Head />,
  "/abtasty": <AbtastyHead />,
  "/vwo": <VwoSyncHead />,
  "/hybrid-mode-v1": <HybridModeV1Head />,
  "/hybrid-mode-v2": <HybridModeV2Head />,
} as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                console.error = function() { };
                window.onerror = function(message, source, lineno, colno, error) {
                  if (typeof message === 'string' && message.indexOf('418') !== -1) return true;
                  if (error && error.message && error.message.indexOf('418') !== -1) return true;
                  return false;
                };
              })();
            `,
          }}
        />
        {HEAD_COMPONENTS[pathname as keyof typeof HEAD_COMPONENTS] ?? null}
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


