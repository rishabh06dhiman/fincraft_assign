const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase =  require("./database")

// config file
dotenv.config({path:"backend/config.env"});

// connected to databse
connectDatabase();

app.listen(process.env.PORT, ()=>{
    console.log(`server is working on http://localhost:${process.env.PORT}` )
})