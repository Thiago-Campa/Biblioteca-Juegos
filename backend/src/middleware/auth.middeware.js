import jwt  from "jsonwebtoken";

const secretKey = "1234"

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({mensaje: "token no proporcionado"});
    }
    const token = authHeader.split(" ")[1]; 

    try{
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next()
    } catch{
        return res.status(401).json({mensaje: "token invalido o expirado"});
    }
};

export const verifyRole = (...rolePermitidos) => {
    return (req, res, next) => {
        if (!req.user || !rolePermitidos.includes(req.user.role)) {
            return res.status(403).json ({mensaje: "No tenes permisos para esta accion"})
        }
        next();
    };
};