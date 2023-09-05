var express = require('express');
var router = express.Router();
const libro = require('../models').libro;


router.get('/findAll', function(req, res, next) {  

    /* MÉTODO ESTÁTICO findAll  */

    libro.findAll({  
      attributes: { exclude: ["updatedAt", "createdAt"] } ,
  })  
  .then(resultado => {  
      res.json(resultado);  
  })  
  .catch(error => res.status(400).send(error)) 

});

router.get('/findByAutor/:id', function(req, res, next) {  

    console.log(req.params,"AAAAAAAAAAA");
    let id = req.params.id;

    libro.findAll({
        where: {
          autor_id: id
        }
      })
        .then(instancia => {
          if(instancia) {
            res.status(200).json(instancia);
          } else {
            res.status(404).json({error: "No existe registro con el identificador "+id})
          }
        })
        .catch(error => res.status(400).send(error))

});
  
module.exports = router;