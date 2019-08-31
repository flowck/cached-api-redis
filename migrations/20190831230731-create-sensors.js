'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('sensors', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      battery_life: {
        type: Sequelize.STRING
      },
      beach_name: {
        type: Sequelize.STRING
      },
      measurement_date_and_time: {
        type: Sequelize.DATE
      },
      measurement_id: {
        type: Sequelize.STRING,
      },
      transducer_depth: {
        type: Sequelize.FLOAT
      },
      turbidity: {
        type: Sequelize.FLOAT
      },
      water_temperature: {
        type: Sequelize.FLOAT
      },
      wave_height: {
        type: Sequelize.FLOAT
      },
      wave_period: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sensors');
  }
};