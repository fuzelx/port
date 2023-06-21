let quotes = [ "Knowledge without action is wastefullnessa and action without knowledge is foolishness.", "Man is not worried by real problems so much as by his imagined anxieties about real problems"];

function changeQuote(){
    let randomIndex = Math.floor(Math.random()* quotes.length);

    let newQuote = document.getElementById("quotes"); 

    newQuote.innerHTML = quotes[randomIndex];
}