const express = require("express")
const router = express.Router();
const ProductsController = require("../controllers/ProductsController")
//API Routing End Point

router.post("/CreateProduct", ProductsController.CreateProduct)
router.post("/ReadProduct", ProductsController.ReadProduct)
router.post("/UpdateProduct/:id", ProductsController.UpdateProduct)
router.post("/DeleteProduct/:id", ProductsController.DeleteProduct)

module.exports = router