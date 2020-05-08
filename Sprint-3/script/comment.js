//The url for the API 
const apiBaseURL = 'https://project-1-api.herokuapp.com/';

//got API key and declare it to a variable
const apikey = '?api_key=235fe40a-464c-48d5-8c8c-30f4d0948e00';





/*const commentList = [{

        name: 'Micheal Lyons',
        date: "12 / 18 / 2018",
        message: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
    },
    {
        name: 'Gary Wong',
        date: "12 / 12 / 2018",
        message: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’ s so talented!I wish I can ride like him one day so I can really enjoy myself!',

    },
    {
        name: 'Theodore Duncan',
        date: "11 / 15 / 2018",
        message: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
    }*/
//CREATED HTML ELEMENTS AND ITS CLASS
let container = document.querySelector('.box__comments');
console.log(container);

const displayComment = commentData => {
    const commentElWrapper = document.createElement('div');
    commentElWrapper.classList.add('box__childwrap')

    const commentElIcon = document.createElement('div');
    commentElIcon.classList.add('box__icon');
    commentElWrapper.appendChild(commentElIcon);


    const commentItemEl = document.createElement('div');
    commentItemEl.classList.add('box__child');
    commentElWrapper.appendChild(commentItemEl);


    const commentItemName = document.createElement('p');
    const commentItemDate = document.createElement('p');
    const commentItemMessage = document.createElement('p');
    const commentAlign = document.createElement('div');
    commentAlign.classList.add('box__style');


    commentItemName.innerText = commentData.name;
    commentItemName.classList.add('box__child__name');
    commentAlign.appendChild(commentItemName);



    commentItemDate.innerText = new Date(commentData.timestamp).toLocaleDateString();
    commentItemDate.classList.add('box__child__date');
    commentAlign.appendChild(commentItemDate);

    commentItemEl.appendChild(commentAlign);

    commentItemMessage.innerText = commentData.comment;
    commentItemMessage.classList.add('box__child__message');
    commentItemEl.appendChild(commentItemMessage);
    return commentElWrapper;
}


/*commentList.forEach(comment => {
    const commentItemEl = displayComment(comment);
    container.appendChild(commentItemEl);
});
*/

function getComments() {

    axios.get(apiBaseURL + 'comments' + apikey)
        .then(results => {
            console.log(results.data);

            //sort the comments by timestamp using .sort
            results.data.forEach(comment => {
                const commentItemEl = displayComment(comment);
                container.appendChild(commentItemEl);

            });
        });
}




let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', e => {
    e.preventDefault();

    let comment = {
        name: event.target.name.value,
        comment: event.target.comment.value,

    }
    axios.post(apiBaseURL + 'comments' + apikey, comment)
        .then(results => {
            while (container.firstElementChild) {
                container.removeChild(container.firstElementChild);
            }
            myForm.reset();
            //Call this in the .then block to make sure we're getting the list again AFTER we post
            getComments();
        })
        /*commentList.unshift(comment);*/



    /* commentList.forEach(comment => {

         const commentEl = displayComment(comment);
         container.appendChild(commentEl);
     })*/
});

getComments();


/*
function lengthOf(array) {
    let sum = 0;
    for (i=0; i < array.lenth; i++) {
        sum += 1
    }
    return sum
}

let answer = lengthOf([1, 2, 5])*/