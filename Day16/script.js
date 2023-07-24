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
    console.log("Walking!!!");
    run();
}
function run(){
    console.log("Running!!!");
    setTimeout(()=>{
        console.log("Drink water!!!");
    },2000);
    rest();
} 
function rest(){
    console.log("Rest!!!")
}

walk();