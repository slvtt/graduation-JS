const express = require('express');
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 8080;

// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();

app.use('/',express.static(path.join(__dirname,'build')))

app.get('*', (req,res) => {
    fs.createReadStream(path.resolve(__dirname,'build','index.html'))
        .pipe(res)
})

app.listen(port);