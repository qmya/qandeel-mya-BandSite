    const commentList = [{

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
        }
    ];

    let container = document.querySelector('.box__comments');
    console.log(container);

    const createCommentElement = commentData => {
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



        commentItemDate.innerText = commentData.date;
        commentItemDate.classList.add('box__child__date');
        commentAlign.appendChild(commentItemDate);

        commentItemEl.appendChild(commentAlign);

        commentItemMessage.innerText = commentData.message;
        commentItemMessage.classList.add('box__child__message');
        commentItemEl.appendChild(commentItemMessage);
        return commentElWrapper;
    }


    commentList.forEach(comment => {
        const commentItemEl = createCommentElement(comment);
        container.appendChild(commentItemEl);
    });



    let myForm = document.getElementById('myForm');
    myForm.addEventListener('submit', e => {
        e.preventDefault();

        let comment = {
            name: event.target.name.value,
            date: "05/2/2020",
            message: event.target.comment.value,

        }
        commentList.unshift(comment);

        while (container.firstElementChild) {
            container.removeChild(container.firstElementChild);
        }
        myForm.reset();

        commentList.forEach(comment => {

            const commentEl = createCommentElement(comment);
            container.appendChild(commentEl);
        })
    });