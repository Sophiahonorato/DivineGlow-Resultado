import React from "react";
import "./style.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Banner from "../../../assets/images/bannerLinhaDivine.png";

const SectionLinhaDivine = () => {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <motion.section
      ref={sectionRef}
      className="section-linha-divine"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <div className="container-LinhaDivine">
        
        <motion.div
          className="content-LinhaDivine"
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            A LINHA DIVINE <span className="colorNew">CRESCEU!</span>
          </motion.h1>

          <motion.p
            className="subtitulo-sectionLinhaDivine"
            initial={{ opacity: 0, y: 25 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Nossa coleção de maquiagem acaba de ganhar novos produtos que realçam
            sua beleza natural com elegância e sofisticação. Dos batons aos
            iluminadores, cada item foi desenvolvido com alta pigmentação,
            textura aveludada e longa duração, tudo para que você se sinta
            confiante em qualquer momento do dia. Descubra os novos tons,
            experimente combinações e brilhe intensamente com a Divine Glow.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SectionLinhaDivine;
