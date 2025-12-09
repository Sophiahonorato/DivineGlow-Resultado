import db from "../config/db.config.js";

// ✅ LISTAR PRODUTOS
export async function getProducts(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM produtos");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar produtos" });
  }
}

// ✅ CRIAR PRODUTO
export async function createProduct(req, res) {
  const { title, description, price, image } = req.body;

  try {
    await db.query(
      "INSERT INTO produtos (title, description, price, image) VALUES (?, ?, ?, ?)",
      [title, description, price, image]
    );

    res.status(201).json({ mensagem: "✅ Produto cadastrado com sucesso!" });
  } catch (error) {
    res.status(500).json({ erro: "Erro ao criar produto" });
  }
}
