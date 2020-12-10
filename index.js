/**
 * 定数・グローバル変数の設定
 * コマンド起動時にnpm run build ≒ "scripts": { "build": "ng build --prod",},
 */
const express = require('express');
const path = require('path');
const app = express();

var bodyParser = require('body-parser');
 
global.__basedir = __dirname;

/**
 * バックエンド部分の設定
 */
const db = require('./server/app/config/db.config.js');

// 起動時に同名のテーブルがあっても削除しない⇒sync({force: false})
db.sequelize.sync({force: false}).then(() => {
  console.log('Drop and Resync with { force: false }');
}); 
let router = require('./server/app/routers/router.js');

const cors = require('cors')
const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(express.static('resources'));

// routerへつなぐ
app.use('/api/customers', router);
// app.use('/', router);

/**
 * フロントエンド部分の設定
 */
// Serve static files....
app.use(express.static(__dirname + '/dist/angular-httpclient'));

// Send all requests to index.html
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/angular-httpclient/index.html'));
});


/**
 * サーバーの立ち上げ
 */
//Create a Server
app.listen(process.env.PORT || 4200, function() {
  console.log("The Port is 4200.")
});