const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signupUser = async (req, res) => {
  const { username, email, password } = req.body;

  const query = "insert into user (username,email,password) values(?,?,?)";

  try {
    const hashPW = await bcrypt.hash(password, 10);
    if (!hashPW) {
      return res.status(400).json({ message: "error while hashing pw" });
    }
    db.query(query, [username, email, hashPW], (err, result) => {
      if (err) {
        console.error("SQL Error:", err);
        return res.status(500).json({ error: "Database error occurred" });
      }
      res.status(200).json({ message: "User added successfully" });
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    const query = "SELECT * FROM user WHERE username = ?";
    
    try {
      db.query(query, [username], async (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Database error occurred" });
        }
        if (result.length === 0) {
          return res.status(401).json({ message: "Invalid username or password" });
        }

        
        const user = result[0];
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: "Invalid username or password" });
        }
  
        const token = jwt.sign(
          {
            id: user.id,
            username: user.username,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: "1h",
          }
        );
  

        res.cookie("token", token, {
          httpOnly: true,
          secure: true,
          maxAge: 60 * 60 * 1000,
        });

        
        return res.status(200).json({
          message: "Login successful",
          user: { id: user.id, username: user.username, email: user.email },
        });
      });
    } catch (error) {
      return res.status(500).json({ error });
    }
  };

  const getCurrent = async(req,res)=>{
    return res.json({user:req.user})
  }

  const logoutUser = async(req,res)=>{
    res.clearCookie("token");
    return res.status(200).json({message:"logout successfull"})
  }

module.exports = {
  signupUser,
  loginUser,
  getCurrent,
  logoutUser
};
