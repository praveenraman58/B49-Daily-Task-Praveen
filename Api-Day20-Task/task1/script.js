const apiUrl = "https://api.chucknorris.io/jokes/random";

fetch(apiUrl)
.then((response) => {
    if (response.status === 200){
        return response.json();
    }
})
.then((val) => {
    console.log(val);
    for(var i = 0; i < val.length; i++){
        if(val[i].name.common == "categories"){
            facebook-amateur.com.innerHTML(val[i].created_at);
        }
    }
})
.catch((err) => {
    console.log("Error: ", err);
});