document.getElementById('textForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const text = document.getElementById('textInput').value;
    const response = await fetch('/api/images/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text }),
    });
  
    if (response.ok) {
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
  
      const imageContainer = document.getElementById('imageContainer');
      imageContainer.innerHTML = `<img src="${url}" alt="Generated Image">`;
    } else {
      alert('Ошибка при создании изображения');
    }
  });