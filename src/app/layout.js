import NextAuthProvider from "@/providers/NextAuthProvider";

import { yekan } from "@/utils/fonts";
import "./globals.css";
import Layout from "@/layout/Layout";

export const metadata = {
  title: "استوک کده",
  description: "خرید و فروش گوشی موبایل",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children} ) {
  return (
    <html lang="fa" dir="rtl">
      <body className={yekan.className}>
        <NextAuthProvider >
          <Layout>{children}</Layout>
        </NextAuthProvider>
      </body>
    </html>
  );
}
