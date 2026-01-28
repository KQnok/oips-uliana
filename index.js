const express = require('express');
const path = require('path');
const app = express();

// Берем порт из настроек хостинга или ставим 3000
const PORT = process.env.PORT || 3000;

// Говорим серверу, что статические файлы (картинки, css, html) лежат в этой же папке
app.use(express.static(__dirname));

// При заходе на главную страницу отдаем index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Запускаем сервер
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});