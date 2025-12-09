import { Router } from "express";
import { createProduct, getProducts } from "../controllers/productController.js";

const router = Router(); // ✅ ESSA LINHA É O QUE ESTAVA FALTANDO OU ERRADO

router.post("/cadastrar", createProduct);
router.get("/", getProducts);

export default router; // ✅ Agora o router EXISTE
