const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('libro', {
    ISBN: {
      type: DataTypes.STRING(20),
      allowNull: false,
      primaryKey: true
    },
    titulo: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    genero: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    anio_publicacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    precio: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    cantidad_en_stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    autor_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'autor',
        key: 'id'
      }
    },
    editorial_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'editorial',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'libro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ISBN" },
        ]
      },
      {
        name: "uk_ISBN",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ISBN" },
        ]
      },
      {
        name: "autor_id",
        using: "BTREE",
        fields: [
          { name: "autor_id" },
        ]
      },
      {
        name: "editorial_id",
        using: "BTREE",
        fields: [
          { name: "editorial_id" },
        ]
      },
    ]
  });
};
