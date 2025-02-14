const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('DB connected');
    }catch(e){
        console.log('DB connection error:'+e.message);
        process.exit(1);
    }
}

module.exports = connectDB;