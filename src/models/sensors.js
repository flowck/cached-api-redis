'use strict';
module.exports = (sequelize, DataTypes) => {
  const sensors = sequelize.define('sensors', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    battery_life: DataTypes.STRING,
    beach_name: DataTypes.STRING,
    measurement_date_and_time: DataTypes.DATE,
    measurement_id: DataTypes.STRING,
    transducer_depth: DataTypes.FLOAT,
    turbidity: DataTypes.FLOAT,
    water_temperature: DataTypes.FLOAT,
    wave_height: DataTypes.FLOAT,
    wave_period: DataTypes.FLOAT
  }, {});
  sensors.associate = function(models) {
    // associations can be defined here
  };
  return sensors;
};