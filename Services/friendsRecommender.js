const dbConnection = require(__dirname + '/../Database/connection');

module.exports = (req, res) => {
  let sql = `SELECT User.Id, User.NickName, User.Picture FROM User LEFT JOIN Friendship ON User.Id = Friendship.Id1
             WHERE User.Id <> ? OR Friendship.Id2 <> ? LIMIT 5;`;
  dbConnection.query(sql, [req.cookies.id, req.cookies.id], (err, result) => {
    if(err) throw err;
    else{
      res.send(result)
    }
  })
}
