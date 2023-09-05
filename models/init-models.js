var DataTypes = require("sequelize").DataTypes;
var _autor = require("./autor");
var _editorial = require("./editorial");
var _libro = require("./libro");
var _libro_editorial = require("./libro_editorial");

function initModels(sequelize) {
  var autor = _autor(sequelize, DataTypes);
  var editorial = _editorial(sequelize, DataTypes);
  var libro = _libro(sequelize, DataTypes);
  var libro_editorial = _libro_editorial(sequelize, DataTypes);

  editorial.belongsToMany(libro, { as: 'libro_ISBN_libros', through: libro_editorial, foreignKey: "editorial_id", otherKey: "libro_ISBN" });
  libro.belongsToMany(editorial, { as: 'editorial_id_editorials', through: libro_editorial, foreignKey: "libro_ISBN", otherKey: "editorial_id" });
  libro.belongsTo(autor, { as: "autor", foreignKey: "autor_id"});
  autor.hasMany(libro, { as: "libros", foreignKey: "autor_id"});
  libro.belongsTo(editorial, { as: "editorial", foreignKey: "editorial_id"});
  editorial.hasMany(libro, { as: "libros", foreignKey: "editorial_id"});
  libro_editorial.belongsTo(editorial, { as: "editorial", foreignKey: "editorial_id"});
  editorial.hasMany(libro_editorial, { as: "libro_editorials", foreignKey: "editorial_id"});
  libro_editorial.belongsTo(libro, { as: "libro_ISBN_libro", foreignKey: "libro_ISBN"});
  libro.hasMany(libro_editorial, { as: "libro_editorials", foreignKey: "libro_ISBN"});

  return {
    autor,
    editorial,
    libro,
    libro_editorial,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
