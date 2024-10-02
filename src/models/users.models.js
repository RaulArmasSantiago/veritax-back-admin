import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class User extends Model { }

User.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  type: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fkIdCompany: {
    type: DataTypes.INTEGER,
  }
}, {
  sequelize,
  modelName: 'User'
});

export default User