var express = require('express');



const databaseFunctions = require('../database/databaseFunctions');
var router = express.Router();

/* GET home page. */
router.get('/db', async function(req, res, next) {
  
  listt = await databaseFunctions.listEmployees()
  res.send(listt)



});

router.put('/db', async function(req, res, next) {

  await databaseFunctions.insertEmployee(req.body)
  res.send("Inserted to the db")


});

router.delete('/db', async function(req, res, next) {

  await databaseFunctions.deleteEmployee(req.body)

  res.send({operation: "successful"});
});

router.options('/db', async function(req,res,next) {
    res.send('it works')
})



module.exports = router;