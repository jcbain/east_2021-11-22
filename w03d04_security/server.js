const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

const app = express();
const port = 8080;

const users = {
  'abcd': {
    id: 'abcd',
    email: 'scully@xfiles.com',
    password: 'logicOverFeeling',
    superSecret: "maybe Mulder is right"
  },
  'efgh': {
    id: 'efgh',
    email: 'mulder@xfiles.com',
    password: 'password',
    superSecret: "I don't actually believe"
  }
}

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cookieParser());
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}));

app.set('view engine', 'ejs');


// helper functions
// check to see if email belongs to 
// a user in the users database
const findUserByEmail = (email) => {
  for (const userId in users) {
    const user = users[userId];
    if (user.email === email) {
      return user;
    }
  }
  return null;
}


// GET / 
// render login page
app.get('/', (req, res) => {
  res.render('login');
})

// GET /registration
// render registration page
app.get('/register', (req, res) => {
  res.render('register')
})

// GET /protected 
// render protected page
app.get('/protected', (req, res) => {
  // use the cookie coming from the request
  // const userId = req.cookies.userId;
  const userId = req.session.userId

  if (!userId) {
    return res.status(401).send('you are not authorized to be here')
  }

  const user = users[userId];

  if (!user) {
    return res.status(400).send('you have a stale cookie.')
  }
  
  const templateVars = { user }
  res.render('protected', templateVars)
})

// POST /login 
// perform action of logging in
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if(!email || !password){
    return res.status(400).send('email and password cannot be blank');
  }

  const user = findUserByEmail(email);

  if (!user) {
    return res.status(400).send('no user with that email found')
  }

  // found the user, now does their password match?

  bcrypt.compare(password, user.password, (err, success) => {
    if(!success){
      return res.status(400).send('password does not match')
    }

    // set a cookie
    // res.cookie('userId', user.id);
    req.session.userId = user.id;
    res.redirect('/protected')

  })

  // if (user.password !== password) {
  //   return res.status(400).send('password does not match')
  // }

  // res.cookie('userId', user.id);
  // res.redirect('/protected')
})

// POST /register
// perform register action
app.post('/register', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const superSecret = req.body.superSecret

  if (!email || !password) {
    return res.status(400).send('email and password cannot be blank');
  }

  const user = findUserByEmail(email);

  if (user) {
    return res.status(400).send('the email address is alread in use')
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {

      const id = Math.floor(Math.random() * 1000) + 1;
    
      users[id] = {
        id: id, 
        email: email,
        password: hash,
        superSecret: superSecret
      }

      console.log('users:', users);

      res.redirect('/')
    })
  })


})

// POST /logout
// perform logging out action
app.post('/logout', (req, res) => {
  // destroy cookie
  // res.clearCookie('userId');
  req.session = null;
  res.redirect('/')
})


app.listen(port, () => {
  console.log(`server listening on port ${port}`)
})