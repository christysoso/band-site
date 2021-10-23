const usersURL =
  "https://project-1-api.herokuapp.com/comments?api_key=f973b4c7-6184-4c3e-9367-d192acecacd3";
axios.get(usersURL).then((response) => {
  console.log(response.data);
});

const commentsElem = document.querySelector(".comments__all-container");

function displayComments() {
  axios
    .get(
      `https://project-1-api.herokuapp.com/comments?api_key=f973b4c7-6184-4c3e-9367-d192acecacd3`
    )
    .then((response) => {
      console.log(response.data);

      const sortedComments = response.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );

      commentsElem.innerHTML = "";
      sortedComments.forEach((comments) => {
        console.log(comments);

        //create comments container
        const commentsContainer = document.createElement("article");
        commentsContainer.classList.add("comments__container");

        //create comments container left
        const containerLeft = document.createElement("div");
        containerLeft.classList.add("comment__container--left");

        //create image connect to left container
        const containerImg = document.createElement("img");
        containerImg.classList.add("comments__container--pic");
        containerImg.setAttribute(
          "src",
          "./Assets/Images/placeholderavatar.png"
        );
        containerImg.setAttribute("alt", "profile-pic");

        //create comments container right
        const containerRight = document.createElement("div");
        containerRight.classList.add("comments__container--right");

        //create comments header
        const commentsHeader = document.createElement("div");
        commentsHeader.classList.add("comments__container--header");

        //create comments name
        const commentsName = document.createElement("h4");
        commentsName.classList.add("comments__container--name");
        commentsName.innerText = comments.name;

        //create comments date
        const commentsDate = document.createElement("h4");
        commentsDate.classList.add("comments__container--date");
        commentsDate.innerText = new Date(
          comments.timestamp
        ).toLocaleDateString();

        //create comments paragraph
        const commentsPara = document.createElement("p");
        commentsPara.classList.add("comments__container--comment");
        commentsPara.innerText = comments.comment;

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
      });
    })
    .catch((error) => {
      console.log(error);
    });
}

displayComments();

// const newComments = [
//   {
//     name: "Connor Walton",
//     date: "02/17/2021",
//     comments:
//       "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
//     avatar: "./Assets/Images/placeholderavatar.png",
//   },

//   {
//     name: "Emilie Beach",
//     date: "01/01/2021",
//     comments:
//       "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
//     avatar: "./Assets/Images/placeholderavatar.png",
//   },
//   {
//     name: "Miles Acosta",
//     date: "12/20/2020",
//     comments:
//       "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//     avatar: "./Assets/Images/placeholderavatar.png",
//   },
// ];

// const commentsElem = document.querySelector(".comments__all-container");

// function displayComments() {
//   commentsElem.innerHTML = "";
//   for (let i = 0; i < newComments.length; i++) {
//     //create comments container
//     const commentsContainer = document.createElement("article");
//     commentsContainer.classList.add("comments__container");

//     //create comments container left
//     const containerLeft = document.createElement("div");
//     containerLeft.classList.add("comment__container--left");

//     //create image connect to left container
//     const containerImg = document.createElement("img");
//     containerImg.classList.add("comments__container--pic");
//     containerImg.setAttribute("src", newComments[i].avatar);
//     containerImg.setAttribute("alt", "profile-pic");

//     //create comments container right
//     const containerRight = document.createElement("div");
//     containerRight.classList.add("comments__container--right");

//     //create comments header
//     const commentsHeader = document.createElement("div");
//     commentsHeader.classList.add("comments__container--header");

//     //create comments name
//     const commentsName = document.createElement("h4");
//     commentsName.classList.add("comments__container--name");
//     commentsName.innerText = newComments[i].name;

//     //create comments date
//     const commentsDate = document.createElement("h4");
//     commentsDate.classList.add("comments__container--date");
//     commentsDate.innerText = newComments[i].date;

//     //create comments paragraph
//     const commentsPara = document.createElement("p");
//     commentsPara.classList.add("comments__container--comment");
//     commentsPara.innerText = newComments[i].comments;

//     //Append elements together
//     commentsContainer.appendChild(containerLeft);
//     containerLeft.appendChild(containerImg);
//     commentsContainer.appendChild(containerRight);
//     containerRight.appendChild(commentsHeader);
//     commentsHeader.appendChild(commentsName);
//     commentsHeader.appendChild(commentsDate);
//     containerRight.appendChild(commentsPara);

//     //glue everything together
//     commentsElem.appendChild(commentsContainer);
//   }
// }

// displayComments();

//Form functionality

// const form = document.getElementById("main-form");

// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("form submitted");
//   console.log(event.target.name.value);
//   console.log(event.target.message.value);

//   const addNewComment = {
//     name: event.target.name.value,
//     comments: event.target.message.value,
//     date: new Date(Date.now()).toLocaleDateString(),
//     avatar: "./Assets/Images/Mohan-muruge.jpg",
//   };

//   newComments.unshift(addNewComment);

//   form.reset();

//   displayComments();
// });

const form = document.getElementById("main-form");



form.addEventListener("submit", handleAddComment);

function handleAddComment(event) {
  event.preventDefault();

  const addNewComment = {
    name: event.target.name.value,
    comment: event.target.message.value,
  };

  axios
    .post(
      `https://project-1-api.herokuapp.com/comments?api_key=f973b4c7-6184-4c3e-9367-d192acecacd3`,
      addNewComment
    )
    .then((response) => {
      console.log(response.data);
      displayComments();
      event.target.reset();
      
    }) 
    .catch(() => {
      console.log('error adding to api');
    });
}

