const expressJS = require('express');
const myApp = expressJS();

myApp.get('/' , (req, res) => res.send('Thank you for calling my world of node.js bagera bagera'));

myApp.listen(5426 , console.log('calling from 8080'));