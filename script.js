const countdownElement = document.getElementById("countdown");
const weddingDate = new Date("2025-06-15T16:00:00");

function updateCountdown() {
  const now = new Date();
  const diff = weddingDate - now;
  if (diff <= 0) {
    countdownElement.textContent = "We're married!";
    return;
  }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdownElement.innerHTML = `<span class="countdown-time">${days}d ${hours}h ${minutes}m ${seconds}s</span> <span class="countdown-text">until the big day!</span>`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Mad Libs Generator (7 inputs, 4-line story)
const shareBtn = document.getElementById("shareBtn");
const copyBtn = document.getElementById("copyBtn");

document.getElementById("madLibsForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;

  const story = `
    Jasmine was a ${form.noun1.value} with a passion for ${form.verb1.value}. One day, at ${form.location.value}, 
    she met Ben — a ${form.adjective.value} ${form.noun2.value} chasing a ${form.animal.value}. 
    They locked eyes and yelled "${form.exclamation.value}!" at the same time. 
    The rest, as they say, is chaotic romantic history.
  `;

  document.getElementById("storyResult").textContent = story.trim();

  // Show buttons
  shareBtn.style.display = "inline-block";
  copyBtn.style.display = "inline-block";
});

shareBtn.addEventListener("click", async () => {
  const story = document.getElementById("storyResult").textContent;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "How Jasmine & Ben Met",
        text: story,
        url: window.location.href,
      });
    } catch (err) {
      console.log("Share cancelled or failed.");
    }
  } else {
    alert("Sharing not supported. Try 'Copy to Clipboard' instead!");
  }
});

copyBtn.addEventListener("click", async () => {
  const story = document.getElementById("storyResult").textContent;

  try {
    await navigator.clipboard.writeText(story);
    copyBtn.textContent = "✅ Copied!";
    setTimeout(() => (copyBtn.textContent = "📋 Copy to Clipboard"), 2000);
  } catch (err) {
    alert("Failed to copy.");
  }
});
