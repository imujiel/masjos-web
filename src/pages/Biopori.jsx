// =====================================
// File: src/pages/Biopori.jsx
// Versi gabungan: Quiz (Sesi 1) + Drag & Drop (Sesi 2)
// =====================================

import { useMemo, useState, useEffect, useRef } from "react";
import "./Biopori.css";

/** Soal (paket MasJOS / sampah) */
import QUESTIONS_DEFAULT, {
  QUESTIONS as QUESTIONS_NAMED,
  QUESTIONS_PER_SESSION as QPS,
  SCORE_PER_CORRECT as SPC,
} from "../Content/questions.js";

/** Item drag & drop */
import WASTES_DEFAULT, { WASTES as WASTES_NAMED } from "../Content/wastes.js";

/* Normalisasi sumber data & konstanta */
const QUESTIONS = (QUESTIONS_NAMED ?? QUESTIONS_DEFAULT ?? []);
const WASTES = (WASTES_NAMED ?? WASTES_DEFAULT ?? []);
const QUESTIONS_PER_SESSION = typeof QPS === "number" ? QPS : 10;
const SCORE_PER_CORRECT = typeof SPC === "number" ? SPC : 100;

/* Penalti salah untuk drag & drop */
const PENALTY_PER_WRONG = 50;

/* Utils */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function pickRandom(items, n) {
  return shuffle(items).slice(0, n);
}

