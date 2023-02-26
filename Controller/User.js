const { users }  = require("../Model/Users.js");


 const getUsers = async (req,res) => {
    const Users = await users.find();
    res.json(Users)
}

 const addUsers = async (req,res) => {
    const {name,surname,email,password} = req.body;
    const user = await users.findOne({email:email});
    if(user) return res.json("This user already exsist");
    const newUser = new users({
        name:name,
        surname:surname,
        email:email,
        password:password,
        isAdmin:false
    })
    newUser.save();
    return res.status(200).json({message:"User added succesfully",data:newUser})
}
 const loginUser = async (req,res) => {
    const {email,password} = req.body;
    
    try {
        const user = await users.findOne({email:email});
        if(!user) return res.json("This user is not registered");
        if(password !== user.password) return res.json("Password is not correct");
        return res.status(200).json({message:"User logged in succesfully",user:user})

        
    } catch (error) {
        return res.json("Error:",error.message)
        
    }
}
 const deleteUser = async (req,res) => {
    const user_id = req.params.id;
    await users.deleteOne({_id:user_id});
    return res.json({message:"User deleted succesfully",user_id:user_id})
}

 const updateUser = async (req,res) => {
    const user_id = req.params.id;
    const {name,surname,email,password,isAdmin} = req.body;
    try {
        await users.findById(user_id,(err,updated)=>{
            updated.name = name ? name : updated.name,
            updated.surname = surname ? surname : updated.surname,
            updated.email = email ? email : updated.email,
            updated.password = password ? password : updated.password,
            updated.isAdmin = isAdmin
            updated.save();
            return res.status(200).json({message:`${user_id} user updated succesfully`})
    
        })
        
    } catch (error) {
        console.log("error at update user")
        
    }
    
}

module.exports = {
    getUsers,
    addUsers,
    loginUser,
    deleteUser,
    updateUser
}