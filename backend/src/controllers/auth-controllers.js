import bcrypt from "bcryptjs";
import User from "../models/user/user.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { userName, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            userName,
            email,
            password: hashedPassword
        });

        res.json({ mensaje: "Usuario registrado", user: newUser });

    } catch (error) {
        console.error("Error en register:", error.message);
        console.error("Detalle:", JSON.stringify(error.errors, null, 2));
        res.status(500).json({ mensaje: "Error al registrar", error: error.message });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ where: { email } });

        if (!user)
            return res.status(401).json({ mensaje: "Usuario no existe" });

        const comparison = await bcrypt.compare(password, user.password);

        if (!comparison)
            return res.status(401).json({ mensaje: "Email y/o contraseña incorrecta" });

        const secretKey = "1234";

        const token = jwt.sign(
            { id: user.id, email, role: user.role },
            secretKey,
            { expiresIn: "1h" }
        );

        return res.json(token);

    } catch (error) {
        console.error("Error en login:", error.message);
        res.status(500).json({ mensaje: "Error al iniciar sesión", error: error.message });
    }
};