function operation(a,b){
    try{
        if(b>a){
            throw new Error("B is grated then A!!");
        }
     const result = a - b ;
    console.log("Result :", result);
    } catch(err) {
        console.log("Error occurred: ", err);
    }
    

}

operation(10,5);