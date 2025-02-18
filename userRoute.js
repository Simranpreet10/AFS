const  express = require("express");
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient()

router.get("/:email",async(req,res)=>{
    const {email} = req.params;
    const user = await Prisma.user.findUnique({
        where:{
            email:email,
        },
    })
    res.json({user});
})
router.get("/:email",async(req,res)=>{
    const {email,name} = req.body;
    let newUser = await Prisma.user.create({
        data:{
            email:email,
            name:name
        }
    })
    res.json({newUser})
})

router.delete("/:email",async(req,res)=>{
    const {email} = req.params
    const deleteuser = await Prisma.user.delete({
        where : {
            email: email,
        },
    })
    res.send("user deleted")
})

router.put("/",async(req,res)=>{
    const updateUser = await Prisma.user.update({
        where: {
          email: 'simranpreet@gmail.com',
        },
        data: {
          name: 'Simranpreet Kaur',
        },
      })
      res.send("user update d")
})


module.exports=router;