const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('libro_editorial', {
    libro_ISBN: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: "",
      primaryKey: true,
      references: {
        model: 'libro',
        key: 'ISBN'
      }
    },
    editorial_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true,
      references: {
        model: 'editorial',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'libro_editorial',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "libro_ISBN" },
          { name: "editorial_id" },
        ]
      },
      {
        name: "uk_libro_editorial",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "libro_ISBN" },
          { name: "editorial_id" },
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
