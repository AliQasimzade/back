const { AdminUser } = require("../Model/AdminUser.js");

 const GetAdmins = async (req, res) => {
  const admins = await AdminUser.find();
  res.json(admins);
};
 const RegisterAdmins = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(req.body)
  try {
    const adminuser = await AdminUser.findOne({ email: email });
    if (adminuser) return res.json("This admin already exsist");
    const newAdmin = new AdminUser({
      name: name,
      email: email,
      password: password,
    });
    newAdmin.save();
    return res
      .status(200)
      .json({ message: "Admin registered succesfully", admin: newAdmin });
  } catch (error) {
    console.log("error:",error.message)
  }
};

 const LoginAdmin = async (req,res) => {
    const {email,password} = req.body;
    try {
        const admin = await AdminUser.findOne({email:email});
        if(!admin) return res.json("This user is not admin");
        if(password !== admin.password) return res.json("Password is not correct");
        return res.status(200).json({message:"Admin logged in succesfully",admin:admin})
        
    } catch (error) {
        return res.json("Error:",error.message)
        
    }
}
 const DeleteAdmin = async (req,res) => {
  const user_id = req.params.id;
  await AdminUser.deleteOne({_id:user_id})
  console.log(user_id)

}

module.exports = {
  GetAdmins,
  RegisterAdmins,
  LoginAdmin,
  DeleteAdmin
}
