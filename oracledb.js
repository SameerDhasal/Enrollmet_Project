//Oracle Database
const oracledb = require('oracledb');
const express = require("express");
const router = express.Router();
let jsondata='';
async function getdata() {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: 'citi_abagchi',
      password: 'U4ggPVAg9PNuJ',
      connectString: '100.112.45.151:1521/CITPDWTT'
    });
    //const dropdown = document.getElementById('your_dropdown');

    const Account = await connection.execute(`SELECT ACCOUNT_HISTORY_FACT_KEY FROM PAYOR_DW.ALL_ACCOUNT_HISTORY_FACT`);
    const Benifit_plan = await connection.execute(`SELECT * FROM PAYOR_DW.ACCOUNT_PLAN_SELECT_FACT`);
   await connection.close();
   //console.log(Account.rows)
   for (let row of Account.rows) {
      let id = row[0];
    }
    return Account.rows;
    
  } catch (err) {
    console.error(err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}
router.get('/', async function(req, res, next) {
    try {
      res.json(await getdata());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });
  module.exports = router;
  