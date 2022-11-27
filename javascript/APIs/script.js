const img = document.querySelector("img");
const btn = document.querySelector("button");

document.addEventListener("DOMContentLoaded", getData("cats"));

btn.addEventListener("click", function () {
  const inpt = document.querySelector("input");
  const query = inpt.value;
  inpt.value = "";
  if (query == null || query == "") {
    return;
  } else {
    getData(query);
  }
});

async function getData(query) {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=YOUR_API_KEY&s=${query}`
  );
  response
    .json()
    .then(function (response) {
      img.src = response.data.images.original.url;
    })
    .catch(function (err) {
      console.log(err);
    });
}

/*

function retrieveData(query) {
  fetch(
    `https://api.giphy.com/v1/gifs/translate?api_key=API_KEY_HERE&s=${query}`,
    { mode: "cors" }
  )
    .then(function (resolve, err) {
      if (err) {
        console.log(err);
      } else {
        return resolve.json();
      }
    })
    .then(function (resolve) {
      const data = resolve.data.images.original.url;
      populateData(data);
    });
}

function populateData(data) {
  img.src = data;
}

*/
