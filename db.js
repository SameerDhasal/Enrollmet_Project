const oracledb = require('oracledb');
const config = require('./config');

async function query(sql, params) {

  const connection = await oracledb.getConnection(config.db);
  const [results, ] = await connection.execute(sql, params);

  return results;
}

module.exports = {
  query
}