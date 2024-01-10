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
Product.belongsToMany(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Product.belongsToMany(Tags, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "product_id",
});
Tags.belongsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false,
  },
  as: "tags_id",
});

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

// traveller_id: {
//   type: DataTypes.INTEGER,
//   references: {
//     model: 'traveller',
//     key: 'id',
//     unique: false
//   }
// },
// location_id: {
//   type: DataTypes.INTEGER,
//   references: {
//     model: 'location',
//     key: 'id',
//     unique: false
//   }

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// Traveller.belongsToMany(Location, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Trip,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'planned_trips'
// });

// Location.belongsToMany(Traveller, {
//   // Define the third table needed to store the foreign keys
//   through: {
//     model: Trip,
//     unique: false
//   },
//   // Define an alias for when data is retrieved
//   as: 'location_travellers'
// });
