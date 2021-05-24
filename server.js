const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

const PORT = 3001; 

const app = express();

app.use(logger('dev'));

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.use(express.static("public")); 

//connect to MONGO DB library 

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.use(require("./controllers/api"))
app.use(require("./controllers/homeRoutes"))

app.listen(PORT, () => {
    console.log('App running on PORT ${PORT}');
})