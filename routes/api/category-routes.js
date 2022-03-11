const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const catergoryData = await Category.findAll({
      include: {model: Product},
    });
    res.status(200).json(catergoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    });
    if(!categoryData) {
      res.status(404).json({message: 'No catergory found with that id'})
        return;
    }
    res.status(200).json(categoryData)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const catergoryData = await Category.create(req.body)
    res.status(200).json(catergoryData)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const catergoryData = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    }); 
    if(!catergoryData) {
      res.status(404).json({message: 'No category was found by that id'})
      return;
    }
    res.status(200).json(catergoryData)
  } catch (error) {
    res.status(500).json(error)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    },
  });
  if (!categoryData) {
    res.status(404).json({message: 'No category found by that id'})
  }
  res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error)
  }
});

module.exports = router;
