 let promiseObj = new Promise ((reslove,reject)=>{
    console.log("This is Promise Chain!!!!")
 });


 function task1(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1 completed!!")
        },1000);
    });
 }

 function task2(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 2 completed!!")
        },1000);
    });
 }

 function task3(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 3 completed!!")
        },1000);
    });
 }


 task1()
 .then((val) =>{
    console.log(val);
    return task2();
 }).then((val) =>{
    console.log(val);
    return task3();
 }).then((val) =>{
    console.log(val);
    setTimeout(() =>{
        console.log("all task completed!!!");
    },1000);
 }).catch((err) => {
    console.log("Error", err);
 });

