var router = require('express').Router();
const orvibo = require('./orivibo.routes');

router.get('/', function(req, res) {
  res.status(200).send('Welcome to our restful API');
});

router.get('/user', function(req, res) {
  var data = [
    {
      firstName: 'Yeya',
      lastName: 'Busquets',
      username: 'yeeeeyaaaaa',
      email: 'yeeeeyaaaa@gmail.com',
      id: 12
    },
    {
      firstName: 'Nika',
      lastName: 'Busquets',
      username: 'nika',
      email: 'nika@gmail.com',
      id: 13
    }
  ];
  res.status(200).send(data);
});

router.use('/wiwo', orvibo);

module.exports = router;
