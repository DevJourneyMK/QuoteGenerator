const getQuoteBtn = document.querySelector('.btn');
const quotes = document.getElementById('quotes');
const author = document.getElementById('author');
const copyBtn = document.getElementById('copy-btn');
const volume = document.getElementById('vol-btn');
const loader = document.getElementsByClassName('loader')[0];
const container = document.getElementsByClassName('container')[0];



function first(){

    container.hidden = false;
    loader.hidden = true;
}

function second(){
    loader.hidden = false;
    container.hidden = true;
    
}


first();


getQuoteBtn.addEventListener('click', async function(){

    second()
    const response = await fetch('https://dummyjson.com/quotes/random');
    const quote = await response.json();
    quotes.innerText = quote.quote;
    author.innerText = quote.author;
    first()
    
});

copyBtn.addEventListener('click', function(){

    alert("Quote Copied", navigator.clipboard.writeText(quotes.innerText));
});

volume.addEventListener('click', function(){
    const speech = new SpeechSynthesisUtterance(quotes.innerText);
    speechSynthesis.speak(speech); 

});