//The url for the API 
const apiBaseURL = 'https://project-1-api.herokuapp.com/';

//got API key and declare it to a variable
const apikey = '?api_key=235fe40a-464c-48d5-8c8c-30f4d0948e00';




const container = document.querySelector('.show');
const shows = [

    {
        date: 'DATE',
        dateday: 'Mon Dec 17 2018',
        venue: 'VENUE',
        place: 'Ronald Lane',
        location: 'LOCATION',
        city: 'San Fancisco, CA'
    },
    {
        date: 'DATE',
        dateday: 'Tue Jul 18 2019',
        venue: 'VENUE',
        place: 'Pier 3 East',
        location: 'LOCATION',
        city: 'San Fancisco, CA'
    },
    {
        date: 'DATE',
        dateday: 'Mon Dec 17 2018',
        venue: 'VENUE',
        place: 'View Loungue',
        location: 'LOCATION',
        city: 'San Fancisco, CA'
    },

    {
        date: 'DATE',
        dateday: 'Sat Aug 12 2019',
        venue: 'VENUE',
        place: 'Hyatt Agency',
        location: 'LOCATION',
        city: 'San Fancisco, CA'
    },
    {
        date: 'DATE',
        dateday: 'Fri Sep 05 2019',
        venue: 'VENUE',
        place: 'Moscow Center',
        location: 'LOCATION',
        city: 'San Fancisco, CA'
    },

    {
        date: 'DATE',
        dateday: 'Wed Aug 11 2019',
        venue: 'VENUE',
        place: 'Moscow Center',
        location: 'LOCATION',
        city: 'San Fancisco, CA'
    },
];

function displayShows(showsObject) {


    let shows = document.createElement('div');
    shows.classList.add('show__child');





    let date = document.createElement('p');
    date.classList.add('show__header1');
    date.innerText = showsObject.date;
    let dateday = document.createElement('p');
    dateday.classList.add('show__header2');
    dateday.classList.add('show__header2__bold');


    dateday.innerText = showsObject.dateday;
    let venue = document.createElement('p');
    venue.classList.add('show__header1');
    venue.innerText = showsObject.venue;
    let place = document.createElement('p');
    place.classList.add('show__header2');
    place.innerText = showsObject.place;
    let location = document.createElement('p');
    location.classList.add('show__header1');
    location.innerText = showsObject.location;
    let city = document.createElement('p');
    city.classList.add('show__header2');
    city.innerText = showsObject.city;
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


    container.appendChild(shows);
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

container.appendChild(bar);


shows.forEach(item => {
    displayShows(item)
});