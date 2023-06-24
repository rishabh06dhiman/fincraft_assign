const List = require("../models/listModel");
const ApiFeatures = require("../utils/apifeatures");

// create table data

exports.createRow = async (req,res,next)=>{
    
    const row = await List.create(req.body);

    res.status(201).json({
        success:true,
        row
    })
}

// get table data

exports.getList = async (req,res)=>{
    const apiFeature = new ApiFeatures(List.find(), req.query).search()
    const rows = await apiFeature.query;
   res.status(200).json({
    success:true,
    rows
    })
}






