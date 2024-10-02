import User from './users.models';
import Company from './company.model';
import Taxi from './taxi.model';
import Vehicle from './vehicles.models';
import Taximeter from './taximeter.model';
import Client from './client.model';
import Request from './request.model';
import Inspection from './inspection.model';
import Profeco from './profeco.model';
import Seal from './seal.model';
import Uva from './uva.model';

// Definir las relaciones aquí

/**
 * Relación de 1 empresa a muchos usuarios
 */
Company.hasMany(User, {
  foreignKey: 'fkIdCompany',
  sourceKey: 'id'
});

User.belongsTo(Company, {
  foreignKey: 'fkIdCompany',
  targetKey: 'id'
});

/**
 * Relacion de 1 empresa a muchos hologramas Profeco
 */
Company.hasMany(Profeco, {
  foreignKey: 'fkIdCompany',
  sourceKey: 'id'
});

Profeco.belongsTo(Company, {
  foreignKey: 'fkIdCompany',
  targetKey: 'id'
});

/**
 * Relacion de 1 empresa a muchos hologramas Uva
 */
Company.hasMany(Uva, {
  foreignKey: 'fkIdCompany',
  sourceKey: 'id'
});

Uva.belongsTo(Company, {
  foreignKey: 'fkIdCompany',
  targetKey: 'id'
});

/**
 * Relacion de 1 empresa a muchos hologramas Precintos
 */
Company.hasMany(Seal, {
  foreignKey: 'fkIdCompany',
  sourceKey: 'id'
});

Seal.belongsTo(Company, {
  foreignKey: 'fkIdCompany',
  targetKey: 'id'
});

/**
 * Relacion de 1 vehciulo a muchas unidades
 */
Vehicle.hasMany(Taxi, {
  foreignKey: 'fkVehicle',
  sourceKey: 'id'
})

Taxi.belongsTo(Vehicle, {
  foreignKey: 'fkVehicle',
  targetKey: 'id'
})

/**
 * Relacion de  1 taximetro a muchas unidades
 */
Taximeter.hasMany(Taxi, {
  foreignKey: 'fkTaximeter',
  sourceKey: 'id'
})

Taxi.belongsTo(Taximeter, {
  foreignKey: 'fkTaximeter',
  targetKey: 'id'
})

/**
 * Relacion de 1 tramitador a muchas unidades
 */
Client.hasMany(Taxi, {
  foreignKey: 'fkProcessor',
  sourceKey: 'id'
})
Taxi.belongsTo(Client, {
  foreignKey: 'fkProcessor',
  targetKey: 'id'
})

/**
 * Relacion de 1 dueños a muchos unidades
 */
Client.hasMany(Taxi, {
  foreignKey: 'fkOwner',
  sourceKey: 'id'
})
Taxi.belongsTo(Client, {
  foreignKey: 'fkOwner',
  targetKey: 'id'
})

/**
 * Relacion de 1 empresa a muchas solicitudes
 */
Company.hasMany(Request, {
  foreignKey: 'fkCompany',
  sourceKey: 'id'
})

Request.belongsTo(Company, {
  foreignKey: 'fkCompany',
  targetKey: 'id'
})

/**
 * Relacion de 1 taxi a muchos solicitudes
 */

Taxi.hasMany(Request, {
  foreignKey: 'fkTaxi',
  sourceKey: 'id'
})

Request.belongsTo(Taxi, {
  foreignKey: 'fkTaxi',
  targetKey: 'id'
})

/**
 * Relacion 1 inspector a Muchas inspecciones
 */

User.hasMany(Inspection, {
  foreignKey: 'fkInspector',
  sourceKey: 'id'
})

Inspection.belongsTo(User, {
  foreignKey: 'fkInspector',
  targetKey: 'id'
})

/**
 * Relacion una verificación a un holograma precinto  y uva
 */

Inspection.hasOne(Profeco, {
  foreignKey: 'fkProfeco',
  sourceKey: 'id'
})

Profeco.belongsTo(Inspection, {
  foreignKey: 'fkProfeco',
  targetKey: 'id'
})

Inspection.hasOne(Seal, {
  foreignKey: 'fkSeal',
  sourceKey: 'id'
})

Seal.belongsTo(Inspection, {
  foreignKey: 'fkSeal',
  targetKey: 'id'
})

Inspection.hasOne(Uva, {
  foreignKey: 'fkUva',
  sourceKey: 'id'
})

Uva.belongsTo(Inspection, {
  foreignKey: 'fkUva',
  targetKey: 'id'
})

/**
 * Relacion de 1 solicitud a muchos inspecciones
 */
Request.hasMany(Inspection, {
  foreignKey: 'fkRequest',
  sourceKey: 'id'
})

Inspection.belongsTo(Request, {
  foreignKey: 'fkRequest',
  targetKey: 'id'
})




