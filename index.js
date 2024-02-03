const express = require('express');
require('dotenv').config();
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
}); 


const routes = require("./Expsense/route.js");
const connectToDatabase = require("./DbConnection.js");
app.use(routes);
 
const Expenses = './models/Expenses.js';
require(Expenses);
// connecting to db
connectToDatabase()

app.get("/server_check",(req,res)=>{

  res.send("server is working...")

})
// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
