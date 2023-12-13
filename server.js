
//Expressサーバ作成
const express = require('express')
const app = express()


app.use(express.urlencoded({ extended: true }));
//publicフォルダをweb公開する
app.use(express.static(__dirname + '/public'));

//httpサーバ作成
const { createServer } = require('node:http');
const server = createServer(app);

//環境変数読み込み
const dotenv = require('dotenv');
dotenv.config();
const host = process.env.HOST
const port = process.env.PORT

//httpサーバ待機
server.listen(port, host, () => {
    console.log(`listening on http://${host}:${port}`);
})