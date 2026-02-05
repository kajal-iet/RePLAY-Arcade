import { useState } from "react";
import "./notebook.css";

export default function DocNotebook({ docs }) {
  const [page, setPage] = useState(0);

  const nextPage = () => {
    if (page < docs.length - 1) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 0) setPage(page - 1);
  };

  return (
    <div className="notebook">

      {/* HEADER */}
      <div className="notebook-nav">
        <button onClick={prevPage} disabled={page === 0}>⬅</button>

        <span className="page-indicator">
          Page {page + 1} / {docs.length}
        </span>

        <button onClick={nextPage} disabled={page === docs.length - 1}>➡</button>
      </div>

      {/* PAGE CONTENT */}
      <div className="notebook-page">
        <h2>{docs[page].title}</h2>
        <pre>{docs[page].content}</pre>
      </div>
    </div>
  );
}
