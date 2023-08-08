
var countries;

var countries = document.getElementById("Countries")


fetch("https://api-thirukkural.vercel.app/api?num=1")
.then((response) => {
    return response.json();
})
.then((val) => {
    for(var i = 0; i < val.length; i++){
        if(val[i] == 0){
            number.innerHTML = (val[i].sect_tam);
            number.innerHTML = (val[i].chapgrp_tam);
        }
    }
})
.catch((err) => {
    console.log("Error: ", err)
});
