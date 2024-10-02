import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class Seal extends Model { }

const StatusEnum = {
  ACTIVE: 1,
  INACTIVE: 2,
  DELETE: 3
}

Seal.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncremental: true
  },
  seal: {
    type: DataTypes.STRING(8),
    allowNull: false,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[
        StatusEnum.ACTIVE,
        StatusEnum.INACTIVE
      ]]
    }
  },
  fkIdCompany: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Seal'
});

export default Seal