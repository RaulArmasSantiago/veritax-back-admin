import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class Taxi extends Model { }

Taxi.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  fkVehicle: {
    type: DataTypes.STRING,
  },
  plate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  concesion: {
    type: DataTypes.STRING,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fkOwner: {
    type: DataTypes.STRING,
  },
  fkProcessor: {
    type: DataTypes.STRING,
  },
  fkTaximeter: {
    type: DataTypes.STRING,
  },
  serie: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Taxi'
})

export default Taxi

