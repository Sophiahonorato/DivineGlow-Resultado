import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./style.css";
import bannerMain from "../../../assets/images/imagemDeFundo.svg";

const Main = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      className="main-banner"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <motion.img
        src={bannerMain}
        alt="Banner principal"
        className="main-img"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{
          duration: 1.2,
          ease: "easeOut",
          delay: 0.2,
        }}
      />
    </motion.section>
  );
};

export default Main;
