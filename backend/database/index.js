const Sequelize = require('sequelize');
const config = require('../config/config.json')['development']; // Use a configuração correta

const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Importar e inicializar modelos
const Endereco = require('../models/Pessoa');

Pessoa.init(sequelize);

module.exports = sequelize;