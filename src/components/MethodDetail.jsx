import { useState } from "react";
import "./MethodDetail.css";

export default function MethodDetail({ data }) {
  if (!data) return null;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="method-detail">
        {/* Gambar di kolom kiri (desktop) / atas (mobile) */}
        <img
          src={data.img}
          alt={data.title}
          className="method-detail__img"
          onClick={() => setOpen(true)}
        />

        {/* Kolom kanan (desktop) / bawah (mobile) */}
        <div className="method-detail__body">
          <h3>{data.title}</h3>
          <ul className="method-detail__list">
            {data.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
          <p className="method-detail__tips"><strong>Tips:</strong> {data.tips}</p>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div className="img-modal" onClick={() => setOpen(false)}>
          <img src={data.img} alt={data.title} className="img-modal__content" />
        </div>
      )}
    </>
  );
}
