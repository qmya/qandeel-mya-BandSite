//The url for the API 
const apiBaseURL = 'https://project-1-api.herokuapp.com/';

//got API key and Store the key in a global variable in your website.
const apiKey = '?api_key=235fe40a-464c-48d5-8c8c-30f4d0948e00';




/*
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
];    */
const container = document.querySelector('.show');
const table = document.createElement('div');
table.classList.add('show__table');
container.appendChild(table);

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


/*shows.forEach(item => {
    displayShows(item)
});*/


getShows = () => {

    axios.get(apiBaseURL + 'showDates' + apiKey)
        .then(results => {
            console.log(results.data);


            results.data.forEach(shows => {
                displayShows(shows);

            });

        });
}
getShows();