const express = require('express');
const app = express();
const authRoute = require("./routes/authenticationEndpoints");
const postRoute = require("./routes/posts");
const userRoute = require('./routes/users');
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/RESTful-API', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("[MONGOBD]: Successfully connected to the database."))

app.use(express.json());
app.use(express.json({ urlencoded: false }))

//Middlewares
app.use('', userRoute)
app.use('', authRoute);
app.use('', postRoute);

//Routes
app.get('/', (req, res) => {
   res.send("Homepage.");
});

app.listen(3000, () => console.log(`[EXPRESS]: Server is running!`));