const express = require('express');
const router = express.Router();
const service = require('./service');
const bodyparser=require('body-parser');



/* GET programming languages. */
router.get('/odba', async function(req, res, next) {
  try {
    res.json(await service.readdatafromdb(req.query.page));
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});
router.get('/json', async function(req, res, next) {
    try {
      res.json(await service.Readjson(req.myJSON));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  //jquery
  // router.get('/selectedOption', function(req, res) {
  //   const selectedValue = req.query.selected;
  //   console.log(selectedValue);
  //   res.send('Selected option value: ' + selectedValue);
  // });
  

  
  router.get('/selectOption', function(req, res) {
    const {parcel}=req.body
    console.log(parcel);
  });
  


router.get('/benefitplan', async function(req, res, next) {
  try {
    res.json(await service.benefitplan());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});


module.exports = router;
