const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Подключаем body-parser для обработки JSON
app.use(bodyParser.json());

// Раздаем статические файлы из папки public
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Подключаем маршруты
const imageRoutes = require('./src/routes/imageRoutes');
app.use('/api/images', imageRoutes);

// Запускаем сервер
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});