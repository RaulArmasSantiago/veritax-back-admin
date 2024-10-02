import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class Vehicle extends Model { }

Vehicle.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subBrand: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Vehicle'
})

export default Vehicle