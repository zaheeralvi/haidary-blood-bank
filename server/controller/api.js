const express = require('express');

const router = express.Router();

const mongoose = require('mongoose');

// const db = 'mongodb://localhost/haidaryBloodBank';
const db = 'mongodb://localhost/narsun';
mongoose.Promise = global.Promise;
const user = require('../models/user');


mongoose.connect(db,function (err) {
    if(err){
        console.log('Error : '+err);
    } else {
        console.log('Success connection');
    }
});

// // Device Api's
// router.get('/products',function (req,res) {
//     Product.find({}).exec(function (err,products) {
//         if(err) {
//             res.send('error occured ' + err);
//         } else {
//             res.json(products);
//         }
//     });
// });


// router.patch('/product/:id',function (req,res) {

//     Product.findByIdAndUpdate(req.params.id,{
//        $set:{Name:req.body.Name,Cost:req.body.Cost,Expiry:req.body.Expiry,Warranty:req.body.Warranty}
//     },{
//         new: true
//     }, function (err,updatedProduct) {
//             if(err){
//                 console.log('Error occured '+ err);
//             }else{
//                 res.json(updatedProduct);
//             }
//         }
//     );

// });

// router.post('/product',function (req,res) {

//     var newProduct = new Product();
//     newProduct.Name = req.body.Name;
//     newProduct.Cost = req.body.Cost;
//     newProduct.Warranty = req.body.Warranty;
//     newProduct.Image = req.body.Image;
//     newProduct.Expiry = req.body.Expiry;
//     newProduct.save(function (err,insertedProduct) {
//         if(err){
//             console.log('err'+err);
//         }else{
//             res.json(insertedProduct);
//         }
//     });
// });



// user Api's

router.get('/users',function (req,res) {
    user.find({}).exec(function (err,users) {
        if(err) {
            res.send('error occured ' + err);
        } else {
            res.json(users);
        }
    });
});


router.post('/user',function (req,res) {

    var newuser = new user();
    newuser.firstname = req.body.firstname;
    newuser.lastname = req.body.lastname;
    newuser.save(function (err,inserteduser) {
        if(err){
            console.log('err'+err);
        }else{
            res.json(inserteduser);
        }
    });
});


router.delete('/user/:id',function (req,res) {

    user.findByIdAndRemove(req.params.id,function (err,deleteduser) {
        res.json(deleteduser);
    });

});



// Setting Api's

// router.get('/settings',function (req,res) {
//     setting.find({}).exec(function (err,settings) {
//         if(err) {
//             res.send('error occured ' + err);
//         } else {
//             res.json(settings);
//         }
//     });
// });

// router.post('/setting',function (req,res) {

//     var newsetting = new setting();
//     newsetting.setting1 = req.body.setting1;
//     newsetting.setting2 = req.body.setting2;
//     newsetting.setting3 = req.body.setting3;
//     newsetting.setting4 = req.body.setting4;
//     newsetting.save(function (err,insertedsetting) {
//         if(err){
//             console.log('err'+err);
//         }else{
//             res.json(insertedsetting);
//         }
//     });
// });

// router.patch('/setting/:id',function (req,res) {
//     setting.findByIdAndUpdate(req.params.id,{
//        $set:{setting1:req.body.setting1,setting2:req.body.setting2,setting3:req.body.setting3,setting4:req.body.setting4}
//     },{
//         new: true
//     }, function (err,updatedsetting) {
//             if(err){
//                 console.log('Error occured '+err)
//             }else{
//                 res.json(updatedsetting);
//             }
//         }
//     );

// });

module.exports = router;