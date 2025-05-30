// Fade-in saat scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".experience-card, .project-card, .hero-text, .hero-image, .about-section, .about-description").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Efek ketik otomatis (typewriter effect)
const typeTarget = document.querySelector(".hero-text h1");
if (typeTarget) {
  const fullText = typeTarget.textContent;
  typeTarget.textContent = "";
  let idx = 0;
  const typingInterval = setInterval(() => {
    if (idx < fullText.length) {
      typeTarget.textContent += fullText.charAt(idx);
      idx++;
    } else {
      clearInterval(typingInterval);
    }
  }, 75);
}

// Floating bubble animation
function createBubble() {
  const bubble = document.createElement("div");
  bubble.classList.add("bubble");

  // Ukuran acak
  const size = Math.random() * 30 + 10 + "px";
  bubble.style.width = size;
  bubble.style.height = size;

  // Posisi acak di layar
  bubble.style.left = Math.random() * window.innerWidth + "px";

  // Durasi tetap 2 detik
  bubble.style.animationDuration = "2s";

  document.body.appendChild(bubble);

  // Hapus bubble setelah 2 detik
  setTimeout(() => {
    bubble.remove();
  }, 2000);
}

let count = 0;
const maxBubbles = 10;
const bubbleInterval = setInterval(() => {
  if (count >= maxBubbles) {
    clearInterval(bubbleInterval); // Stop setelah 10 gelembung
  } else {
    createBubble();
    count++;
  }
}, 300); // tiap 300ms

