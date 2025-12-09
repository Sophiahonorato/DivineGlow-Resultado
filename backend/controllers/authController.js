import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


const JWT_SECRET = process.env.JWT_SECRET || "fallback_super_secreto";

// CADASTRO
export async function register(req, res) {
  try {
    const { name, email, password } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ error: "E-mail já cadastrado" });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hash
    });

    // não devolver senha
    const { password: _, ...userData } = user.toObject();

    return res.status(201).json(userData);
  } catch (error) {
    return res.status(500).json({ error: "Erro ao registrar usuário" });
  }
}

// LOGIN
export async function login(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return res.status(401).json({ error: "Senha inválida" });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: "1d" }
    );

    const { password: _, ...userData } = user.toObject();

    return res.json({ user: userData, token });
  } catch (error) {
    return res.status(500).json({ error: "Erro ao fazer login" });
  }
}
