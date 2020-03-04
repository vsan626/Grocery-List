let db = require('./dataBase.js');

module.exports = {
  grocery: {
    get: function(req, res) {
      db.query("SELECT item, quantity FROM groceries;", function (err, result) {
        if (err){
          res.status(400).send(err)
        } else {
          console.log(result)
          res.status(200).send(result)
        }
      });
    }
  }
}
