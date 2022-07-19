const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://asa:jcfEDDEf9fxmQxLm@cluster0.qgsdgt0.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true ,  
        useUnifiedTopology: true});
   const Schema = mongoose.Schema;
    var TestimonySchema = new Schema({    
    imageUrl:String,
    name: String,  
    title: String,      
    description: String,  
    });

var Testimonydata = mongoose.model('testimonys', TestimonySchema); 
module.exports = Testimonydata;