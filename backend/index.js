
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectdb = require('./config/databaseconnection');
const studentRoutes = require('./routes/studentroutes');
const teacherRoutes = require('./routes/teacherroutes');
const port = process.env.PORT;

const app = express();
//middlewaare
app.use(cors());
app.use(express.json());

connectdb()

app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes)

app.get('/',(req,res)=>{
    res.send("Hello from backend ");
});

app.listen(port,()=>{
    console.log("server is running on port ",port)
})