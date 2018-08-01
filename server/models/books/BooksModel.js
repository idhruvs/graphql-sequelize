import Conn from '../../db';
import Sequelize from 'Sequelize';

// Assuming you have an 'Items' table in your SQL database, with at least these four columns

const BooksModel = Conn.define('Books', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
    },
    price: {
        type: Sequelize.FLOAT,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

export default BooksModel;
