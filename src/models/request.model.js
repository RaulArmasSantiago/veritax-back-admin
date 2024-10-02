import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class Request extends Model { }

const SemestralEnum = {
  FIRST: 1,
  SECOND: 2
}

const TypeVerificationEnum = {
  INITIAL: 1,
  PERIODIC: 2,
  EXTRAORDINARY: 3,
}

Request.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  folio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateRequest: {
    type: DataTypes.DATE,
    allowNull: false
  },
  semester: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[
        SemestralEnum.FIRST,
        SemestralEnum.SECOND
      ]]
    }
  },
  typeVerification: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isIn: [[
        TypeVerificationEnum.INITIAL,
        TypeVerificationEnum.PERIODIC,
        TypeVerificationEnum.EXTRAORDINARY
      ]]
    }
  },
  fkCompany: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fkTaxi: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Request'
})

export default Request;