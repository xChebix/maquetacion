const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express()
app.use(cors())
app.use(express.json());
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "maquetacion"
})
db.connect((err) => {
    if (err) {
      console.error('Database connection error:', err);
      throw err;
    }
    console.log('Connected to the database');
  });

app.get("/", (re,res)=> {
    return res.json('From backend side');
})
app.post('/login', (req, res) => {
    const query = "SELECT id FROM users WHERE username = ? AND password = ?";
  
    db.query(query, [req.body.username, req.body.password], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json("Login Failed");
      }
      if (data.length > 0) {
        const userId = data[0].id; // id respuesta
        return res.status(200).json({ id: userId, message: "Login Successfully" });
      } else {
        return res.status(401).json("No record");
      }
    });
});

app.post('/registerUser', (req,res) =>{
    const query = "insert into users (username,password) values (?,?)"
    db.query(query, [req.body.username, req.body.password], (err,data) =>{
        if(err) return res.json("Register Failed");
        if(data.length > 0) {
            return res.json("Register Successfully")
        } else{
            return res.json("No record")
        }
    })
}) 
app.listen(8081,()=> {
    console.log("Listening");
})