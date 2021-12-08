const express = require('express');
const morgan = require('morgan');
const cookieParser = require("cookie-parser");

const pageText = require("./data/languages.json")

// console.log("pageText", pageText)

const app = express();
const port = 4545;


const users = {
  123: {
    id: '123',
    email: 'scully@xfiles.com',
    password: 'abcd'
  }
}

const findUserByEmail = (email) => {
  for(const userId in users) {
    const user = users[userId];
    if(user.email === email) {
      return user;
    }
  }
  return null;
}

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public')); // serve up static files in the public directory
app.use(cookieParser()); // bring in cookie-parser

app.set('view engine', 'ejs');

// logging in
// check to see if that user exists in our database
// check passwords
// set a cookie
app.post('/login', (req, res) => {
  console.log('req.body', req.body)
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send("email and password cannot be blank")
  }

  const user = findUserByEmail(email);
  console.log('user', user);
  
  if (!user) {
    return res.status(400).send("a user with that email doesn't exist")
  }

  if (user.password !== password ){
    return res.status(400).send('your password doesnt match');
  }

  // happy path
  res.cookie('user_id', user.id)
  res.redirect("/secrets")


  // res.send('you posted to login')

})

app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).send("email and password cannot be blank")
  }

  const user = findUserByEmail(email);

  if(user) {
    return res.status(400).send('a user with that email already exists');
  }

  const id = Math.floor(Math.random() * 2000) + 1;

  users[id] = {
    id: id, 
    email: email,
    password: password
  };

  console.log('users', users)
  res.redirect('/login');

})

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/login');
})

app.get('/secrets', (req, res) => {

  const userId = req.cookies.user_id;

  if(!userId) {
    return res.status(401).send("you are not authorized to be here")
  }

  const user = users[userId];

  if(!user) {
    return res.status(400).send('you have a stale cookie. please create an account or login')
  }

  console.log('the logged in user is', user)
  const templateVars = {
    email: user.email
  }

  res.render('secrets', templateVars)
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.get('/register', (req, res) => {
  res.render('register');
})

app.get("/home", (req, res) => {
  
  console.log("req.cookies", req.cookies)
  const selectedLanguage = req.cookies.language || "fr";
  const templateVars = {
    head: pageText.homeHeaders[selectedLanguage],
    body: pageText.homeBodies[selectedLanguage]
  };

  res.render("home", templateVars);
});

app.get("/about", (req, res) => {
  const selectedLanguage = req.cookies.language || "eo";
  const templateVars = {
    head: pageText.aboutHeaders[selectedLanguage],
    body: pageText.aboutBodies[selectedLanguage]
  };
  res.render("about", templateVars);
});

app.get("/languages/:language_code", (req, res) => {

  // console.log(req.params);
  const languageCode = req.params.language_code;
  res.cookie('language', languageCode)

  res.redirect("/home")
})




app.listen(port, () => console.log(`🛸 listening on port ${port}`));