const bcrypt = require('bcryptjs');

const plainText = 'password';

bcrypt.genSalt(10, (err, salt) => {
  console.log('salt:', salt);
  bcrypt.hash(plainText, salt, (err, hash) => {
    console.log('hashed password: ', hash)

  })
});

const salt = bcrypt.genSaltSync(10);
console.log('sync salt: ', salt);
const hash = bcrypt.hashSync(plainText, salt);
console.log('hash sync: ', hash);

bcrypt.compare('password', hash, (err, success) => {
  console.log('are these the same:', success)
})

const success = bcrypt.compareSync('PASSWORD', hash);
console.log('synchronous success:', success)






