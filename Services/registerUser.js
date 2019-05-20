const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res) => {

  console.log(req.body);
  console.log(req.files);
}
