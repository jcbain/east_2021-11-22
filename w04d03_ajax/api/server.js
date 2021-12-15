const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 8080;
const blogs = require('./data/blogs.json');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(morgan('dev'));

const genRandomId = () => {
  return Math.floor(Math.random() * 20000) + 1;
};

app.get('/api/blogs', (req, res) => {
  res.json(blogs);
});


app.post('/api/blogs', (req, res) => {
  const id = genRandomId();
  const title = req.body.title;
  const body = req.body.body;
  const userId = Number(req.body.userid);

  const blog = {
    id,
    title,
    body,
    userId
  };
  blogs.push(blog);

  res.status(201).json(blog);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});