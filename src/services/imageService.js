const { createCanvas, loadImage } = require('canvas');

/**
 * Генерирует изображение на основе переданного текста
 * 
 * @param {string} text - Текст для генерации изображения
 * @returns {Promise<Buffer>} - Буфер с данными изображения
 */
exports.generateImageFromText = async (text) => {
  const width = 800;
  const height = 200;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Заливка фона белым цветом
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, width, height);

  // Настройка шрифта
  ctx.font = '48px sans-serif';
  ctx.fillStyle = 'black';
  ctx.fillText(text, 50, 100);

  // Возвращаем буфер с данными изображения
  return canvas.toBuffer();
};