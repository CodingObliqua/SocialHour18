const expres = require('express');
const connectToDatabase = require('./config/database');
const userRoutes = require('./routes/users');
const thoughtRoutes = require('./routes/thoughts');

const app = express();
const PORT = process.env.PORT || 3000

// Connect to the MongoDB database
connectToDatabase();

// Middleware 
app.use(express.json()); // Parse JSON request
// Add here

// API routes
app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Error handling middleware 
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start the server

app.listen(PORT, () => {
    console.log('Server is running on ${PORT}');
});

