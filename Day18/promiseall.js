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
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            reject ("Task 3 completed!!")
        },1000);
    });
 }
 function task4(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 4 completed!!")
        },1000);
    });
 }


Promise.all([task1(),task2(),task3(),task4()])
 .then((val,err) =>{
    console.log(val);
    setTimeout(() =>{
        console.log("all task completed!!!");
    },1000);
 }).catch((err) => {
    console.log("Error", err);
 });

