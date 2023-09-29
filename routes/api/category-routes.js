const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({
    include:{
      model:Product,
    //   attributes: ['product_name', "price"]
     }
  });
  console.log (categories)
  res.json (categories)
});

router.get('/:id', async(req, res) => {
  let id = req.params.id
  // find one category by its `id` value
  const categories = await Category.findByPk(id,{
    include:{
      model:Product,
    //   attributes: ['product_name', "price"]
     }
  });
  console.log (categories)
  res.json (categories)
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
console.log (req.body)

  const category = await Category.create(req.body);
  res.json(category);
});

router.put('/:id', async(req, res) => {
  // update a category by its `id` value
  let id = req.params.id
console.log (id)
let category = await Category.update(req.body, {
  where: {
    id: id
  }
});
res.json(category)
});

router.delete('/:id', async(req, res) => {
  // delete a category by its `id` value
  // Delete everyone named "Jane"
  let id = req.params.id
let category = await Category.destroy({
  where: {
    id: id
  }
});
res.json(category)
});

module.exports = router;
