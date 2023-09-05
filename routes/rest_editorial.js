var express = require('express');
var router = express.Router();
const editorial = require('../models').editorial;


router.get('/findAll', function(req, res, next) {  

    /* MÉTODO ESTÁTICO findAll  */

    editorial.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

});


router.get('/findAndCount', function(req, res, next) {  

    /* MÉTODO ESTÁTICO findAll  */

    editorial.findAndCountAll({
        offset: 0,
        limit: 1
    })
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

});


  
module.exports = router;