// script.js

document.addEventListener("DOMContentLoaded", () => {
  const videoCards = document.querySelectorAll(".video-card");
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <span class="close">&times;</span>
    <video class="modal-content" controls autoplay>
      <source src="" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  `;
  document.body.appendChild(modal);

  const videoPlayer = modal.querySelector("video");
  const closeBtn = modal.querySelector(".close");

  videoCards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const videoSrc = card.getAttribute("data-video");
      videoPlayer.querySelector("source").src = videoSrc;
      videoPlayer.load();
      modal.style.display = "block";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    videoPlayer.pause();
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoPlayer.pause();
    }
  });
});
