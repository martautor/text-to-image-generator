const imageService = require('../services/imageService');

/**
 * Генерация изображения на основе переданного текста
 * 
 * @param {Request} req - Запрос
 * @param {Response} res - Ответ
 */
exports.generateImage = async (req, res) => {
  const { text } = req.body;

  try {
    const imageBuffer = await imageService.generateImageFromText(text);
    res.writeHead(200, {
      'Content-Type': 'image/png',
      'Content-Length': imageBuffer.length,
    });
    res.end(imageBuffer);
  } catch (error) {
    res.status(500).send('Ошибка при создании изображения');
  }
};