import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class Uva extends Model { }

const StatusEnum = {
  ACTIVE: 1,
  INACTIVE: 2,
  DELETE: 3

}

Uva.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  hologram: {
    type: DataTypes.STRING(6),
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
  modelName: 'Uva'
});

export default Uva