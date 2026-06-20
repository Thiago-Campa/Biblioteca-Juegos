import User from "../models/user/user.js"

export const getAllUsers = async (req, res) => {
    const users = await User.findAll()
    res.json(users)
}

export const getbyID = async (req, res) => {
    const {id} = req.params

    const user = await User.findByPk(id)

    return res.json(user)
}

export const updateUsers = async (req, res) => {
    const { id } = req.params
    const userActual = await User.findByPk(id)

    if (!userActual) {
        return res.status(404).json({ mensaje: "Usuario no encontrado" })
    }

    const userName = req.body.userName ?? userActual.userName
    const email = req.body.email ?? userActual.email
    const password = req.body.password ?? userActual.password
    const role = req.body.role ?? userActual.role

    await User.update(
        { userName, email, password, role },
        { where: { id } }
    );

    const updatedUser = await User.findByPk(id)

    return res.json(updatedUser)
}

export const deleteUser = async (req, res) => {
    const {id} = req.params
    await User.destroy({
        where: {id: id}
    })

    return res.json({mensaje: "Usuario eliminado"})
}