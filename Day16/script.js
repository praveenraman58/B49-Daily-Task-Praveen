// function playing(cricket){
//     console.log("Let's start playing....")
//     setTimeout(() =>{
//     console.log("game is finished!!!");
//     cricket();
// },2000);
// }

// function afterplaying(){
//     console.log("let go to reading");
// }

// playing(afterplaying);

function walk(){
    console.log("10");
    run();
}
function run(){
    console.log("9");
} 
function rest(){
    console.log("8")
}

walk();