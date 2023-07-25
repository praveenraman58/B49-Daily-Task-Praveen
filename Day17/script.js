let promiseObj = new Promise((resolve,reject)=>{
    console.log("check for the manpower on playing the game!!!!");
    // resolve("yes manpower is available!!!");
    reject("manpower is not available!!!");

});

console.log(promiseObj);

// ////way 1
// promiseObj.then(
//     (val) => {
//         console.log("man power status ---",val);
//     },
//     (err) => {
//         console.log("man power status ---",err);
//     }
// );

///way 2

promiseObj
.then(
    (val) => {
        console.log("man power status ---",val);
    })
.catch((err) => {
    console.log("man power status ---",err);
});
