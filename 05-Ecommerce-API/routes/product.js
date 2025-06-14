const router = require("express").Router();
const ProductSchema = require("../models/Product");
const { verifyUserIsAdmin } = require("../middleware/varifyToken");

// CREATE PRODUCT
router.post("/", verifyUserIsAdmin, async (req, res) => {
  const newProduct = new ProductSchema(req.body);
  try {
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE PRODUCT

router.put("/:id", verifyUserIsAdmin, async (req, res) => {
  try {
    const updatedProduct = await ProductSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

// GET ALL PRODUCT

router.get("/", async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let products;
    if (qNew) {
      products = await ProductSchema.find().sort({ createdAt: -1 });
    } else if (qCategory) {
      products = await ProductSchema.find({
        categories: { $in: [qCategory] },
      });
    } else {
      products = await ProductSchema.find();
    }

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
