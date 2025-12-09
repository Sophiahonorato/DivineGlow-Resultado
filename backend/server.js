import app from "./app.js";
import db from "./config/db.config.js"; // ✅ importa o pool direto

const PORT = process.env.PORT || 3333;

// ✅ Testa a conexão com o banco ao iniciar
try {
  await db.query("SELECT 1");
  console.log("✅ Conectado ao MySQL da Aiven!");
} catch (err) {
  console.error("❌ Erro ao conectar no MySQL:", err);
}

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});