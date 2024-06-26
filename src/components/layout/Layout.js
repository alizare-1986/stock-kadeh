import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import NextAuthProvider from "@/providers/NextAuthProvider";

function Layout({ children }) {
  const style = { minHeight: "1000px" };
  return (
    <>
      <NextAuthProvider>
        <Header />
        <div style={style}>{children}</div>
        <Footer />
      </NextAuthProvider>
    </>
  );
}

export default Layout;
