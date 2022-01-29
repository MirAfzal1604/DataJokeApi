const Quote = document.querySelector(".quote");
const Auther = document.querySelector("#auther");

function getQuote() {
    fetch("http://quotes.stormconsultancy.co.uk/random.json")
        .then((res) => {
            return res.json();
        })
        .then((date) => {
            Quote.textContent = date.quote;
            Auther.textContent = `-${date.author}`;
        });
}

getQuote();