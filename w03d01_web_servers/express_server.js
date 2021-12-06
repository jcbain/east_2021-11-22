const express = require("express");
const morgan = require("morgan");

const app = express();

const dogs = {
  abcd: {
    name: 'Pippa',
    color: 'pink'
  },
  efgh: {
    name: 'Prairie',
    color: 'tri-colored'
  }
}

// middleware

app.use(morgan('dev'))
// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url}`);
//   next()

// })

app.get("/", (req, res) => {
  res.write('welcome to home page');
  res.send();
});

app.get('/dogs', (req, res) => {
  // res.send() // write some text as as a response
  // res.sendFile // send some file along
  // res.render() // ships some template along
  const dogId = req.params.dog_id;
  const singleDog = dogs[dogId]
  res.json(singleDog)
})

// app.get('/dogs/abcd', (req, res) => {
//   const singleDog = dogs.abcd;
//   res.json(singleDog)

// })

// app.get('/dogs/efgh', (req, res) => {
//   const singleDog = dogs.efgh;
//   res.json(singleDog)

// })

app.listen(6789);