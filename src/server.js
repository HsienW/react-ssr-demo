import express from 'express';
import renderer from './renderer/renderer';

const app = express();

// Server 啟動時的 port, 指定為 3003
const port = process.env.PORT || 3003;

// express 用來載入靜態檔案的位置, 因為我們會在第一次回傳的資料上把前端打包好的程式 bundle.js 給寫在 script 裡面, 所以指定 dist
app.use(express.static('dist'));

// app.get 會依照指定的 URL （第一個參數）下去執行第二個參數中的 function, * 號是匹配全部 URL
app.get('*', (request, respond) => {
    const content = renderer(request);
    respond.send(content);
});

// server 起來之後監聽對應的 port
app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

