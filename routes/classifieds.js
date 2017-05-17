
'use strict';

const express = require('express');
const knex = require('../knex');

const router = express.Router();

// YOUR CODE HERE

router.get('/', (req,res) =>{
  knex('classifieds')
    .select('id','title','description','item_image','price')
    .then((data)=>{
      res.send(data);
    })
})

router.get('/:id', (req,res) =>{
  let id = req.params.id;

  knex('classifieds')
    .where('id',id)
    .select('id','title','description','item_image','price')
    .then((data)=>{
      res.send(data[0]);
    })
})
module.exports = router;
