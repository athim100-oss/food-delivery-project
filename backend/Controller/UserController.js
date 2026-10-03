const UserModel = require("../Model/UserModel");

//signup user registration

async function signup(req, res) {
  try {
    const { fullname, phonenumber, email, password } = req.body;

    //all feilds required
    if (!fullname || !phonenumber || !email || !password) {
      return res.status(400).json({
        message: "all feilds are required ",
      });
    }
    const existinguser = await UserModel.findOne({ email });

    //email already exists
    if (existinguser) {
      return res.status(400).json({
        message: "email already exist",
      });
    }

    //new usermodel

    const data = new UserModel({ fullname, phonenumber, email, password });
    const result = await data.save();

    res.status(201).json({
      message: "signup successfull",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: "signup failed",
      error: error.message,
    });
  }
}

//admin signup
async function adminsignup(req, res) {
  try {
    const { fullname, phonenumber, email, password } = req.body;

    const admin = new UserModel({
      fullname,
      phonenumber,
      email,
      password,
      role: "admin",
    });

    await admin.save();

    res.status(201).json({
      message: "Admin signup successful",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

//login user

async function login(req, res) {
  try {
    const { email, password } = req.body;

    //find mail
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "user not found",
      });
    }
    if (user.password !== password) {
      return res.status(400).json({
        message: "incorrect password",
      });
    }
    res.status(200).json({
      message: "login successfull",
      user: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "login failed",
      error: error.message,
    });
  }
}

//adduser post
async function addUser(req, res) {
  try {
    const { email, password } = req.body;
    const data = new UserModel({ email, password });
    const result = await data.save();
    res.send(result);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

//read getuser
async function getUser(req, res) {
  try {
    const alldata = await UserModel.find();
    res.send(alldata);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

// get oneuser
async function getoneUser(req, res) {
  try {
    const { id } = req.params;
    const data = await UserModel.findOne({ _id: id });
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

//delete user delete data

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    console.log("DELETE ID:", id);
    const data = await UserModel.findByIdAndDelete({ _id: id });

    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

//put update all field

async function editUser(req, res) {
  try {
    const { fullname, phonenumber, email, password } = req.body;
    const { id } = req.params;
    console.log("ID:", id);
    console.log("BODY:", req.body);
    const data = await UserModel.findByIdAndUpdate(
      id,
      { fullname, phonenumber, email, password },
      {
        new: true,
        runValidators: true,
      },
    );

    if (!data) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}
// patch update one field

async function editoneUser(req, res) {
  try {
    const { password } = req.body;
    const { id } = req.params;

    const data = await UserModel.updateOne({ _id: id }, { password });
    res.send(data);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

module.exports = {
  adminsignup,
  signup,
  login,
  addUser,
  getUser,
  getoneUser,
  deleteUser,
  editUser,
  editoneUser,
};
