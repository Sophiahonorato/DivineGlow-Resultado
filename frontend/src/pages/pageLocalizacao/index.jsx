import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./style.css";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CurvedLoop from "../../components/component/CurvedLoop";

export default function SectionLocalizacao() {
  const [regiaoSelecionada, setRegiaoSelecionada] = useState("sudeste");

  /* ANIMAÇÕES */
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 }
  };

  /* 🔥 SEUS IFRAMES ORIGINAIS EXATAMENTE COMO ESTAVAM */
  const mapas = {
    sudeste:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7326304.66790775!2d-49.5!3d-21.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448175e60989%3A0xdf37e2db7f14ad82!2sSudeste!5e0!3m2!1spt-BR!2sbr!4v1700000000001",
    nordeste:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7592573.439909759!2d-41!3d-9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ba04368c774b1d%3A0xf09d6efc20db6fe!2sNordeste!5e0!3m2!1spt-BR!2sbr!4v1700000000002",
    norte:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21568162.207092144!2d-65!3d-3.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbfe3327762dd7b%3A0xcc9bdd5a8f7cd66!2sNorte!5e0!3m2!1spt-BR!2sbr!4v1700000000003",
    "centro-oeste":
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10673733.98687903!2d-55!3d-15!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93600f8ddd014a67%3A0x8f733bdb3a9e2!2sCentro-Oeste!5e0!3m2!1spt-BR!2sbr!4v1700000000004",
    sul:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7316635.891832668!2d-55!3d-28.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f198b5b240c2ad%3A0xe0958c59fda7a8d!2sSul!5e0!3m2!1spt-BR!2sbr!4v1700000000005"
  };

  return (
    <>
      <CurvedLoop />
      <Header />

      <motion.main
        className="pagina-localizacao"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
      >
        {/* ========== COLUNA ESQUERDA ========== */}
        <motion.div
          className="col-esquerda"
          variants={fadeRight}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            NOSSAS LOJAS
          </motion.h1>

          <motion.p
            className="sub"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Encontre a loja mais próxima de você <br />
            e conheça nossos serviços.
          </motion.p>

          <motion.button
            className="botao-servicos"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            SERVIÇOS
          </motion.button>

          <p className="filtro-titulo">Filtre por região:</p>

          <motion.div
            className="botoes-regiao"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {["sudeste", "nordeste", "norte", "centro-oeste", "sul"].map(
              (regiao) => (
                <motion.button
                  key={regiao}
                  className={regiaoSelecionada === regiao ? "ativo" : ""}
                  onClick={() => setRegiaoSelecionada(regiao)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {regiao.toUpperCase()}
                </motion.button>
              )
            )}
          </motion.div>
        </motion.div>

        {/* ========== MAPA COM ANIMAÇÃO ========== */}
{/* ========== MAPA COM ANIMAÇÃO ========== */}
<motion.div
  className="mapa-container"
  variants={fadeLeft}
  transition={{ duration: 0.8, delay: 0.25 }}
>
  <AnimatePresence mode="wait">
    <motion.div
      key={regiaoSelecionada}
      initial={{ opacity: 0, scale: 0.85, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 20 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mapa-wrapper"
    >
      <iframe
        src={mapas[regiaoSelecionada]}
        allowFullScreen=""
        loading="lazy"
        title={`Mapa ${regiaoSelecionada}`}
      />
    </motion.div>
  </AnimatePresence>
</motion.div>

      </motion.main>

      <Footer />
    </>
  );
}
