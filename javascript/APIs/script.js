const img = document.querySelector("img");
const btn = document.querySelector("button");

document.addEventListener("DOMContentLoaded", retrieveData("cats"));

btn.addEventListener("click", function () {
  const inpt = document.querySelector("input");
  const query = inpt.value;
  inpt.value = "";
  if (query == null || query == "") {
    return;
  } else {
    retrieveData(query);
  }
});

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
