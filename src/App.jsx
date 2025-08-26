// src/App.jsx
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Ecobrick from "./pages/Ecobrick.jsx";
import Biopori from "./pages/Biopori.jsx";
import "./App.css";

/** Scroll ke atas tiap pindah route (smooth, hormati prefers-reduced-motion) */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    const prefersReduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? "auto" : "smooth" });
  }, [pathname]);
  return null;
}

/** Debug overlay biar tahu app & route-nya hidup */
function DebugBar() {
  const { pathname, hash, search } = useLocation();
  return (
    <div style={{
      position:"fixed", bottom:8, right:8, zIndex:9999,
      background:"#111827", color:"#fff", padding:"6px 10px",
      borderRadius:8, fontSize:12, opacity:.8
    }}>
      path: {pathname}{search}{hash} ✓
    </div>
  );
}

/** ErrorBoundary sederhana */
function ErrorBoundary({ children }) {
  const [err, setErr] = useState(null);
  if (err) {
    return (
      <pre style={{whiteSpace:"pre-wrap", padding:16, margin:16,
        background:"#fee2e2", color:"#991b1b", borderRadius:12 }}>
{String(err?.stack || err)}
      </pre>
    );
  }
  return <ErrorCatcher onError={setErr}>{children}</ErrorCatcher>;
}
class ErrorCatcher extends React.Component {
  componentDidCatch(error) { this.props.onError?.(error); }
  render(){ return this.props.children; }
}

export default function App() {
  return (
    <HashRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ecobrick" element={<Ecobrick />} />
          <Route path="/biopori" element={<Biopori />} />
          <Route
            path="*"
            element={
              <main className="container" style={{ padding: "24px 16px" }}>
                Halaman tidak ditemukan.
              </main>
            }
          />
        </Routes>
        <DebugBar />
      </ErrorBoundary>
    </HashRouter>
  );
}
