const express  =require('express')
const router = express.Router()
const User = require('../model/user')


// Get Custtomer Details
router.get('/user', (req,res) =>{

    User.find({

        email:req.body.email

        })

        .then((result) =>{

            if(result !==null){
                res.status(200).send(result)
            }else{
                res.status(404).send("Error");
            }
           
        })
        
});


// Add A Customer
router.post('/user',(req,res,next) =>{

const user = new User(req.body);

user.save()

.then(() => {
   res.send('User Saved')
})



});

router.delete('/',(req,res) =>{
    console.log("Customer Delete")

});
module.exports = router ;