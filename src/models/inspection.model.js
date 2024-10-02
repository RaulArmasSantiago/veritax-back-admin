import { DataTypes, Model } from 'sequelize'
import sequelize from '../db/database'

class Inspection extends Model { }

Inspection.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  folio: {
    type: DataTypes.STRING,
    allowNull: false
  },
  dateInspection: {
    type: DataTypes.DATE,
    allowNull: false
  },
  visualInspection: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  metrologicalInspection: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  ramp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tire: {
    type: DataTypes.STRING,
    allowNull: false
  },
  presure: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fkInspector: {
    type: DataTypes.STRING,
    allowNull: false
  },
  iDistance1Distance: {
    type: DataTypes.FLOAT,
  },
  iDistance1Time: {
    type: DataTypes.FLOAT,

  },
  iDistance1Speed: {
    type: DataTypes.FLOAT,

  },
  iDistance1Error: {
    type: DataTypes.FLOAT,

  },
  iDistance2Distance: {
    type: DataTypes.FLOAT,

  },
  iDistance2Time: {
    type: DataTypes.FLOAT,

  },
  iDistance2Speed: {
    type: DataTypes.FLOAT,

  },
  iDistance2Error: {
    type: DataTypes.FLOAT,

  },
  iDistance3Distance: {
    type: DataTypes.FLOAT,

  },
  iDistance3Time: {
    type: DataTypes.FLOAT,

  },
  iDistance3Speed: {
    type: DataTypes.FLOAT,

  },
  iDistance3Error: {
    type: DataTypes.FLOAT,

  },
  iDistance4Distance: {
    type: DataTypes.FLOAT,

  },
  iDistance4Time: {
    type: DataTypes.FLOAT,

  },
  iDistance4Speed: {
    type: DataTypes.FLOAT,

  },
  iDistance4Error: {
    type: DataTypes.FLOAT,

  },
  iDistance5Distance: {
    type: DataTypes.FLOAT,

  },
  iDistance5Time: {
    type: DataTypes.FLOAT,

  },
  iDistance5Speed: {
    type: DataTypes.FLOAT,

  },
  iDistance5Error: {
    type: DataTypes.FLOAT,

  },
  iDistanceAvarageVariation: {
    type: DataTypes.FLOAT,

  },
  iTime1Distance: {
    type: DataTypes.FLOAT,

  },
  iTime1Time: {
    type: DataTypes.FLOAT,

  },
  iTime1Speed: {
    type: DataTypes.FLOAT,

  },
  iTime1Error: {
    type: DataTypes.FLOAT,

  },
  iTime2Distance: {
    type: DataTypes.FLOAT,

  },
  iTime2Time: {
    type: DataTypes.FLOAT,

  },
  iTime2Speed: {
    type: DataTypes.FLOAT,

  },
  iTime2Error: {
    type: DataTypes.FLOAT,

  },
  iTime3Distance: {
    type: DataTypes.FLOAT,

  },
  iTime3Time: {
    type: DataTypes.FLOAT,

  },
  iTime3Speed: {
    type: DataTypes.FLOAT,

  },
  iTime3Error: {
    type: DataTypes.FLOAT,

  },
  iTime4Distance: {
    type: DataTypes.FLOAT,

  },
  iTime4Time: {
    type: DataTypes.FLOAT,

  },
  iTime4Speed: {
    type: DataTypes.FLOAT,

  },
  iTime4Error: {
    type: DataTypes.FLOAT,

  },
  iTime5Distance: {
    type: DataTypes.FLOAT,

  },
  iTime5Time: {
    type: DataTypes.FLOAT,

  },
  iTime5Speed: {
    type: DataTypes.FLOAT,

  },
  iTime5Error: {
    type: DataTypes.FLOAT,

  },
  iTimeAvarageVariation: {
    type: DataTypes.FLOAT,
  },
  fkProfeco: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fkUva: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fkSeal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  isPrint: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  fkRequest: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Inspection'
})

export default Inspection