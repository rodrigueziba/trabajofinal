const fs = require("fs");
const path = require("path");

// HELPERS
//const removeDuplicates = require("../helpers/removeDuplicates");
//const capFirstLetter = require("../helpers/capFirstLetter");

// DB
const db = require("../database/models");
const Op = db.Sequelize.Op;

// VALIDATIONS
const { validationResult } = require("express-validator");
const { pathToFileURL } = require("url");

// ------- JSON ------- //
// const productsFilePath = path.join(__dirname, "../data/products.json"); //ruta a nuestra DB JSON
// let products = JSON.parse(fs.readFileSync(productsFilePath, "utf-8")); // pasamos de formato JSON a JS

// CONTROLADOR
const productsController = {
  // MUESTRA PRODUCTOS
  all:(req, res ) => {
    db.Product.findAll ({
        include: [
          { association: "category" },
          //{ association: "tags" },
         // { association: "images" },
        ],
      })
    .then (function(productos){
       
        res.render('products/all', {productos:productos})
    })
      ;
  },

  search:(req, res ) => {},

  create:(req, res ) => {
      db.Category.findAll(      
            
      )
      .then(function(categories){
        res.render('products/createProduct', {categories:categories})
      }

      );

  },

  store: function(req, res) {
      db.Product.create({
         //name: 'dioses', 
          name: req.body.name,
        
          
          
          description: req.body.description,
          image: req.body.image,
          category: req.body.category,
          price: req.body.price,
          discount: req.body.discount,
          stock: req.body.stock, 
          
      }).catch((e) => {
        console.log(e);
      });
      let data ='a';
      return res.send(req.body);
      //res.redirect("/products");
  },

  detail:(req, res ) => {},

  edit:(req, res ) => {},

  update: (req, res ) => {},

  destroy:(req, res ) => {},


  };
module.exports = productsController;
