import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class Client extends Model { }

Client.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  num: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numInt: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cologne: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rfc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  personalId: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Client'
})

export default Client