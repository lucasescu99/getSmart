const S = require('sequelize');
const db = require ('../config/db');


const Categorias = db.define('categorias', {
    tag: {
        type:S.STRING,
        allowNull: false,
    }
})


module.exports = Categorias
