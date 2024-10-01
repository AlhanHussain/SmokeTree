const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');



const PORT = 5000;
const app = express();



// Middleware
app.use(express.json());



connectDB();

// Routes
app.use('/api/users', userRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