export default function Biopori() {
  // --- User/session ---
  const [username, setUsername] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [score, setScore] = useState(0);

  // stage: "quiz" | "dragdrop"
  const [stage, setStage] = useState("quiz");

  // --- Quiz state ---
  const [idx, setIdx] = useState(0);
  const [locked, setLocked] = useState(false);
  const [selected, setSelected] = useState(null);
  const [sessionKey, setSessionKey] = useState(0); // reshuffle saat mulai ulang

  const sessionQuestions = useMemo(() => {
    if (!username || stage !== "quiz") return [];
    const pool = Array.isArray(QUESTIONS) ? QUESTIONS : [];
    const count = Math.min(pool.length, QUESTIONS_PER_SESSION);
    return pickRandom(pool, count);
  }, [username, stage, sessionKey]);

  const current = sessionQuestions[idx];
  const finishedQuiz = username && stage === "quiz" && idx >= sessionQuestions.length;

  // --- Drag & Drop state ---
  const [wasteOrder, setWasteOrder] = useState([]); // 15 item acak
  const [wIdx, setWIdx] = useState(0);
  const [ddResult, setDdResult] = useState(null);   // "benar" | "salah" | null
  const dragItemRef = useRef(null);

  const canPlayDrag = Array.isArray(WASTES) && WASTES.length > 0;

  useEffect(() => {
    if (stage === "dragdrop" && canPlayDrag) {
      setWasteOrder(shuffle([...WASTES]).slice(0, 15));
      setWIdx(0);
      setDdResult(null);
    }
  }, [stage, canPlayDrag]);

  const currentWaste = stage === "dragdrop" ? wasteOrder[wIdx] : null;
  const finishedDrag = stage === "dragdrop" && wIdx >= wasteOrder.length;

  // Autofocus input saat modal tampil
  const inputRef = useRef(null);
  useEffect(() => {
    if (!username) inputRef.current?.focus();
  }, [username]);

  // ===================== Handlers =====================
  function startGame(e) {
    e?.preventDefault?.();
    if (!nameInput.trim()) return;
    setUsername(nameInput.trim());
    setScore(0);
    setStage("quiz");
    setIdx(0);
    setLocked(false);
    setSelected(null);
    setSessionKey((k) => k + 1);
  }

  function chooseAnswer(choiceIndex) {
    if (stage !== "quiz" || locked || !current) return;
    setSelected(choiceIndex);
    setLocked(true);
    if (choiceIndex === current.answer) setScore((s) => s + SCORE_PER_CORRECT);
  }

  function nextQuestion() {
    if (stage !== "quiz" || !locked) return;
    setIdx((i) => i + 1);
    setLocked(false);
    setSelected(null);
  }

  function onDropTo(binType) {
    if (!currentWaste) return;
    const correct = currentWaste.type === binType;
    setDdResult(correct ? "benar" : "salah");
    if (correct) {
      setScore((s) => s + SCORE_PER_CORRECT);
    } else {
      setScore((s) => Math.max(0, s - PENALTY_PER_WRONG));
    }
  }

  function nextWaste() {
    if (wIdx < wasteOrder.length) {
      setWIdx((i) => i + 1);
      setDdResult(null);
    }
  }

  function resetAll() {
    setUsername("");
    setNameInput("");
    setScore(0);
    setStage("quiz");
    setIdx(0);
    setLocked(false);
    setSelected(null);
    setWasteOrder([]);
    setWIdx(0);
    setDdResult(null);
    setSessionKey((k) => k + 1);
  }

  // ===================== UI =====================
  return (
    <div className="biopori-page" style={{ position: "relative" }}>
      {/* NAVBAR (mini info) – tetap tajam/tidak blur */}
      <nav className="container bi-nav">
        <strong>👤 {username || "(belum login)"}</strong>
        <strong>🏆 Skor: {score}</strong>
      </nav>

      {/* Konten yang boleh diblur saat modal muncul */}
      <div className={`bi-content-wrap ${!username ? "is-blurred" : ""}`}>
        {/* ======= STAGE: QUIZ ======= */}
        {username && stage === "quiz" && (
          <main className="container bi-main-900">
            {sessionQuestions.length === 0 && (
              <div className="bi-card bi-mb16" style={{ color: "#b91c1c", background:"#fee2e2" }}>
                Bank soal kosong/gagal dimuat. Cek <code>src/Content/questions.js</code>.
              </div>
            )}

            {!finishedQuiz && current && (
              <section className="bi-card">
                <div className="bi-row-sb bi-mb8">
                  <small className="bi-text-666">Soal {idx + 1} / {sessionQuestions.length}</small>
                  <small className="bi-text-666">Nilai per soal: {SCORE_PER_CORRECT}</small>
                </div>

                <h2 className="bi-mb16">{current.q}</h2>

                <div className="bi-grid-gap12">
                  {current.choices.map((c, i) => {
                    const isCorrect = locked && i === current.answer;
                    const isWrong   = locked && selected === i && i !== current.answer;
                    return (
                      <button
                        key={i}
                        disabled={locked}
                        onClick={() => chooseAnswer(i)}
                        className={`bi-choice ${isCorrect ? "bi-choice--correct" : isWrong ? "bi-choice--wrong" : ""}`}
                      >
                        <span className="bi-choice-pill">{String.fromCharCode(65 + i)}</span>
                        {c}
                      </button>
                    );
                  })}
                </div>

                {locked && (
                  <div className="bi-row-sb bi-mt16">
                    <div className={selected === current.answer ? "bi-feedback-ok" : "bi-feedback-bad"}>
                      {selected === current.answer ? `Benar! +${SCORE_PER_CORRECT}` : "Salah."}
                    </div>
                    <button onClick={nextQuestion} className="bi-btn bi-btn-info">
                      {idx + 1 === sessionQuestions.length ? "Lihat Hasil" : "Soal Berikutnya"}
                    </button>
                  </div>
                )}
              </section>
            )}

            {finishedQuiz && (
              <section className="bi-card bi-center">
                <h2 className="bi-mb8">Sesi 1 (Kuis) Selesai! 🎉</h2>
                <p className="bi-text-555 bi-mb24">Kamu telah menyelesaikan {sessionQuestions.length} pertanyaan.</p>
                <div className="bi-score">Skor Sementara: {score}</div>
                <div className="bi-row-center bi-gap12">
                  <button
                    onClick={() => {
                      setIdx(0); setScore(0); setLocked(false); setSelected(null);
                      setSessionKey((k) => k + 1);
                    }}
                    className="bi-btn bi-btn-slate"
                  >
                    Ulangi Kuis
                  </button>

                  <button
                    onClick={() => setStage(canPlayDrag ? "dragdrop" : "quiz")}
                    className="bi-btn bi-btn-primary bi-fw700"
                    disabled={!canPlayDrag}
                    title={canPlayDrag ? "" : "Data drag & drop belum tersedia"}
                  >
                    {canPlayDrag ? "Lanjut ke Game 2 (Drag & Drop)" : "Game 2 tidak tersedia"}
                  </button>
                </div>
              </section>
            )}
          </main>
        )}

        {/* ======= STAGE: DRAG & DROP ======= */}
        {username && stage === "dragdrop" && (
          <main className="container bi-main-1000">
            {!finishedDrag && currentWaste && (
              <section className="bi-card">
                <div className="bi-row-sb bi-mb8">
                  <h2>Sesi 2: Seret & Letakkan</h2>
                  <small className="bi-text-666">
                    Benar: +{SCORE_PER_CORRECT} · Salah: -{PENALTY_PER_WRONG}
                  </small>
                </div>
                <div className="bi-text-666 bi-mb16">Item {wIdx + 1} / {wasteOrder.length}</div>

                {/* Item */}
                <div className="bi-center-row bi-mb24">
                  <div
                    ref={dragItemRef}
                    draggable
                    onDragStart={(e) => e.dataTransfer.setData("text/plain", currentWaste.type)}
                    className="bi-drag-item"
                    aria-label={`Seret ${currentWaste.name}`}
                  >
                    {currentWaste.img ? (
                      <img src={currentWaste.img} alt={currentWaste.name} className="bi-drag-img" />
                    ) : null}
                    <div className="bi-fs18">{currentWaste.name}</div>
                  </div>
                </div>

                {/* Tong */}
                <div className="bi-bins">
                  <DropBin title="Organik"   ddResult={ddResult} onDrop={() => onDropTo("organik")} />
                  <DropBin title="Anorganik" ddResult={ddResult} onDrop={() => onDropTo("anorganik")} />
                </div>

                {/* Feedback */}
                {ddResult && (
                  <div className="bi-row-sb bi-mt16">
                    <div className={ddResult === "benar" ? "bi-feedback-ok" : "bi-feedback-bad"}>
                      {ddResult === "benar" ? `Benar! +${SCORE_PER_CORRECT}` : `Kurang Tepat. -${PENALTY_PER_WRONG}`}
                    </div>
                    <button onClick={nextWaste} className="bi-btn bi-btn-info">Item Berikutnya</button>
                  </div>
                )}
              </section>
            )}

            {/* Hasil Drag & Drop */}
            {finishedDrag && (
              <section className="bi-card bi-center">
                <h2 className="bi-mb8">Sesi 2 (Drag & Drop) Selesai! 🧹</h2>
                <p className="bi-text-555 bi-mb16">Semua {wasteOrder.length} item sudah diklasifikasi.</p>
                <div className="bi-score">Total Skor Akhir: {score}</div>
                <div className="bi-row-center">
                  <button onClick={resetAll} className="bi-btn bi-btn-info">Main dari Awal</button>
                </div>
              </section>
            )}
          </main>
        )}
      </div>

      {/* ===== MODAL USERNAME (center; latar blur via .is-blurred di atas) ===== */}
      {!username && (
        <div role="dialog" aria-modal="true" className="bi-modal-layer">
          <div className="bi-modal">
            <h2 className="bi-modal__title">Masuk Game</h2>
            <p className="bi-text-666">Masukkan username kamu. Nama akan tampil di kiri atas.</p>
            <form onSubmit={startGame}>
              <input
                ref={inputRef}
                id="username-input"
                type="text"
                placeholder="cth: MasJOS"
                autoComplete="off"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="bi-input"
              />
              <button type="submit" className="bi-btn bi-btn-primary">Mulai</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* Sub-komponen */
function DropBin({ title, ddResult, onDrop }) {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => { e.preventDefault(); onDrop(); }}
      className={`bi-drop-bin ${ddResult ? (ddResult === "benar" ? "bi-drop-success" : "bi-drop-error") : ""}`}
      aria-label={`Drop ke tong ${title}`}
    >
      <div>
        <div className="bi-fs18 bi-mb6">🗑️ {title}</div>
        <small className="bi-text-647">(Seret item ke sini)</small>
      </div>
    </div>
  );
}
