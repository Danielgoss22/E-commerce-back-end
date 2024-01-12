// import models
const Product = require("./Product");
const Category = require("./Category");
const Tag = require("./Tag");
const ProductTag = require("./ProductTag");

// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Product.belongsToMany(Tag, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_categorys",
});
Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tag_categorys",
});

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
