import Conn from '../../db';
import Sequelize from 'Sequelize';

// Assuming you have an 'Items' table in your SQL database, with at least these four columns

const AuthorModel = Conn.define('Authors', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    authorName: {
        type: Sequelize.STRING,
    },
    authorEmail: {
        type: Sequelize.STRING,
    }
});

export default AuthorModel;
