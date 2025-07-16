const quotes = [
  "The best way to get started is to quit talking and begin doing.",
  "Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Don’t watch the clock; do what it does. Keep going.",
];

function showQuote() {
  const quoteEl = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
}
