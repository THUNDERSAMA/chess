import "./skeleton.css";
export default function Border_horizontal() {
  return (
    <div className="ch-border-h">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className={`cell-border-h`}>
          {/* content for even and odd indices */}
          {String.fromCharCode(index + 65)}
        </div>
      ))}
    </div>
  );
}
