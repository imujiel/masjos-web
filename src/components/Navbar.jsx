import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Tutup menu saat pindah halaman
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Tutup saat resize ke desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // ESC untuk menutup menu mobile
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const scrollToTop = () => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  };

  const linkClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        {/* Logo */}
        <Link
          to="/"
          className="brand"
          onClick={scrollToTop}
          aria-label="Kembali ke beranda Masjos"
        >
          <img src="/Masjos.png" alt="Logo Masjos" width="28" height="28" />
          <span>Masjos</span>
        </Link>

        {/* Hamburger */}
        <button
          type="button"
          className={`hamburger ${open ? "active" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="main-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Menu */}
        <ul id="main-menu" className={`nav-menu ${open ? "open" : ""}`}>
          <li>
            <NavLink to="/" end className={linkClass} onClick={scrollToTop}>
              Beranda
            </NavLink>
          </li>
          <li>
            <NavLink to="/ecobrick" className={linkClass} onClick={scrollToTop}>
              Ecobrick
            </NavLink>
          </li>
          <li>
            <NavLink to="/biopori" className={linkClass} onClick={scrollToTop}>
              Lubang Biopori
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
