import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./style.css";

export default function NotFound() {
  return (
    <div className="notfound-container">

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="notfound-title"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="notfound-text"
      >
        Oops! Parece que essa página não existe.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.7 }}
        className="notfound-sub"
      >
        Talvez o link esteja incorreto ou a página foi removida.
      </motion.p>

      <Link to="/" className="notfound-btn">
        Voltar para a Home
      </Link>

      <motion.div
        className="notfound-circle"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
      />
    </div>
  );
}
