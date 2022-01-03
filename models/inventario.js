module.exports = (sequelize, DataTypes) => {
    
    // // // definimos la tabla
    const inventario = sequelize.define('inventario' , {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        genero: DataTypes.STRING(30),
        talle: DataTypes.INTEGER(2),
        tipoPrenda: DataTypes.STRING(30),
        color: DataTypes.STRING(20),
        inagen: DataTypes.STRING(500),
        precio: DataTypes.INTEGER(6)
    },
        {
            freezeTableName: true,
            timestamps: false
        });
    return inventario;
}