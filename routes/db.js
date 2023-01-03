var express = require('express');



const databaseFunctions = require('../database/databaseFunctions');
var router = express.Router();


router.get('/db', async function(req, res, next) {
  listEmployee = await databaseFunctions.listEmployees()
  res.send(listEmployee)
});


router.put('/db', async function(req, res, next) {
  await databaseFunctions.insertEmployee(req.body)
  res.send("Inserted to the db")


});

router.delete('/db', async function(req, res, next) {
  await databaseFunctions.deleteEmployee(req.body)

  res.send({operation: "successful"});
});


module.exports = router;