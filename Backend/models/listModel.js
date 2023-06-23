const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter Name"]
    },

    position:{
        type:String,
        required:[true,"Please Enter position"]
    },

    office:{
        type:String,
        required:[true,"Please Enter office"]
    },

    age:{
        type:Number,
        required:[true,"Please Enter Name"],
        maxLength:[2,"age cannot exceed 2 character"]
    },

    startdate:{
        type:Date,
        default:Date.now
        

    },

    salary:{
        type:Number,
        required:[true,"Please Enter Name"],
        maxLength:[6,"salary cannot exceed 6 character"]
    }
});

module.exports = mongoose.model("list",listSchema);