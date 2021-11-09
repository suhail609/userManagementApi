
const { isEmail, cryptPassword, comparePassword  } = require('../utils/utils');
var bcrypt = require('bcrypt');

module.exports = (req, res) => {

    try {


        const { email, password } = req.body;
        
        if (!isEmail(email)) {
          throw new Error('Email must be a valid email address.');
        }
        if (typeof password !== 'string') {
          throw new Error('Password must be a string.');
        }


        cryptPassword(password, (err, hash) => {
        
          //saving hashed password to database
          res.status(200).send({message: 'success', token : token});
        
        })
        

      } catch (err) {
        res.status(400).json({
          errors: [
            {
              title: 'Registration Error',
              detail: 'Something went wrong during registration process.',
              errorMessage: err.message,
            },
          ],
        });
      }
    
}