// Semua gambar metode disimpan di /src/assets/Komposter
import komposterImg from "../assets/Komposter/1.png";
import maggotImg    from "../assets/Komposter/2.png";
import ecoImg       from "../assets/Komposter/3.png";
import bioporiImg   from "../assets/Komposter/4.png";
import losidaImg    from "../assets/Komposter/5.png";
import emberImg     from "../assets/Komposter/6.png";

export const METHOD_ORDER = [
  ["komposter","Komposter"],
  ["maggot","Maggot"],
  ["eco-enzyme","Eco Enzyme"],
  ["biopori","Biopori"],
  ["losida","Losida"],
  ["ember-tumpuk","Ember/Galon Tumpuk"],
];

export const METHODS = {
  komposter: {
    title: "Komposter",
    img: komposterImg,
    bullets: [
       "Isi berlapis: basah (sisa dapur, sayur, buah) + kering (daun, sekam, serbuk).",
  "Aduk tiap 3–5 hari agar rata & berudara, hindari belatung berlebih.",
  "Jangan masukkan minyak/lemak karena sulit terurai & bau.",
  "Panen 1–3 bulan: warna gelap, remah, tak berbau. Jemur sebentar sebelum dipakai." ],
    tips: "Jika komposter terlalu lembap atau berbau, tambahkan bahan kering seperti daun kering atau sekam. Simpan di tempat teduh agar suhu stabil dan tidak kehujanan."
  },
  maggot: {
    title: "Maggot (BSF)",
    img: maggotImg,
    bullets: [
      "Berikan pakan tipis setiap hari berupa sisa sayur, buah, dan nasi. Jangan menimbun terlalu banyak agar tidak membusuk berlebihan.",
      "Tempatkan wadah maggot di lokasi teduh, lembap, dan memiliki sirkulasi udara baik agar larva cepat tumbuh.",
      "Larva dapat dipanen pada usia 10–20 hari saat sudah gemuk berwarna coklat muda. Hasil panen bisa untuk pakan ikan atau ternak."
    ],
    tips: "Jangan memberikan daging, tulang, atau makanan berminyak karena sulit diurai. Jaga area tetap bersih agar tidak mengundang bau dan hama."
  },
  "eco-enzyme": {
    title: "Eco Enzyme",
    img: ecoImg,
    bullets: [
      "Gunakan perbandingan 3:1:10, yaitu 3 bagian kulit buah segar, 1 bagian gula merah/gula pasir, dan 10 bagian air bersih.",
      "Simpan larutan dalam wadah tertutup rapat selama 3 bulan. Pada minggu pertama, buka tutup sebentar setiap hari untuk membuang gas fermentasi.",
      "Setelah matang, saring larutan dan pisahkan ampas. Cairannya bisa dipakai sebagai cairan pembersih, pupuk cair, atau pengusir serangga alami."
    ],
    tips: "Gunakan wadah plastik, bukan kaca, karena proses fermentasi menghasilkan gas. Beri label tanggal pembuatan agar mudah memantau masa fermentasi."
  },
  biopori: {
    title: "Biopori",
    img: bioporiImg,
    bullets: [
      "Lubangi tanah dengan bor biopori sedalam 80–100 cm, lalu masukkan sampah organik secara bertahap sebagai isian.",
      "Tutup lubang dengan tutup biopori agar tidak dimasuki serangga atau sampah anorganik. Tambahkan isian seminggu sekali.",
      "Setelah 1–3 bulan, isi biopori berubah menjadi kompos yang bisa diambil dan digunakan untuk menyuburkan tanaman."
    ],
    tips: "Buat lubang biopori di halaman rumah, dekat pohon, atau area tanah kosong. Hindari membuat di jalan atau trotoar agar tidak mengganggu aktivitas."
  },
  losida: {
    title: "Losida",
    img: losidaImg,
    bullets: [
      "Masukkan sisa dapur seperti kulit sayur dan nasi basi, lalu tutup dengan bahan kering seperti daun kering atau sekam secara bergantian.",
      "Tutup wadah rapat setiap kali menambahkan sampah baru agar proses penguraian tetap anaerobik (tanpa udara).",
      "Periksa kelembapan isi wadah secara berkala. Jika terlalu basah, tambahkan bahan kering untuk menyeimbangkan."
    ],
    tips: "Losida cocok untuk rumah dengan lahan terbatas. Pastikan ada lubang ventilasi kecil agar gas bisa keluar dan kompos tidak terlalu asam."
  },
  "ember-tumpuk": {
    title: "Ember/Galon Tumpuk",
    img: emberImg,
    bullets: [
      "Gunakan 2–3 ember atau galon plastik yang diberi lubang kecil di bagian bawah/samping untuk sirkulasi udara.",
      "Isi ember bagian atas dengan sampah organik dan bahan kering secara bergantian. Jika penuh, pindahkan ke ember berikutnya.",
      "Lapisan terbawah biasanya lebih cepat matang karena mendapat tekanan dari atas. Kompos bisa dipanen lebih dulu dari lapisan bawah."
    ],
    tips: "Letakkan ember di atas alas agar air lindi tidak mengotori lantai. Hindari terkena hujan langsung agar kompos tidak terlalu basah."
  }
};

