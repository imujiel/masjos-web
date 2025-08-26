import { useState } from "react";
import "./Home.css";

/* Gambar utama (pakai folder Gambar) */
import heroImg     from "../assets/Gambar/PilahKeluarga.png";
import step1       from "../assets/Gambar/1.png";
import step2       from "../assets/Gambar/2.png";
import step3       from "../assets/Gambar/3.png";
import step4       from "../assets/Gambar/4.png";
import step5       from "../assets/Gambar/5.png";
import organikBg   from "../assets/Gambar/11.png";
import anorganikBg from "../assets/Gambar/22.png";
import b3Bg        from "../assets/Gambar/33.png";
import residuBg    from "../assets/Gambar/44.png";
import mapBlur     from "../assets/Gambar/Map.png";

/* Data & komponen detail metode */
import { METHODS, METHOD_ORDER } from "../Content/methods.js";
import MethodDetail from "../components/MethodDetail.jsx";

export default function Home() {
  // metode aktif (default item pertama = "komposter")
  const [active, setActive] = useState(METHOD_ORDER[0][0]);

  return (
    <main>
      {/* HERO */}
      <section className="hero" aria-label="Masjos — Masyarakat Jogja Olah Sampah">
        <div className="hero__bg" style={{ backgroundImage: `url(${heroImg})` }} />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="chips" aria-label="Capaian Masjos">
            <span className="chip">45 Kelurahan</span>
            <span className="chip">701 Bank Sampah Unit</span>
            <span className="chip">Sekolah & Kampus</span>
          </div>
          <h1>Masjos — Masyarakat Jogja Olah Sampah</h1>
          <p className="lead">
            Aksi nyata dari rumah: pilah, setorkan anorganik, olah organik, habiskan makanan, dan gunakan wadah berulang.
          </p>
          <div className="hero__cta">
            <a href="#steps" className="btn white">Pelajari 5 Langkah</a>
            <a
              href="https://bit.ly/TitikLokasiDropbox"
              target="_blank"
              rel="noopener"
              className="btn secondary"
            >
              Lihat Peta
            </a>
          </div>
        </div>
      </section>

      {/* 5 LANGKAH */}
      <section
        id="steps"
        className="section"
        /* kalau ada navbar fixed, ini mencegah judul ketutup */
        style={{ scrollMarginTop: "80px" }}
      >
        <div className="container">
          <h2 className="section__title">5 Langkah Masjos</h2>
          <div className="steps">
            <StepCard img={step1} title="Pilah Sampah" text="Pisahkan organik, anorganik, B3, residu." />
            <StepCard img={step2} title="Setor Anorganik" text="Bersih & kering → Bank Sampah." />
            <StepCard img={step3} title="Olah Organik" text="Kompos, maggot, eco enzyme, biopori." />
            <StepCard img={step4} title="Habiskan Makanan" text="Masak secukupnya; salurkan berlebih." />
            <StepCard img={step5} title="Wadah Berulang" text="Kurangi sekali pakai; bawa botol & kotak bekal." />
          </div>
        </div>
      </section>

      {/* KATEGORI */}
      <section className="section" aria-labelledby="kategori-title">
        <div className="container">
          <h2 id="kategori-title" className="section__title">Kategori Sampah</h2>
          <div className="cats">
            <BannerCard title="Organik" bg={organikBg} tone="green"
              bullets={["Sisa makanan/sayur","Kulit buah","Daun kering"]}
              tip="Kelola: kompos / biopori" />
            <BannerCard title="Anorganik" bg={anorganikBg} tone="blue"
              bullets={["Kertas","Plastik","Kaca","Logam"]}
              tip="Cuci & keringkan; setorkan ke Bank Sampah" />
            <BannerCard title="B3" bg={b3Bg} tone="red"
              bullets={["Baterai","Lampu","Elektronik kecil"]}
              tip="Dropbox B3 resmi" />
            <BannerCard title="Residu" bg={residuBg} tone="zinc"
              bullets={["Tisu","Popok/Pembalut","Plastik kotor"]}
              tip="Bungkus rapat; masukkan residu" />
          </div>
        </div>
      </section>

      {/* PANDUAN PENGOLAHAN (chips + panel inline) */}
      <section className="section" aria-labelledby="panduan-title">
        <div className="container">
          <h2 id="panduan-title" className="section__title">Panduan Pengolahan</h2>

          <ul className="methods" role="tablist" aria-label="Metode Pengolahan">
            {METHOD_ORDER.map(([id, label]) => (
              <li
                key={id}
                className={`method ${active === id ? "is-active" : ""}`}
                role="tab"
                aria-selected={active === id}
                tabIndex={0}
                onClick={() => setActive(id)}
                onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setActive(id)}
              >
                {label}
              </li>
            ))}
          </ul>

          {/* panel detail inline */}
          <MethodDetail data={METHODS[active]} />
        </div>
      </section>

      {/* PETA */}
      <section className="mapcta" aria-label="Ajakan membuka peta dropbox B3 dan bank sampah">
        <div className="mapcta__bg" style={{ backgroundImage: `url(${mapBlur})` }} />
        <div className="mapcta__overlay" />
        <div className="container mapcta__content">
          <h3>Cari Dropbox B3 & Bank Sampah Terdekat</h3>
          <p>Gunakan peta untuk menemukan titik terdekat.</p>
          <a className="btn" href="https://bit.ly/TitikLokasiDropbox" target="_blank" rel="noopener">
            Buka Peta
          </a>
        </div>
      </section>
    </main>
  );
}

/* Komponen kecil */
function StepCard({ img, title, text }) {
  return (
    <article className="stepcard">
      <div className="thumb" style={{ backgroundImage: `url(${img})` }} aria-hidden="true" />
      <div className="pad">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </article>
  );
}

function BannerCard({ title, bg, tone, bullets = [], tip }) {
  return (
    <article className={`banner tone-${tone}`}>
      <div className="banner__bg" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
      <div className="banner__overlay" />
      <div className="banner__content">
        <h3>{title}</h3>
        <ul>{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        <p className="tip">{tip}</p>
      </div>
    </article>
  );
}
