import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class Profeco extends Model { }

const StatusEnum = {
  ACTIVE: 1,
  INACTIVE: 2,
  DELETE: 3
}

Profeco.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hologram: {
    type: DataTypes.STRING(15),
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
  modelName: 'Profeco'
});

export default Profeco