const quotes = [
  "Believe in yourself!",
  "Success is no accident.",
  "Dream it. Wish it. Do it.",
  "Hard work beats talent.",
  "Never give up."
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
