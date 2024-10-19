const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/authRoutes'); 
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes); 

app.listen(3003, () => {
    console.log('Server initialized on http://localhost:3003');
});
