import React from "react";
import "./style.css";

export default function MenuProdutos({ categoria, produtos }) {
  if (!categoria) return null;

  return (
    <div className="menuProdutos-container">
      {produtos.map((p, i) => (
        <div key={i} className="menuProdutos-card">
          <img src={p.imagem} alt={p.titulo} />

          <h4>{p.subtitulo}</h4>
          <p>{p.titulo}</p>
        </div>
      ))}
    </div>
  );
}
