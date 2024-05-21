const express = require('express');
const router = express.Router();
const multer = require('multer');
const imageController = require('../controllers/imageController');

// Создаем экземпляр multer для обработки форм
const upload = multer();

// Маршрут для генерации изображения
// Нас интересует только текст который будет передан через форму, так что используем middleware upload.none()
router.post('/generate', upload.none(), imageController.generateImage);

module.exports = router;