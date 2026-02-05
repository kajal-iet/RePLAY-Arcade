export default function CodeEditor({ code, setCode, onRun }) {
  return (
    <div className="code-editor">

      <div className="editor-header">
        <span>🧬 Game Engine</span>
        <button onClick={onRun}>▶ Run</button>
      </div>

      <textarea
        value={code}
        onChange={e => setCode(e.target.value)}
        spellCheck={false}
      />

    </div>
  );
}
