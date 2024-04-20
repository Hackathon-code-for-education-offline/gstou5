import User from "../models/users-model"

export const userController = {
    createUser: async (req, res) => {
        const { name, email, } = req.body
        User.create({
            name,
            email,
            document,
            photo

        })
    }
}