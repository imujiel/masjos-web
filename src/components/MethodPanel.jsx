export default function MethodPanel({ method }) {
  if (!method) return null;
  return (
    <div className="method-panel">
      <div className="method-img" style={{ backgroundImage: `url(${method.img})` }} />
      <div className="method-body">
        <h3>{method.title}</h3>
        <ul className="method-list">
          {method.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        <p className="method-tips">Tips: {method.tips}</p>
      </div>
    </div>
  );
}
