import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class Taximeter extends Model { }

Taximeter.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  approval: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  }
}, {
  sequelize,
  modelName: 'Taximeter'
})

export default Taximeter