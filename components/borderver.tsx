import "./skeleton.css";
export default function Border_vertical() {
  return (
    <div className="ch-border-v">
      {Array.from({ length: 8 }, (_, index) => (
        <div key={index} className={`cell-border-v`}>
          {/* content for even and odd indices */}
          {index}
        </div>
      ))}
    </div>
  );
}
