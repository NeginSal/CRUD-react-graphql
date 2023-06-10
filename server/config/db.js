const mongoose = require('mongoose');

const connectDB = async () => {
const conn = await mongoose.connect('mongodb+srv://xxxxx:xxxxxxxx@cluster0.pv27y9b.mongodb.net/xxxxxx?retryWrites=true&w=majority');
console.log(`mongoDB connected : ${conn.connection.host}`);
};

module.exports = connectDB;