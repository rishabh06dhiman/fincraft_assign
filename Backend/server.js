const app = require("./app");

const dotenv = require("dotenv");
const connectDatabase =  require("./database")
const port = process.env.PORT || 6000;

// config file
dotenv.config({path:"backend/config.env"});

// connected to databse
connectDatabase();

app.listen(port, ()=>{
    console.log(`server is working on http://localhost:${port}` )
})