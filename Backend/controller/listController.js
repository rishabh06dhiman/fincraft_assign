const List = require("../models/listModel");

// create table data

exports.createRow = async (req,res,next)=>{
    
    const row = await List.create(req.body);

    res.status(201).json({
        success:true,
        row
    })
}

exports.getList = async (req,res)=>{
    
    const rows = await List.find();
   res.status(200).json({
    success:true,
    rows
    })
}
