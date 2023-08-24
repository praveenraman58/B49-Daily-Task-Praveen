// console.log("good morning");

// fetch("").then(function (res) {
//   console.log(res);
// });

const apiUrl = "https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand";

fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((val) => {
    for (var i = 0; i < val.length; i++) {
      id.innerHTML = val[0].id;
      title.innerHTML = val[0].title.rendered;
      date.innerHTML = val[0].date;
      date_gmt.innerHTML = val[0].date_gmt;
      guid.innerHTML = val[0].guid.rendered;
      modified.innerHTML = val[0].modified;
      slug.innerHTML = val[0].slug;
      link.innerHTML = val[0].link;
    }
  });
// .catch((err) => {
//   console.log("Error: ", err);
// });
