import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import GlowBackground from "./GlowBackground.jsx";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col bg-black text-neutral-100">
      <GlowBackground />
      <Header />
      <main key={location.pathname} className="page-enter relative flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
