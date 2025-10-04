import type { Metadata } from "next";
import GlobalStyles from "./Globals";

import { Poppins } from "next/font/google";
import { Footer } from "./components/ui/Footer/Footer";
import Header from "@/app/components/ui/Header/Header";

export const metadata: Metadata = {
  title: "VIP store",
  description: "As melhores marcas você encontra aqui.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <head>
        <link rel="icon" href="/assets/favicon.ico" sizes="any" />
      </head>
      <body>
        <Header />
        <GlobalStyles />
        <div style={{ flex: "1" }}>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
