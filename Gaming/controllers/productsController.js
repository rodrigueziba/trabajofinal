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
      res.render('/products/');
  },

  search:(req, res ) => {},

  create:(req, res ) => {},

  store:(req, res ) => {},

  detail:(req, res ) => {},

  edit:(req, res ) => {},

  update: (req, res ) => {},

  destroy:(req, res ) => {},


  };
module.exports = productsController;