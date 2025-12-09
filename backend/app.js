import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config(); // ✅ ATIVA O .env

const app = express();

app.use(cors()); // ✅ PERMITE CONEXÃO COM O REACT
app.use(express.json());

// ✅ Rotas
app.use("/api/products", productRoutes)
app.use("/api/auth", authRoutes);

// ✅ Rota teste
app.get("/", (req, res) => {
  res.send("✅ API rodando corretamente!");
});

export default app;
