// console.log("good morning");

// fetch("").then(function (res) {
//   console.log(res);
// });

const apiUrl = "https://poetrydb.org/title/Ozymandias/lines.json";

fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((val) => {
    for (var i = 0; i < val.length; i++) {
      lines.innerHTML = val[i].lines;
    }
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
