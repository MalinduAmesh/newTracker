const express = require('express')
const router = express.Router()
const Income = require('../model/income')

router.get('/',(req,res)=>{

    res.send('Income Come')
});

router.post('/income',(req,res)   =>{

    Income.find({"email":req.body.email})

    .then((result) =>{

        // if(result === null){
        //     Income.
        // }

    })


    // const income = new Income(req.body);

    // income.save()
    // .then(()=>{
    //     res.send('Income ADDED!')
    // })
});

module.exports = router;