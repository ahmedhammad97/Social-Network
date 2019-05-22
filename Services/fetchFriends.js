const dbConnection = require(__dirname + "/../Database/connection");

module.exports = (req, res) => {
  let sql = `SELECT DISTINCT User.Id, User.NickName, User.Picture FROM User
            INNER JOIN Friendship ON User.Id = Friendship.Id1
            WHERE Friendship.Id2 = ?`;
  dbConnection.query(sql, [req.cookies.id], (err, result) => {
    if (err) throw err;
    else {
      res.render('friendlist', {"data": result, "loggedin": req.loggedin})
    }
  });
};
