function performcalculation(operation){
    const num1=Number(document.getElementById("num1").value);
    const num2=Number(document.getElementById("num2").value);

    // const num1 = Number(prompt("Please enter the valueof number 1:"));
    // const num2 = Number(prompt("Please enter the valueof number 2:"));

    let result;

    switch (operation){
        case "add":
            result = num1+num2;
            break;
        case "sub":
              result = num1-num2;
                break;
        case "mul":
              result = num1*num2;
                break;
         case "div":
              result = num1/num2;
                break;

        default:
            result = "invalid operation"        
    }
    const msg = confirm("Do you want to show the result???");
    if(msg){
      document.getElementById("result").innerText = result;
    }else{
      document.getElementById("result").innerText = "Result cannot be shown!!";
    }
    // document.getElementById("result").innerText = result;
}
setInterval(()=> {
  alert("this is wroung");
},20000)

setTimeout(()=> {
  alert("this is correct");
},5000)