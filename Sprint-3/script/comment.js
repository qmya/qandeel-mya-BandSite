//The url for the API 
const apiBaseURL = 'https://project-1-api.herokuapp.com/';

//got API key and Store the key in a global variable in your website.
const apiKey = '?api_key=235fe40a-464c-48d5-8c8c-30f4d0948e00';


//GETTING ALL ELEMENTS WITH SPECIFIED CLASS NAME
let container = document.querySelector('.box__comments');
console.log(container);

//CREATING INNER ELEMENTS AND CLASSES FOR THE OBJECT ARRAY
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


    //WE WILL GET NEW DATE 
    commentItemDate.innerText = new Date(commentData.timestamp).toLocaleDateString();
    commentItemDate.classList.add('box__child__date');
    commentAlign.appendChild(commentItemDate);

    commentItemEl.appendChild(commentAlign);

    commentItemMessage.innerText = commentData.comment;
    commentItemMessage.classList.add('box__child__message');
    commentItemEl.appendChild(commentItemMessage);
    return commentElWrapper;
}

//GETTING DATA FROM APIs
function getComments() {
    axios.get(apiBaseURL + 'comments' + apiKey)
        .then(results => {
            console.log(results.data);
            //TIME STAMP TO PUT THE COMMENTS IN ASCENDING ORDER
            results.data.sort((a, b) => (a.timestamp < b.timestamp) ? 1 : -1);
            results.data.forEach(comment => {
                const cat = displayComment(comment);
                container.appendChild(cat);

            });
        });
}
//INVOKING GETCOMMENT()
getComments();
let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', e => {
    e.preventDefault();
    let comment = {
            name: event.target.name.value,
            comment: event.target.comment.value,

        }
        //POSTING DATA TO APIs
    axios.post(apiBaseURL + 'comments' + apiKey, comment)
        .then(results => {
            while (container.firstElementChild) {
                container.removeChild(container.firstElementChild);
            }
            //THISWILL RESET THE FORM
            myForm.reset();
            //CALLING THIS IN THE .THEN BLOCK TO ,AKE SURE WE'RE GETTING THE LIST AGAIN AFTER WE POST
            getComments();
        })
});