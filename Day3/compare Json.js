let obj1 = {name:"person 1",age:5}
let obj2 = {age:5,name:"person 1"}
function compareJSON(){
  JSON.stringify(obj1)===JSON.stringify(obj1)
  return true;
}

Result=compareJSON();
console.log(Result);