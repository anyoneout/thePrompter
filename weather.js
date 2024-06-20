function weatherCheck() {
    let zipCode;
    let pastDate;
    zipCode = prompt("What is your zip code?");
    pastDate = prompt("What day did you want to check for?");
    weatherHeader.innerHTML = `The weather report for ${zipCode}`;
    weatherParagraph.innerHTML = `The weather on ${pastDate} was hot!`;
}
weatherButton.onclick = weatherCheck;