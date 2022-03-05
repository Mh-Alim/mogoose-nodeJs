const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:3000/samsple").then(()=>{
    console.log("mongodb is connected successfully");
}).catch((err)=>{
    console.log(err);
})

const student = new mongoose.Schema({
    name:String,
    height: Number,
    weight: Number,
    email: String,
    workout: Boolean
})

const StudentCollection = new mongoose.model("StudentCollection",student)


const adder = async()=>{

    const ss = await StudentCollection.find({height:{$eq: 60}});

    console.log(ss);
    

}
adder();