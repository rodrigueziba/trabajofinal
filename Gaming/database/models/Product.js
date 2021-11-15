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

    Product.associate = (models) => {
        // Categories
        Product.belongsTo(models.Category, {
          as: "category",
          foreignKey: "category_id",
        });
        
        // Tags
       // Product.belongsToMany(models.Tag, {
       //   as: "tags",
       //   through: "product_tag",
       //   foreignKey: "product_id",
       //   otherKey: "tag_id",
        //  timestamps: false,
       // });
       
        // ProductImages
      //  Product.hasMany(models.ProductImage, {
      //    as: "images",
       //   foreignKey: "product_id",
      //  });
        
        // Order Details
      //  Product.hasMany(models.OrderDetail, {
      //    as: "orderDetails",
       //   foreignKey: "product_id",
       // });
      };
      
    return Product;

}