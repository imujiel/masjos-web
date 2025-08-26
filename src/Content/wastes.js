// src/Content/wastes.js

export const WASTES = [
  // ORGANIK
  { id: 1,  name: "Kulit Pisang",      type: "organik",   img: null },
  { id: 2,  name: "Daun Kering",       type: "organik",   img: null },
  { id: 3,  name: "Sisa Nasi",         type: "organik",   img: null },
  { id: 4,  name: "Ampas Kopi/Teh",    type: "organik",   img: null },
  { id: 5,  name: "Cangkang Telur",    type: "organik",   img: null },
  { id: 6,  name: "Sisa Sayur",        type: "organik",   img: null },
  { id: 7,  name: "Ranting Kecil",     type: "organik",   img: null },
  { id: 8,  name: "Kulit Jeruk",       type: "organik",   img: null },
  { id: 9,  name: "Sisa Buah",         type: "organik",   img: null }, // ganti "Bubur Kertas Basah"
  { id: 10, name: "Sisa Roti",         type: "organik",   img: null },

  // ANORGANIK (layak jual / daur ulang / non-organik)
  { id: 11, name: "Botol Plastik PET", type: "anorganik", img: null },
  { id: 12, name: "Kantong Plastik",   type: "anorganik", img: null },
  { id: 13, name: "Kaleng Minuman",    type: "anorganik", img: null },
  { id: 14, name: "Gelas Plastik PP",  type: "anorganik", img: null },
  { id: 15, name: "Sachet Kopi",       type: "anorganik", img: null },
  { id: 16, name: "Kardus Kering",     type: "anorganik", img: null },
  { id: 17, name: "Kaca Pecah",        type: "anorganik", img: null }, // tetap anorganik (hati2 tajam)
  { id: 18, name: "Styrofoam",         type: "anorganik", img: null },
  { id: 19, name: "Sedotan Plastik",   type: "anorganik", img: null },
  { id: 20, name: "Kabel Bekas",       type: "anorganik", img: null },
  { id: 21, name: "Masker Sekali Pakai", type: "anorganik", img: null }, // (di praktik sering residu, tapi kita cuma 2 tong)
  { id: 22, name: "Paku/Besi Kecil",   type: "anorganik", img: null },
  { id: 23, name: "Kain Sintetis",     type: "anorganik", img: null },
  { id: 24, name: "CD/DVD",            type: "anorganik", img: null },
  { id: 25, name: "Kemasan Aluminium Foil", type: "anorganik", img: null },
  { id: 26, name: "Botol Kaca",        type: "anorganik", img: null },
  { id: 27, name: "Kaleng Cat Kering", type: "anorganik", img: null },
  { id: 28, name: "Sikat Gigi Plastik", type: "anorganik", img: null },
  { id: 29, name: "Piring Pecah",      type: "anorganik", img: null },
  { id: 30, name: "Tas Belanja Plastik", type: "anorganik", img: null },

  // Dihapus: { id: 20, name: "Baterai Bekas*", ... } → B3 (jangan dimasukkan kalau hanya ada 2 tong)
];

export default WASTES;
