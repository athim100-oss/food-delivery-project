const express= require("express")
const {adminsignup,signup,login,addUser,getUser,getoneUser,deleteUser,editUser,editoneUser}=require("../Controller/UserController")
const router=express.Router()

router.post ("/admin/signup",adminsignup)
router.post("/signup",signup)
router.post("/login",login)
router.post("/",addUser)
router.get("/",getUser)
router.get("/:id",getoneUser)
router.delete("/:id",deleteUser)
router.put("/:id",editUser)
router.patch("/:id",editoneUser)

module.exports=router