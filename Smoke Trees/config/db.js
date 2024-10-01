const mongoose = require('mongoose');


const connectDB = async () => {
    // MongoDB connection
await mongoose.connect('mongodb+srv://alhanhussain75:bcSmy9L8gQGcbMYw@cluster0.0cqx4sa.mongodb.net/UsersDB')
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

}


module.exports = connectDB;