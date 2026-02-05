export default function GamePreview({ children }) {
  return (
    <div className="game-preview">
      <div className="preview-frame">
        {children}
      </div>
    </div>
  );
}
