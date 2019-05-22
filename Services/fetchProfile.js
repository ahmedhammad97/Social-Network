const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res) => {
  let sql = `SELECT * FROM User WHERE User.Id = ?`
  dbConnection.query(sql, req.query.id, sendData)

  function sendData(err, result){
    handleErrors(err, result);
    getUserType().then(type => {
      res.render('profile', {"data": result[0], "userType": type, "loggedin": req.loggedin});
    })
  }

  function handleErrors(err, result){
    if (err) {console.log(err); res.render('error');}
    if(result.length === 0) res.render('error');
  }

  async function getUserType(){
    let bla = await isFriend();
    if (req.cookies.id === req.query.id) return "Owner";
    else if(bla) return "Friend";
    else return "Stranger";
  }

  function isFriend(){
    return new Promise(resolve => {
      sql = `SELECT 1 FROM Friendship WHERE Id1 = ? AND Id2 = ?;`;
      dbConnection.query(sql, [req.cookies.id, req.query.id], (err2, result2) => {
        if (err2) console.log(err2);
        else if(result2.length === 0) resolve(false);
        else resolve(true);
      });
    })
  }

}
