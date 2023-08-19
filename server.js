const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/routes');
const cors = require('cors');

app.use(cors(
  {
    origin: "http://localhost:4200"
  }
));
const PORT= process.env.PORT || 8086;

const mongoURI = 'mongodb://127.0.0.1:27017/lsc';

async function connectToDatabase() {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

// Call the function to connect to the database
connectToDatabase();


app.use(express.json());
app.use(routes);
 
app.listen(PORT,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});