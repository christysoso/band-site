console.log("oh...no our table...is broken");

const newComments = [
  {
    name: "Connor Walton",
    date: "02/17/2021",
    comments:
      "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
  },

  {
    name: "Emilie Beach",
    date: "01/01/2021",
    comments:
      "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
  },

  {
    name: "Miles Acosta",
    date: "12/20/2020",
    comments:
      "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
  },
];

const commentsElem = document.querySelector(".comments");
// console.log(commentsElem);

function addComments() {
  for (let i = 0; i < newComments.length; i++) {
      //create comments container
      const commentsContainer = document.createElement('article');
      commentsContainer.classList.add('comments__container');

        //create comments container left
        const containerLeft = document.createElement('div');
        containerLeft.classList.add('comment__container--left');

        //create image connect to left container
        const containerImg = document.createElement('img');
        containerImg.classList.add('comments__container--pic');
        containerImg.setAttribute('src','./Assets/Images/Mohan-muruge.jpg');
        containerImg.setAttribute('alt', 'profile-pic');

        //create comments container right
        const containerRight= document.createElement('div');
        containerRight.classList.add('comments__container--right');

        //create comments header
        const commentsHeader= document.createElement('div');
        commentsHeader.classList.add('comments__container--header');

        //create comments name
        const commentsName= document.createElement('h4');
        commentsName.classList.add('comments__container--name');
        commentsName.innerText= newComments[i].name;

        //create comments date
        const commentsDate= document.createElement('h4');
        commentsDate.classList.add('comments__container--date');
        commentsDate.innerText= newComments[i].date;

        //create comments paragraph
        const commentsPara = document.createElement('p');
        commentsPara.classList.add('comments__container--comment');
        commentsPara.innerText= newComments[i].comments;




        //Append elements together
        commentsContainer.appendChild(containerLeft);
        containerLeft.appendChild(containerImg);
        commentsContainer.appendChild(containerRight);
        containerRight.appendChild(commentsHeader);
        commentsHeader.appendChild(commentsName);
        commentsHeader.appendChild(commentsDate);
        containerRight.appendChild(commentsPara);

      //glue everything together
      commentsElem.appendChild(commentsContainer);
  }
}

addComments();
