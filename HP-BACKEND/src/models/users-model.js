import { DataTypes } from 'sequelize';


const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    document: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    photo: {
        type: DataTypes.JSON,
        allowNull: false,
        defaultValue: []
    },
    roles: {
        type: DataTypes.JSON,
    }
  

  });

export default User