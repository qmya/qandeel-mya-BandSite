const container = document.querySelector('.show');
const shows = [
    /*{
              date: 'Date',
              venue: 'VENUE',
              location: 'LOCATION'
        },*/
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


    //showItemButton.innerText = "BUY TICKET";
    //return showItemEl;
    //Append paragraph elements to our div

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







/*
const createDataElement = showData => {
    const showItemEl = document.createElement('div');
    const showItemDate = document.createElement('h1');
    const showItemVenue = document.createElement('h1');
    const showItemLocation = document.createElement('h1');

    const showItemDateday = document.createElement('h1');
    const showItemPlace = document.createElement('h1');
    const showItemCity = document.createElement('h1');

    todoItemDate.innerText = showData.date;
    todoItemDate.classList.add('showitem__header');
    todoItemEl.appendChild(showItemDate);

    showItemVenue.innerText = showData.venue;
    showItemVenue.classList.add('showitem__header');
    todoItemEl.appendChild(showItemVenue);

    showItemLocation.innerText = showData.location;
    showItemLocation.classList.add('showitems__header');
    showItemEl.appendChild(showItemLocation);


    showItemDateday.innerText = showData.dateday;
    showItemDateday.classList.add('showitems__header1');
    showItemEl.appendChild(showItemDateday);

    showItemPlace.innerText = showData.place;
    showItemPlace.classList.add('showitems__header1');
    showItemEl.appendChild(showItemplace);

    showItemCity.innerText = showData.city;
    showItemCity.classList.add('showitems__header1');
    showItemEl.appendChild(showItemCity);








    showItemEl.classList.add('showitem__item');

    return showItemEl;
}



showListData.forEach(showData => {
    const showItemEl = createShowElement(showData);
    showList.appendChild(showItemEl);
});
*/

/*
const todoForm = document.querySelector('.todo-form');

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const newItemValue = event.target.todoInput.value;
  
  const newTodoData = {
    when: 'Today',
    task: newItemValue,
    who: 'Me'
  };
  
  const todoItemEl = createTodoElement(newTodoData);
  todoList.appendChild(todoItemEl);
});
*/









/*
function displayObject(showList) {
    let showList = document.createElement('div');

    showList.classList.add('show__child');

    let showItemDate = document.createElement('h2');
    showItemDate.classList.add('show__child__header1')
    showItemDate.innerText = showList.date;

    let showItemDateday = document.createElement('h2');
    showItemDateday.classList.add('show__child__header1')
    showItemDateday.innerText = showList.dateday;

    showItem.append(showItemDate);
    showItem.append(showItemDateday);

    container.appendChild(showlist)
}
showList.forEach(show => {
    displayObject(showList)
});



*/



/*
createShowElement = showList => {
    const showItemEl = document.createElement('div');
    const showItemDate = document.createElement('h2');
    const showItemDateday = document.createElement('h2');
    const showItemVenue = document.createElement('h2');
    const showItemPlace = document.createElement('h2');
    const showItemLocation = document.createElement('h2');
    const showItemCity = document.createElement('h2');
    const showItemButton = document.createElement('button');

    showItemDate.innerText = showData.date;
    showItemDate.classList.add('showitem__header1');
    showItemEl.appendChild(showItemDate);

    showItemDateday.innerText = showData.dateday;
    showItemDateday.classList.add('showitem__header2');
    showItemEl.appendChild(showItemDateday);

    showItemVenue.innerText = showData.venue;
    showItemVenue.classList.add('showitem__header1');
    showItemEl.appendChild(showItemVenue);

    showItemPlace.innerText = showData.place;
    showItemPlace.classList.add('showitem__header2');
    showItemEl.appendChild(showItemPlace);

    showItemLocation.innerText = showData.location;
    showItemLocation.classList.add('showitem__header1');
    showItemEl.appendChild(showItemLocation);

    showItemCity.innerText = showData.city;
    showItemCity.classList.add('showitem__header2');
    showItemEl.appendChild(showItemCity);


    showItemButton.innerText = "BUY TICKET";
    return showItemEl;
}


showData.forEach(showData => {
    const showItemEl = createCommentElement(comment);
    container.appendChild(commentItemEl);
    console.log(showData);
});*/
/*
function displayShows(showsObject) {
    let shows = document.createElement('div');
    shows.classList.add('box__child');




    let date = document.createElement('p');
    date.innerText = showsObject.date;
    let dateday = document.createElement('p');
    dateday.innerText = showsObject.dateday;
    let venue = document.createElement('p');
    venue.innerText = showsObject.venue;
    let place = document.createElement('p');
    place.innerText = showsObject.place;
    let location = document.createElement('p');
    location.innerText = showsObject.location;
    let city = document.createElement('p');
    city.innerText = showsObject.city;


    //Append paragraph elements to our div

    shows.appendChild(date);
    shows.appendChild(dateday);
    shows.appendChild(venue);
    shows.appendChild(place);
    shows.appendChild(location);
    shows.appendChild(city);


    container.appendChild(shows);
}


shows.forEach(item => {
    displayShows(item)
}); */