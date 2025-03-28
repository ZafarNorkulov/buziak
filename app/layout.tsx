
import type { Metadata } from "next";
import "./globals.css";
import ScreenCheck from "@/components/screen-check";
import ReduxProvider from "@/providers/reduxProvider";
import TanstackProvider from "@/providers/tanstackProvider";
import { poppins, rubik, urbanist, jakarta, amaranth, doppio } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Buziak",
  description: "Generated by create next app",
  icons: "/buziak.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" className={`${poppins.variable} ${rubik.variable} ${urbanist.variable} ${jakarta.variable} ${amaranth.variable} ${doppio.variable}`}>
      <body
      >
        <ReduxProvider>
          <TanstackProvider>
            <ScreenCheck>
              {children}
            </ScreenCheck>
          </TanstackProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
