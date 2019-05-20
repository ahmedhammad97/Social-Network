const dbConnection = require(__dirname + '/../Database/connection');
const shortid = require('shortid');
const bcrypt = require('bcrypt')

module.exports = (req, res) => {
  let userId = shortid.generate();
  let imgName = null;

  if (req.files === null || req.files === undefined){
    if (req.body.gender = "male") imgName = 'maledefault.png';
    else imgName = 'femaledefault.png';
  }
  else{imgName = userId + '.' + req.files.img.name.split('.').pop();}

  if (req.body.nickName === '') {req.body.nickName = req.body.firstName + ' ' + req.body.lastName}
  if (req.body.marital === undefined){req.body.marital = null;}

  let hash = bcrypt.hashSync(req.body.password, 8);
  // Insert User data
  let sql = `INSERT INTO User VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  dbConnection.query(sql, [userId, req.body.firstName, req.body.lastName, req.body.nickName, hash, req.body.email, req.body.gender,
  req.body.birthdate, req.body.hometown, req.body.marital, req.body.aboutme, imgName],
  (err, result) => {
     if (err) {throw err; res.send("Error, wrong data"); return;}
     else{
       if (!req.body.phones.trim() === ''){
         // Insert phone numbers
         let phoneNums = req.body.phones.split(' ');
         sql = `INSERT INTO Phone VALUES`;
         let phoneList = [];
         for (let i=0; i<phoneNums.length; i++){
           phoneList.push(userId)
           phoneList.push(phoneNums[i])
           sql += ` (?, ?),`
         }
         sql = sql.slice(0, -1);
         dbConnection.query(sql, phoneList, (err, result) => {
           if (err) {
             throw err;
             sql = `DELETE FROM User WHERE User.Id = ?`
             dbConnection.query(sql, userId, (err, result) => {
               if (err) throw err;
             })
              res.send("Error, wrong data"); return;
           }
           else{
             if(req.files.img !== undefined){
               // Insert image
               req.files.img.mv(__dirname + '/../views/assets/images')
             }
           }
         })
       }
     }
  });
}
