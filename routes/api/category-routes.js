const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

// find all categories
//http://localhost:3001/api/categories
http: router.get("/", async (req, res) => {
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{ model: Product }],
    });

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// find one category by its `id` value
//http://localhost:3001/api/categories/{id passed}
router.get("/:id", async (req, res) => {
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!categoryData) {
      res.status(404).json({ message: "No Category Found!" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(400).json(error);
  }
});

// update a category by its `id` value
//http://localhost:3001/api/categories/{id passed}
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

// delete a category by its `id` value
//http://localhost:3001/api/categories/{id passed}
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!categoryData) {
      res.status(404).json({ mesage: "No category was found with this Id!" });
    }
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
