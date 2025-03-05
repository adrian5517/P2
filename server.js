require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRoute'); // Ensure this path is correct
const errorMiddleware = require('./middleware/errorMiddleware');

const port = process.env.PORT || 3001;
const DB_URI = process.env.DB_URI;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(errorMiddleware);

app.get('/', (req , res) =>{
    res.send('Welcome to the User API');
})

app.use('/api/users', userRouter);

mongoose.connect(DB_URI)
.then(() => {
    app.listen(port, () =>{
        console.log(`NODE server is running on port ${port}`);
    });
    console.log('Mongo Database connected');
})
.catch((error) => {
    console.log('Error connecting to database', error);
});

