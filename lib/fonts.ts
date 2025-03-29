import {
  Poppins,
  Rubik_Mono_One,
  Urbanist,
  Plus_Jakarta_Sans,
  Amaranth,
  Doppio_One,
} from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const rubik = Rubik_Mono_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-rubik",
});

export const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-urbanist",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const amaranth = Amaranth({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-amaranth",
});

export const doppio = Doppio_One({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-doppio",
});
