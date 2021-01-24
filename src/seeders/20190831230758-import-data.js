'use strict';
const data = require("../data/data.json");
const uuid = require("uuid");

// Format
const formatedData = data.map(item => {
  return {
    id: uuid(),
    battery_life: item.Battery_Life,
    beach_name: item.Beach_Name,
    measurement_date_and_time: item.Measurement_Date_And_Time,
    measurement_id: item.Measurement_ID,
    transducer_depth: item.Transducer_Depth,
    turbidity: item.turbidity,
    water_temperature: item.Water_Temperature,
    wave_height: item.Wave_Height,
    wave_period: item.Wave_Period,
    createdAt: new Date(),
    updatedAt: new Date()
  }
});

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('sensors', formatedData, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
