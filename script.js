function downloadVideo() {
  const url = document.getElementById('videoUrl').value.trim();
  const resultDiv = document.getElementById('result');

  if (!url) {
    resultDiv.innerHTML = '<p style="color:red;">Masukkan URL terlebih dahulu!</p>';
    return;
  }

  resultDiv.innerHTML = '<p>Memproses...</p>';

  let downloadLink = '';

  if (url.includes('tiktok.com')) {
    downloadLink = `https://ssstik.io/en?url=${encodeURIComponent(url)}`;
  } else if (url.includes('instagram.com/reel')) {
    downloadLink = `https://inflact.com/downloader/instagram/reels/?url=${encodeURIComponent(url)}`;
  } else if (url.includes('facebook.com')) {
    downloadLink = `https://fbdown.net/download.php?url=${encodeURIComponent(url)}`;
  } else if (url.includes('youtube.com/shorts') || url.includes('youtube.com/watch')) {
    downloadLink = `https://y2mate.com/youtube/${encodeURIComponent(url)}`;
  } else {
    resultDiv.innerHTML = '<p style="color:red;">Platform tidak didukung</p>';
    return;
  }

  resultDiv.innerHTML = `<a href="${downloadLink}" target="_blank">Klik di sini untuk mengunduh video</a>`;
}
