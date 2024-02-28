'use trict';


const countriesContainer = document.querySelector('.countries');


const renderCountry = function(data, className = ''){
    const html = `
        <article class="country ${className}">
        <img class="country__img" src= "${data.flags.png}">
        <div class="country__data">
        <h3 class="country__name"> ${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(data.population / 1000000).toFixed(1)} million</p>         
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
   countriesContainer.insertAdjacentHTML('beforeend',html);
   countriesContainer.style.opacity = 1;
}

const getCountryAndhNeighbour = function(country){
    // AJAX call country
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    //console.log(request.responseText);
    request.addEventListener('load', function() {
    //console.log(this.responseText);
    const [data] = JSON.parse(this.responseText);
    console.log(data);
    renderCountry(data);

    // Get neighbour country
    const [neighbour] = data.borders;
    if(!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function(){
        const data2 = JSON.parse(this.responseText);
        renderCountry(data2, 'neighbour');
    })
})
}

getCountryAndhNeighbour('vietnam');

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 seconds passed');
        setTimeout(() => {
            console.log('3 seconds passed');
            setTimeout(() => {
                console.log('4 seconds passed');
            },1000)
        },1000)
    },1000)
},1000)

