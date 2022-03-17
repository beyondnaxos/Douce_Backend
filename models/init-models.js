var DataTypes = require("sequelize").DataTypes;
var _epilation = require("./epilation");
var _main = require("./main");
var _makeup = require("./makeup");
var _mgs = require("./mgs");
var _pieds = require("./pieds");
var _soinsvisage = require("./soinsvisage");
var _users = require("./users");

function initModels(sequelize) {
  var epilation = _epilation(sequelize, DataTypes);
  var main = _main(sequelize, DataTypes);
  var makeup = _makeup(sequelize, DataTypes);
  var mgs = _mgs(sequelize, DataTypes);
  var pieds = _pieds(sequelize, DataTypes);
  var soinsvisage = _soinsvisage(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);


  return {
    epilation,
    main,
    makeup,
    mgs,
    pieds,
    soinsvisage,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
