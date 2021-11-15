module.exports = function(sequelize, dataTypes){
    let alias = "Product";

    let cols = {
        id: {
          type: dataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: dataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: dataTypes.TEXT,
        },
        price: {
          type: dataTypes.DECIMAL(10, 2),
          allowNull: false,
        },
        stock: {
          type: dataTypes.INTEGER,
          allowNull: false,
        },
        discount: {
          type: dataTypes.DECIMAL,
        },
        
      };
    
      let config = {
        tableName: "products",
        timestamps: true,
      };

    let Product = sequelize.define(alias, cols, config);

      
    return Product;

}