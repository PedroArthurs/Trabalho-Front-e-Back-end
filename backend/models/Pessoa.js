const { Model, DataTypes } = require('sequelize');

class Pessoa extends Model {}

module.exports = (sequelize) => {
  Pessoa.init({
        Id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },

        Nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Cpf: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        Telefone: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        }, {
            sequelize,
            modelName: 'Pessoa',
            tableName: 'pessoas',
            timestamps: true,
        });
    
    return Pessoa;
};