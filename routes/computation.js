var express=require('express')

var router=express.Router();

router.get('/',(req,res)=>{
    let randomNumber=Math.random()*100
    let data=req.query.x
    console.log(data)
    res.render('computation',{
        randomSolution:`Ceil to ${randomNumber} is ${Math.ceil(randomNumber)}`,
        querySolution:`Ceil of ${data} is ${Math.ceil(data)}`
    })
})

module.exports=router