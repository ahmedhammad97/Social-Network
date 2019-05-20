const dbConnection = require(__dirname + '/../Database/connection');
const bcrypt = require('bcrypt');

module.exports = (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, 8);
  let sql = `SELECT Id, Email, Password FROM User WHERE Email = ?;`;
  dbConnection.query(sql, req.body.email, (err, result) => {
    if (err) {res.render('error');}
    if(result.length > 0){
      bcrypt.compare(req.body.password, result[0].Password, (err2, result2) => {
        if (result2) {res.render('successReg', {"id": result[0].Id, "loggedin": true})}
        else res.render('error');
      })
    }
    else{
      res.render('error');
    }
  })
}
