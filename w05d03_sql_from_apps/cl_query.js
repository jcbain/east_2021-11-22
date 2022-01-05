const pg = require('pg');
const Client = pg.Client;

const config = {
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
};
const client = new Client(config);

client.connect(() => {
  console.log("connected to the db");
});

const verb = process.argv[2];
const id = process.argv[3];

switch (verb){
  case 'browse':
    client.query("SELECT * FROM primates;")
      .then((results) => {
        console.log(results.rows);
        client.end();
      })
    break;
  
  case 'read':
    client.query(`SELECT * FROM primates WHERE id = $1;`, [id])
      .then((results) => {
        console.log(results.rows[0]);
        client.end();
      });
    break;

  case 'edit':
    const newName = process.argv[4];

    client.query('UPDATE primates SET name = $1 WHERE id = $2;', [newName, id])
      .then(() => {
        console.log('primate has been updated');
        client.end();
      })
    break;
  
  case 'add':
    const species = process.argv[3];
    const name = process.argv[4];
    
    client.query('INSERT INTO primates(species, name) VALUES($1, $2);', [species, name])
      .then(() => {
        console.log('primate has been added');
        client.end();
      })
    break;

  case 'delete':
    client.query('DELETE from primates WHERE id = $1;', [id])
      .then(() => {
        console.log('primate removed from table');
        client.end();
      })
    break;
  

  default: 
      console.log('enter a valid verb');
      client.end();
};


