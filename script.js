document.getElementById('downloadForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = document.getElementById('urlInput').value;
  const preview = document.getElementById('preview');
  const downloadLink = document.getElementById('downloadLink');

  preview.innerHTML = '<p>Loading...</p>';
  downloadLink.innerHTML = '';

  try {
    const response = await fetch('https://your-backend-url.com/download', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });
    const data = await response.json();

    if (data.success) {
      preview.innerHTML = `<video controls src="${data.videoUrl}" class="preview-video"></video>`;
      downloadLink.innerHTML = `<a href="${data.videoUrl}" download>Download Video</a>`;
    } else {
      preview.innerHTML = `<p class="error">${data.error}</p>`;
    }
  } catch (error) {
    preview.innerHTML = `<p class="error">Failed to fetch video. Please try again.</p>`;
  }
});
