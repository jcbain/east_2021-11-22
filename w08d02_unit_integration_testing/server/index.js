const PORT = 8080;
const express = require('express');  
const cors = require('cors');  
const morgan = require('morgan'); 

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

const highScores = [
  {id: 1, name: 'Dana Scully', points: 5},
  {id: 2, name: 'Fox Mulder', points: 2},
  {id: 3, name: 'Terminator', points: 1}
];

// get all of the highScores
app.get('/api/scores', (req, res) => {
  res.json(highScores);
})


app.listen(PORT, () => console.log(`🤘 server listening on port ${PORT}`));