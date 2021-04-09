const express = require ('express');
const cors = require('cors');
const mongoose = require('mongoose');

const UserRouter = require('./routes/user');


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI; //connection string to our env
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true, useUnifiedTropology: true});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('mongodb connection established.');
})

app.use('/user', UserRouter);

app.listen(port, () => {
  console.log('server is running at port: ' + port);
});
