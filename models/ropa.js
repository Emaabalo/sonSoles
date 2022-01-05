module.exports = (sequelize, DataTypes) => {
    
    // // // definimos la tabla
    const ropa = sequelize.define('ropa' , {
        idPrenda: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },

        genero: DataTypes.STRING(30),
        talle: DataTypes.INTEGER(2),
        tipoPrenda: DataTypes.STRING(30),
        color: DataTypes.STRING(20),
        imagen: DataTypes.STRING(2000),
        precio: DataTypes.INTEGER(6)
    },
    {
        freezeTableName: true,
        timestamps: false
    });
    return ropa;
};