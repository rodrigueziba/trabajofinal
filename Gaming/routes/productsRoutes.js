// ************ Require's ************
const express = require("express");
const router = express.Router();

// ************ Validations ************
//const upload = require("../middlewares/multerValidationProduct");
//const validationsCreate = require("../middlewares/createProductValidation");
//const validationsEdit = require("../middlewares/editProductValidation");

//const adminMiddleware = require("../middlewares/adminMiddleware");

// ************ Controller Require ************
const productsController = require("../controllers/productsController");

/*** GET ALL PRODUCTS ***/
router.get("/", productsController.all);

/*** SEARCH PRODUCTS ***/
router.get("/search", productsController.search);

/*** CREATE ONE PRODUCT ***/
router.get("/create", productsController.create); 
router.post(
  "/create",
  //upload.array("image", 6),
  //validationsCreate,
  productsController.store
);

/*** GET ONE PRODUCT ***/
router.get("/detail/:id", productsController.detail);

/*** EDIT ONE PRODUCT ***/
router.get("/:id/edit" , productsController.edit); // manda el form de edición con toda la data del producto a editar
router.put(
  "/:id",
  //upload.array("image", 6),
  //validationsEdit,
  productsController.update
); // edita el product

/*** DELETE ONE PRODUCT***/
router.delete("/:id", productsController.destroy);





module.exports = router;
