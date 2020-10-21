const Sequelize = require('sequelize'); 

const sequelize = require('../database/database.js'); 

const Produto = sequelize.define("produto", { 

    id: { 

        allowNull: false, 

        autoIncrement: true, 

        primaryKey: true, 

        type: Sequelize.INTEGER 

    }, 

    nome: { 

        allowNull: false, 

        type: Sequelize.STRING(100), 

        validate: { 

            len: [3, 100] 

        } 

    }, 

    valor: { 

        allowNull: false, 

        type: Sequelize.DOUBLE(), 

        validate: { 

            len: [1, 999999] 

        } 

    },  

    quantidade: { 

        allowNull: false, 

        type: Sequelize.INTEGER, 

        validate: { 

            len: [1, 999999] 

        } 

    },  

    emEstoque: { 

        allowNull: false, 

        type: Sequelize.BOOLEAN(), 

        defaultValue: true 

    } 

}); 

 

module.exports = Produto; 