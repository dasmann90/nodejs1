const router = require("express").Router();
const {getAllProduct,getAllProductStatic} = require("../controllers/productController")

router.route('/').get(getAllProduct)

router.route('/static').get(getAllProductStatic)

module.exports = router;