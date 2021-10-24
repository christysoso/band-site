const commentsElem = document.querySelector(".comments__all-container");

// Append preexisting documents from API with get
function displayComments() {
  axios
    .get(
      `https://project-1-api.herokuapp.com/comments?api_key=f973b4c7-6184-4c3e-9367-d192acecacd3`
    )
    .then((response) => {
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

//POST comments to API

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
      console.log("error adding to api");
    });
}
