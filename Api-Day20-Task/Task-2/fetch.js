// console.log("good morning");

// fetch("https://api-thirukkural.vercel.app/api?num=1").then(function (res) {
//   console.log(res);
// });

const apiUrl = "https://api-thirukkural.vercel.app/api?num=1";

fetch(apiUrl)
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    }
  })
  .then((val) => {
    sect_tam.innerHTML = val.sect_tam;
    sect_eng.innerHTML = val.sect_eng;
    chapgrp_tam.innerHTML = val.chapgrp_tam;
    chapgrp_eng.innerHTML = val.chapgrp_eng;
    chap_tam.innerHTML = val.chap_tam;
    chap_eng.innerHTML = val.chap_eng;
    tam_exp.innerHTML = val.tam_exp;
    eng_exp.innerHTML = val.eng_exp;
  })
  .catch((err) => {
    console.log("Error: ", err);
  });

//   .then((val) => {
//     for(var i = 0; i < val.length; i++){
//         if(val[i].name.common == "American Samoa"){
//             americanSamoa.innerHTML = (val[i].capital);
//             americanSamoareg.innerHTML = (val[i].region);
//         }
//         if(val[i].name.common == "Peru"){
//             peru.innerHTML = (val[i].capital);
//             perureg.innerHTML = (val[i].region);
//         }
//         if(val[i].name.common == "Panama"){
//             panama.innerHTML = (val[i].capital);
//             panamareg.innerHTML = (val[i].region);
//         }
//     }
// })
// .catch((err) => {
//     console.log("Error: ", err)
// });
