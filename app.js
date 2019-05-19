const express = require('express');
const cookieParser = require('cookie-parser')
const routes = require(__dirname + '/Routes/rest');
const dbConnection = require(__dirname + '/Database/connection');
const dbTableCreation = require(__dirname + '/Database/DDL')

const app = express();

app.use(express.static('views'));

app.set('view engine', 'ejs');

app.use(cookieParser());

app.use(routes);

const connection = dbConnection;
connection.connect(err=>{
  if (err) throw err;
  console.log("Database connected!");
});
dbTableCreation(connection)

const server = app.listen(process.env.PORT || 10001, ()=>{
  console.log("Listening at port 10001...")
});
