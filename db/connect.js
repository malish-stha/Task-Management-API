const mongoose = require('mongoose');

const connectDB = (url)=>{
    return mongoose.connect(url)
}


module.exports = connectDB


// {
//     userNewURLParser:true,
//     useCreateIndex: true,
//     useFindAndModify:false,
//     useUnifiedTopology:true,
// }