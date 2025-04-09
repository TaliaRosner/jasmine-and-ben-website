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
document.getElementById("madLibsForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const form = e.target;
  const noun1 = form.noun1.value;
  const verb1 = form.verb1.value;
  const location = form.location.value;
  const adjective = form.adjective.value;
  const noun2 = form.noun2.value;
  const animal = form.animal.value;
  const exclamation = form.exclamation.value;

  const story = `
    Jasmine was a mysterious ${noun1} with a passion for ${verb1}.
    One day, at ${location}, she met Ben — a ${adjective} ${noun2} chasing a runaway ${animal}.
    They locked eyes and yelled "${exclamation}!" at the same time.
    The rest, as they say, is chaotic romantic history.
  `;

  document.getElementById("storyResult").textContent = story.trim();
});
