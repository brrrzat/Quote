const API_URL = "https://dummyjson.com/quotes/random";

const quoteText = document.getElementById("quote-text");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const themeBtn = document.getElementById("theme")
const body = document.body
async function quote(){
  quoteText.textContent = "Loading..."
  author.textContent = "Loading..."

  try {
    const res =await fetch(API_URL)
    const data = await res.json();
    const textAPI = data.quote;
    const authorAPI = data.author;

    quoteText.textContent = textAPI;
    author.textContent = authorAPI;
  } catch (err){
    console.error("Error:", err)
    quoteText.textContent = "Error! Check console log"
    author.textContent = "Error! Check console log"
  }
}

if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light');
  themeBtn.textContent = '☀️';
}
themeBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  const isLight = body.classList.contains('light');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
  themeBtn.textContent = isLight ? '☀️' : '🌑';
});





btn.addEventListener("click", quote)
quote()

