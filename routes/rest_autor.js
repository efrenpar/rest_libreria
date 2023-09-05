var express = require('express');
var router = express.Router();
const autor = require('../models').autor;


router.get('/findAll', function(req, res, next) {  

    /* MÉTODO ESTÁTICO findAll  */

    autor.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

});
  
module.exports = router;