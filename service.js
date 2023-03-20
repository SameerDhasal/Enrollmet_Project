const db = require('./db');
const oracledb = require('oracledb');
const config = require('./config');
const fs = require('fs');
let getUrlParameter = require('get-url-parameter');


async function readdatafromdb(page = 10)
{
  connection = await oracledb.getConnection({
    user: 'citi_abagchi',
    password: 'U4ggPVAg9PNuJ',
    connectString: '100.112.45.151:1521/CITPDWTT'
  });
  const Account = await connection.execute(`SELECT account_name FROM PAYOR_DW.ALL_ACCOUNT_HISTORY_FACT`);
  
  var arr = new Array();
   for (let row of Account.rows) {
      let id = row[0];
      arr.push(id);
    }
    const oraclejson = JSON.stringify(Object.assign({}, arr))
    const obj = JSON.parse(oraclejson);
  return {
    obj
   }
}

async function Readjson()
{
    const data = fs.readFileSync('./MemberData.json',{encoding:'utf8', flag:'r'});
   // const memberjson = JSON.stringify(data);

    return {
      data
  }
}

async function Accountdropdown(accountnumber)
{
  acc=accountnumber

    return {
      dropdowndata
  }
}
async function benefitplan()
{
  connection = await oracledb.getConnection({
    user: 'citi_abagchi',
    password: 'U4ggPVAg9PNuJ',
    connectString: '100.112.45.151:1521/CITPDWTT'
  });
  const Account = await connection.execute('SELECT BENEFIT_PLAN_DESC FROM payor_dw.benefit_plan bf JOIN payor_dw.account_plan_select_fact ap ON bf.benefit_plan_key=ap.benefit_plan_key WHERE ap.account_key=2004');
  
  var arr = new Array();
   for (let row of Account.rows) {
      let id = row[0];
      arr.push(id);
    }
    const oraclejson = JSON.stringify(Object.assign({}, arr))
    const obj = JSON.parse(oraclejson);
  return {
    obj
   }

}

async function SoapUIConnection()
{
    const data = fs.readFileSync('./MemberData.json',{encoding:'utf8', flag:'r'});
   // const memberjson = JSON.stringify(data);

    return {
      data
  }
}

module.exports = {
  readdatafromdb,
  Readjson,
  benefitplan,
  Accountdropdown
  
}