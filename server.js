const express = require('express');
const mongoose = require('mongoose');
const BrandName = require('./model');

const app = express();

app.use(express.json())


// connected mongoose and console for error
mongoose.connect('mongodb+srv://kesavaddala:Swamy@cluster0.kvybt.mongodb.net/?retryWrites=true&w=majority').then(
    () => console.log('DB connected...') 
).catch(err => console.log(err))



app.post('/addbrands',async (req , res) =>{
    const {brandname} = req.body ;
    try{
        const newData = new BrandName({brandname});
        await newData.save();
        return res.json(await BrandName.find())

    }
    catch(err){
        console.log(err.message);
    }
})

app.get('/getbrands', async (req, res) => {
    try{
        const allData = await BrandName.find();
        return res.json(allData);

    }
    catch(err){
        console.log(err.message);
    }
})

app.listen(4000,()=>console.log('server running...'))