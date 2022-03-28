const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./server/routes');
const cors = require('cors');
const port = process.env.PORT || 8000;
var path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.send('welcome to node project');
});
app.use('/', routes);
app.use(express.static('./images'));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public/index.html'));
});

const server = app.listen(port, 'localhost', function () {
	console.log(`Blog App listening at http://localhost:${8000}`);
});
