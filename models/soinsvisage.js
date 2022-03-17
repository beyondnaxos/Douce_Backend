const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('soinsvisage', {
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
    prixclassic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tempsclassic: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    prixpremium: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tempspremium: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    commentaire: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'soinsvisage',
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
