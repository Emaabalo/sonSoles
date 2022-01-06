module.exports = (sequelize, DataTypes) => {
    
    // // // definimos la tabla
    const usuarios = sequelize.define('usuarios' , {
        idUsuario: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        nombre: DataTypes.STRING(100),
        email: DataTypes.STRING(100)
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return usuarios;
};