//List shows from API

const showList = document.querySelector(".show-info__wrapper");

function listShows() {
  axios
    .get(
      `https://project-1-api.herokuapp.com/showdates?api_key=f973b4c7-6184-4c3e-9367-d192acecacd3`
    )
    .then((response) => {
      response.data.forEach((shows) => {
        console.log(shows);

        //create show-info container
        const showContainerElem = document.createElement("section");
        showContainerElem.classList.add("show-info__container");
        showContainerElem.classList.add("show-hover");

        showContainerElem.addEventListener("click", function (event) {
          showContainerElem.classList.toggle("ClickEvent");
        });

        //create div container wrapper
        const showContainerWrapper = document.createElement("div");
        showContainerWrapper.classList.add("show-info__container--wrapper");

        //create header in container wrapper
        const showHeader = document.createElement("h4");
        showHeader.classList.add("show-info__container--title");
        showHeader.classList.add("hide-title");
        showHeader.innerText = "Date";

        //create date details
        const showDetailsDate = document.createElement("p");
        showDetailsDate.classList.add("show-info__container--info");
        showDetailsDate.classList.add("date");
        showDetailsDate.innerText = new Date(
          JSON.parse(shows.date)
        ).toLocaleDateString();

        //create div container wrapper2
        const showContainerWrapper2 = document.createElement("div");
        showContainerWrapper2.classList.add("show-info__container--wrapper");

        //create header in container wrapper2
        const showHeader2 = document.createElement("h4");
        showHeader2.classList.add("show-info__container--title");
        showHeader2.classList.add("hide-title");
        showHeader2.innerText = "Venue";

        //create venue details
        const showDetailsVenue = document.createElement("p");
        showDetailsVenue.classList.add("show-info__container--info");
        showDetailsVenue.innerText = shows.place;

        //create div container wrapper3
        const showContainerWrapper3 = document.createElement("div");
        showContainerWrapper3.classList.add("show-info__container--wrapper");

        //create header in container wrapper3
        const showHeader3 = document.createElement("h4");
        showHeader3.classList.add("show-info__container--title");
        showHeader3.classList.add("hide-title");
        showHeader3.innerText = "Location";

        //create location details
        const showDetailsLocation = document.createElement("p");
        showDetailsLocation.classList.add("show-info__container--info");
        showDetailsLocation.innerText = shows.location;

        //create button
        const showBuyBtn = document.createElement("button");
        showBuyBtn.classList.add("show-info__btn");
        showBuyBtn.innerText = "BUY TICKETS";

        //append created elements

        showContainerElem.appendChild(showContainerWrapper);
        showContainerWrapper.appendChild(showHeader);
        showContainerWrapper.appendChild(showDetailsDate);
        showContainerElem.appendChild(showContainerWrapper2);
        showContainerWrapper2.appendChild(showHeader2);
        showContainerWrapper2.appendChild(showDetailsVenue);
        showContainerElem.appendChild(showContainerWrapper3);
        showContainerWrapper3.appendChild(showHeader3);
        showContainerWrapper3.appendChild(showDetailsLocation);
        showContainerElem.appendChild(showBuyBtn);

        //finally glue everything together
        showList.appendChild(showContainerElem);
      });
    });
}

listShows();
