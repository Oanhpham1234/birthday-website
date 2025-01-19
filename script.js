// Xử lý nút Play Music
const playMusicButton = document.getElementById("playMusic");

playMusicButton.addEventListener("click", () => {
  // Thay đường dẫn file nhạc phù hợp
  const audio = new Audio(
    "happy-birthday-to-you-bossa-nova-style-arrangement-21399.mp3"
  );
  audio
    .play()
    .then(() => {
      playMusicButton.innerText = "🎵 Playing...";
      playMusicButton.disabled = true;

      // Tạo pháo hoa khi nhạc bắt đầu chơi
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    })
    .catch((error) => {
      console.error("Không thể phát nhạc:", error);
      alert("Không tìm thấy file nhạc. Hãy kiểm tra đường dẫn!");
    });
});
