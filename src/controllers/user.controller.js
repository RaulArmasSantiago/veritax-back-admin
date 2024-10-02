import Users from "../models/users.models";
import bcrypt from 'bcrypt'

export const createUser = async (req, res) => {
  await Users.sync();
  const body = req.body

  const saltRounds = 10
  const hashedPassword = await bcrypt.hash(body.password, saltRounds)
  const crearUser = await Users.create({
    name: body.name,
    user: body.user,
    password: hashedPassword,
    admin: body.admin,
    type: body.type,
    fkIdCompany: body.fkIdCompany
  })

  res.status(201).json({
    ok: true,
    status: 201,
    message: "El usuario fue creada exitosamente",
    body: {
      product: crearUser
    }
  })
}