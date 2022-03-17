const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mgs', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nom: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    bis: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    prix: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    temps: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    commentaire: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'mgs',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
