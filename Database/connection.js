const mysqls = require('mysql');

const con = mysqls.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "FriendsNet",
  multipleStatements: true
});

module.exports = con;
