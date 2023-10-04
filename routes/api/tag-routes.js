const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async(req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tags = await Tag.findAll({
    include:{
      model:Product,
      //   attributes: ['product_name', "product"]
    } 
});
console.log (tags)
  res.json (tags)
}); 

router.get('/:id', async(req, res) => {
  let id = req.params.id 
  // find a single tag by its `id`
  const tags = await Tag.findByPk(id,{
    include:{
      model:Product,
    //   attributes: ['tag_name', "tag"]
     }
  });
  console.log (tags)
  res.json (tags)
  // be sure to include its associated Product data
});

router.post('/', async(req, res) => {
  // create a new tag
  console.log (req.body)
  const tag = await Tag.create(req.body);
  res.json(tag);
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  let id = req.params.id
console.log (id)
let tag = await Tag.update(req.body, {
  where: {
    id: id
  }
});
res.json(tag)
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  let id = req.params.id
let tag = await Tag.destroy({
  where: {
    id: id
  }
});
res.json(tag)
});

module.exports = router;
