import "./Ecobrick.css";
import ecoImg from "../assets/Gambar/Ecobrick.jpg";

export default function Ecobrick() {
  return (
    <main className="eco">
      {/* HERO full-bleed, teks di bawah */}
      <section
        className="eco-hero eco-hero--full eco-hero--bottom"
        aria-label="Ecobrick — Botol Isi Plastik Padat"
      >
        <div
          className="eco-hero__bg"
          style={{ backgroundImage: `url(${ecoImg})` }}
        />
        <div className="eco-hero__overlay" />
        <div className="container eco-hero__content">
          <div className="chips">
            <span className="chip">Bersih & kering</span>
            <span className="chip">Plastik saja</span>
            <span className="chip">Dipadatkan</span>
          </div>

          <h1>Ecobrick — Botol Isi Plastik Padat</h1>
          <p className="lead">
            Cara sederhana mengurangi sampah plastik: isi botol dengan plastik
            bersih & kering hingga padat, lalu manfaatkan sebagai bahan
            bangunan kreatif atau setorkan ke komunitas.
          </p>
          <div className="eco-hero__cta">
            <a href="#howto" className="btn white">Cara Membuat</a>
            <a
              href="https://bit.ly/TitikLokasiDropbox"
              target="_blank"
              rel="noopener"
              className="btn secondary"
            >
              Lihat Peta Setoran
            </a>
          </div>
        </div>
      </section>

      {/* MANFAAT */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Manfaat Ecobrick</h2>
          <ul className="eco-grid eco-grid--3">
            <li className="eco-card">
              <h3>Kurangi Sampah</h3>
              <p>
                Plastik susah terurai tidak tercecer, masuk botol dan aman
                disimpan.
              </p>
            </li>
            <li className="eco-card">
              <h3>Bahan Bangunan</h3>
              <p>
                Bisa disusun jadi kursi, meja, pot, dinding taman, atau karya
                seni.
              </p>
            </li>
            <li className="eco-card">
              <h3>Edukasi Ramah Lingkungan</h3>
              <p>Mengajak anak belajar pilah, cuci, keringkan, dan hemat plastik.</p>
            </li>
          </ul>
        </div>
      </section>

      {/* CARA MEMBUAT */}
      <section id="howto" className="section">
        <div className="container">
          <h2 className="section__title">Cara Membuat Ecobrick</h2>
          <ol className="eco-steps eco-grid eco-grid--3">
            {[
              "Siapkan botol plastik bersih & kering (600 ml–1,5 L).",
              "Kumpulkan plastik: bungkus jajanan, kresek, sedotan, sachet—semuanya harus bersih & kering.",
              "Gunting kecil-kecil agar mudah dipadatkan.",
              "Masukkan plastik sedikit demi sedikit, tekan dengan tongkat kayu untuk memadatkan.",
              "Isi sampai padat & keras. Target ±200 g untuk botol 600 ml.",
              "Tutup rapat, beri label berat & nama pembuat.",
            ].map((t, i) => (
              <li key={i} className="eco-step">
                <span className="eco-step__num">{i + 1}</span>
                <p>{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* TIPS & CATATAN */}
      <section className="section">
        <div className="container">
          <h2 className="section__title">Tips & Catatan</h2>
          <div className="eco-grid eco-grid--2">
            <div className="eco-card eco-card--ok">
              <h3>Yang Dianjurkan</h3>
              <ul className="eco-list">
                <li>Cuci bersih, keringkan plastik sebelum dimasukkan.</li>
                <li>Pipihkan botol agar padat & tidak mudah penyok.</li>
                <li>Simpan di tempat kering; setorkan bila sudah terkumpul.</li>
              </ul>
            </div>
            <div className="eco-card eco-card--warn">
              <h3>Hindari</h3>
              <ul className="eco-list">
                <li>Memasukkan bahan organik, benda tajam, atau cairan.</li>
                <li>Plastik basah/kotor (bisa berjamur & berbau).</li>
                <li>Botol setengah isi (harus padat & keras).</li>
              </ul>
            </div>
          </div>

          <div className="eco-cta">
            <a
              href="https://bit.ly/TitikLokasiDropbox"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Cari Titik Setoran Terdekat
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
