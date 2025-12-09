import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoDefault from "../../assets/images/logo.svg";
import LogoEscura from "../../assets/images/logoEscura.svg";

import Localizacao from "../../assets/images/localizacao.svg";
import Usuario from "../../assets/images/usuario.svg";

import "./style.css";

import corretivoClaro from "../../assets/images/corretivoClaro.svg";
import corretivoMedio from "../../assets/images/corretivoMedio.svg";
import corretivoEscuro from "../../assets/images/corretivoEscuro.svg";

import mascaraVolume from "../../assets/images/mascaraVolume.svg";
import delineador from "../../assets/images/delineador.svg";
import sombrasNude from "../../assets/images/sombrasNude.svg";

import glossNude from "../../assets/images/glossNude.svg";
import lipTint from "../../assets/images/lipTint.svg";
import batomRose from "../../assets/images/batomRose.svg";

import oleoCapilar from "../../assets/images/oleoCapilar.svg";
import ShampooGlow from "../../assets/images/ShampooGlow.svg";
import mascara from "../../assets/images/mascara.svg";

const produtosOlhos = [
  { img: mascaraVolume, nome: "Máscara Volume" },
  { img: delineador, nome: "Delineador Black" },
  { img: sombrasNude, nome: "Sombras Nude" },
];

const produtosPele = [
  { img: corretivoClaro, nome: "Corretivo Claro" },
  { img: corretivoMedio, nome: "Corretivo Médio" },
  { img: corretivoEscuro, nome: "Corretivo Escuro" },
];

const produtosCabelos = [
  { img: oleoCapilar, nome: "Óleo Capilar" },
  { img: ShampooGlow, nome: "Shampoo Glow" },
  { img: mascara, nome: "Máscara Nutritiva" },
];

const produtosLábios = [
  { img: glossNude, nome: "Gloss Nude" },
  { img: batomRose, nome: "Batom Rosé" },
  { img: lipTint, nome: "Lip Tint" },
];

const categorias = {
  Olhos: produtosOlhos,
  Pele: produtosPele,
  Lábios: produtosLábios,
  Cabelos: produtosCabelos,
};

export default function Header() {
  const { pathname } = useLocation();
  const [categoriaAtiva, setCategoriaAtiva] = useState(null);

  const usarLogoEscura = ["/localizacao", "/login", "/produtos"].includes(pathname);
  const logo = usarLogoEscura ? LogoEscura : LogoDefault;

  const dropdownRef = useRef(null);

  const alternarDropdown = (cat) => {
    setCategoriaAtiva((prev) => (prev === cat ? null : cat));
  };

  // 🔥 FECHAR DROPDOWN AO CLICAR FORA
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCategoriaAtiva(null);
      }
    }

    if (categoriaAtiva) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [categoriaAtiva]);

  return (
    <div className="header-wrapper">

      <header className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="Divine Glow" />
        </Link>

        <div className="header-bottom">

          <input className="pesquisa" placeholder="O que você procura hoje?..." />

          <nav className="nav-header">
            <ul>
              {Object.keys(categorias).map((cat) => (
                <li
                  key={cat}
                  onClick={() => alternarDropdown(cat)}
                  className={categoriaAtiva === cat ? "active" : ""}
                >
                  {cat} <span>▼</span>
                </li>
              ))}
            </ul>
          </nav>

          <Link to="/localizacao" className="localizacao">
            <img src={Localizacao} alt="" />
            <p>Encontre nossa<br /><span>Loja</span></p>
          </Link>

          <Link to="/login" className="usuario">
            <img src={Usuario} alt="" />
            <p>Olá, acesse<br /><span>Minha Conta</span></p>
          </Link>

        </div>
      </header>

      {/* ========== DROPDOWN ========== */}
      {categoriaAtiva && (
        <div className="dropdown-menu" ref={dropdownRef}>
          <button className="btn-close-dropdown" onClick={() => setCategoriaAtiva(null)}>
            ✕
          </button>


          <div className="dropdown-grid">
            {categorias[categoriaAtiva].map((p, i) => (
              <Link
                to="/produtos"
                key={i}
                className="dropdown-card"
                onClick={() => setCategoriaAtiva(null)} // fecha quando clicar
              >
                <img src={p.img} alt={p.nome} />
                <span>{p.nome}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
