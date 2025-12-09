import "./style.css";

export default function SectionDivider({ titulo }) {
  return (
    <div className="section-divider-wrapper">
      <h2 className="section-divider-title">{titulo}</h2>
    </div>
  );
}
