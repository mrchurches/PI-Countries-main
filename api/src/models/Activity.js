const { DataTypes, UUID, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('activity', {
    id: {
      type: UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    
    difficulty: {
        type: DataTypes.INTEGER,
        validate:{
            min:1,
            max:5
        },
        allowNull: false
      },
    duration: {
        type: DataTypes.STRING,
        allowNull: false
      },
    season: {
        type: DataTypes.ENUM("summer", "autumn", "winter", "spring"),
        allowNull: false
      },
  },{timestamps: false});
};

// ID--
// Nombre --
// Dificultad (Entre 1 y 5)--
// Duración--
// Temporada (Verano, Otoño, Invierno o Primavera --