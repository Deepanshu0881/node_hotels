const express = require('express');
const router = express.Router();
const MenuItem = require('../models/MenuItem');

router.post('/',async (req,res)=>{ 
    try{
        const data = req.body;// Assuming the request body contains the person data
        const newMenu = new MenuItem(data);//Create a new person document using the mongoose model
        
        const response = await newMenu.save();
        console.log('data saved');
        res.status(200).json(response);
        
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    }
});
router.get('/',async(req,res)=>{
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
        
    }
});

router.get('/:tasteType', async(req,res)=>{
    try{
        const tasteType = req.params.tasteType;// Extract the work type from the URL parameter
        if(tasteType == 'spicy' || tasteType == 'sweet' || tasteType == 'sour'){
            const response = await MenuItem.find({taste:tasteType});
            console.log('response fetched');
            res.status(200).json(response);
        }
        else{
            res.status(404).json({eoor:'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal Server Error'});
    }
});

router.put('/:id', async (req,res)=>{
    try {
        const menuId = req.params.id;// Extract the id from the URL parameter
        const updatedMenuData = req.body;//Updated data for the person

        const response = await MenuItem.findByIdAndUpdate(menuId,updatedMenuData,{
            new:true,//Return the updated document
            runValidators:true,//Run Mongoose validation
        })
        if(!response){
            return res.status(404).json({error:'Menu not found'});
        }
        console.log('data Updated');
        res.status(200).json(response);
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

router.delete('/:id', async (req,res)=>{
    try {
        const menuId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({error:'Menu not found'});
        }
        console.log('data deleted');
        res.status(200).json({message:'Menu Deleted Successfully'});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});


module.exports = router;