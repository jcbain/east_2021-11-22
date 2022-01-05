const client = require('./connection');

const getAllPrimates = (callback) => {
  client.query("SELECT * FROM primates;")
    .then((results) => {
      callback(results.rows);
    })

};

const getPrimateById = (id) => {
  return client.query(`SELECT * FROM primates WHERE id = $1;`, [id])
    .then((results) => {
      return results.rows[0];
    });
};

module.exports = {
  getAllPrimates,
  getPrimateById
}