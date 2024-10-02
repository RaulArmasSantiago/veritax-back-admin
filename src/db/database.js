import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('veritaxv3', 'userveritax', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
})

export default sequelize