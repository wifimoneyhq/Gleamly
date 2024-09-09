const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Job = sequelize.define('Job', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  cleanerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status: {
    type: DataTypes.ENUM('pending', 'accepted', 'completed'),
    defaultValue: 'pending',
  },
  sizeOfWindows: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  numberOfFloors: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  scheduledTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Job;