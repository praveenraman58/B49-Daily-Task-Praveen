
var countries;

var countries = document.getElementById("Countries")


fetch("https://restcountries.com/v3.1/all")
.then((response) => {
    return response.json();
})
.then((val) => {
    for(var i = 0; i < val.length; i++){
        if(val[i].name.common == "American Samoa"){
            americanSamoa.innerHTML = (val[i].capital);
            americanSamoareg.innerHTML = (val[i].region);
        }
        if(val[i].name.common == "Peru"){
            peru.innerHTML = (val[i].capital);
            perureg.innerHTML = (val[i].region);
        }
        if(val[i].name.common == "Panama"){
            panama.innerHTML = (val[i].capital);
            panamareg.innerHTML = (val[i].region);
        }
    }
})
.catch((err) => {
    console.log("Error: ", err)
});
