import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar.jsx";
import "./MainLayout.css";

function DebugBar() {
  const { pathname } = useLocation();
  if (!import.meta.env.DEV) return null; // hanya saat development
  return <div className="debug-bar">route: {pathname} ✓</div>;
}

export default function MainLayout() {
  const { pathname } = useLocation();

  // aktifkan smooth scroll global
  useEffect(() => {
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = prev;
    };
  }, []);

  return (
    <>
      {/* Skip link untuk aksesibilitas keyboard */}
      <a href="#main" className="skip-link">Lewati ke konten utama</a>

      {/* Navbar selalu di atas */}
      <Navbar />

      {/* Konten utama (TANPA .container supaya bisa full-bleed) */}
      {/* key=pathname memastikan animasi diputar setiap route berubah */}
      <main id="main" className="page" role="main">
        <div key={pathname} className="route-fade-blur">
          <Outlet />
        </div>
      </main>

      {/* Footer masih pakai .container agar rapi */}
      <footer className="footer">
        <div className="container">© {new Date().getFullYear()} Masjos</div>
      </footer>

      {/* Pulihkan posisi scroll antar-navigasi */}
      <ScrollRestoration />

      {/* Debug overlay kecil (hanya di dev) */}
      <DebugBar />
    </>
  );
}
