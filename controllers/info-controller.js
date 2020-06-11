var router = require('express').Router();
var sequelize = require('../db');
var User = sequelize.import('../models/user.js');
var Info = sequelize.import('../models/info.js')

//POST new info
router.post('/create', (req, res) => {
   const infoFromRequest ={
       zipcode: req.body.info.zipcode,
       price: req.body.info.price,
       topping: req.body.info.topping,
       soup: req.body.info.soup,
       owner_id: req.user.id
   }
   Info.create(infoFromRequest)
       .then(info => res.status(200).json({
           info: info
       }))
       .catch(err => res.status(500).json({
           error: err
       }))
})

//get all info

router.get('/get', function(req, res){
    var userid = req.user.id;
    Info
        .findAll({
            where: { owner_id: userid }
        })
        .then (
            function findAllSuccess(data){
                res.json(data);
            },
            function findAllSError(err){
                res.send(500, err.message);
            }
        );
});

//get single info by id
router.get('/:id', function(req, res){
    var data = req.params.id;
    // var userid = req.user.id;
        Info
            .findOne({
                where: { id:data }
            })
            .then (
                function findOneSuccess(data){
                    res.json(data);
                },
                function findOneError(err){
                    res.send(500, err.message);
                }
            );
});


//UPDATE
router.put('/update/:id', (req,res)=>{
    var infoPK = req.params.id;
    var updateData = req.body.info
    var userid = req.user.id;

   Info.update(updateData,
       {where: {id: infoPK, owner_id: userid}
   })
   .then(info => res.status(200).json({updateData})
   )
.catch(err => res.status(500).json({
    error: err
}))
});

//DELETE
router.delete('/delete/:id', (req,res)=>{
    var data = req.params.id
    var userid = req.user.id;
   Info.destroy({
       where: {
           id: data, owner_id: userid
       }
   })
   .then (
    function deleteInfoSuccess(data){
        res.send("you removed an info");
    },
    function deleteInfoError(err){
        res.send(500, err.message);
    }
);
});

module.exports = router;
