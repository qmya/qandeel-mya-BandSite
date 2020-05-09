//The url for the API 
const apiBaseURL = 'https://project-1-api.herokuapp.com/';

//got API key and Store the key in a global variable in your website.
const apiKey = '?api_key=235fe40a-464c-48d5-8c8c-30f4d0948e00';

//GETTING ALL ELEMENTS WITH SPECIFIED CLASS NAME
const container = document.querySelector('.show');
const table = document.createElement('div');
table.classList.add('show__table');
container.appendChild(table);

//CREATING INNER ELEMENTS AND CLASSES FOR THE OBJECT ARRAY
function displayShows(showsObject) {
    let shows = document.createElement('div');
    shows.classList.add('show__child');

    let date = document.createElement('p');
    date.classList.add('show__header1');
    date.innerText = "DATE";
    let dateday = document.createElement('p');
    dateday.classList.add('show__header2');
    dateday.classList.add('show__header2__bold');

    dateday.innerText = showsObject.date;
    let venue = document.createElement('p');
    venue.classList.add('show__header1');
    venue.innerText = "VENUE";
    let place = document.createElement('p');
    place.classList.add('show__header2');
    place.innerText = showsObject.place;
    let location = document.createElement('p');
    location.classList.add('show__header1');
    location.innerText = "LOCATION";
    let city = document.createElement('p');
    city.classList.add('show__header2');
    city.innerText = showsObject.location;
    let button = document.createElement('button');
    button.classList.add('show__button');
    button.innerText = "BUY TICKETS";

    shows.appendChild(date);
    shows.appendChild(dateday);
    shows.appendChild(venue);
    shows.appendChild(place);
    shows.appendChild(location);
    shows.appendChild(city);
    shows.appendChild(button);

    table.appendChild(shows);
}

const bar = document.createElement('div');
bar.classList.add('show__bar');

const date = document.createElement('h4');
const venue = document.createElement('h4');
const loc = document.createElement('h4');
const but = document.createElement('button');

date.classList.add('show__headerbig');
date.innerText = 'DATE'
venue.classList.add('show__headerbig');
venue.innerText = 'VENUE'
loc.classList.add('show__headerbig');
loc.innerText = 'Location'

but.classList.add('show__but');
but.innerText = 'Button'

bar.appendChild(date);
bar.appendChild(venue);
bar.appendChild(loc);
bar.appendChild(but);

table.appendChild(bar);

//GETTING DATA FROM APIs
//display the shows data retrieved from the API.
getShows = () => {

    axios.get(apiBaseURL + 'showDates' + apiKey)
        .then(results => {
            console.log(results.data);
            results.data.forEach(shows => {
                displayShows(shows);

            });

        });
}

//INVOKING GETCOMMENT()
getShows();