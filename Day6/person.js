class Person {
    constructor(name) {
      this.fullName = name;
    }
    
    getName() {
      return this.fullName;
    }
  }
  class Employee extends Person {
    constructor(name, id){
      super(name);
      this.id = id;
    }
    getId(){
      return this.id
    }
  }
  let obj = new Employee("praveen", "2001");
  console.log(obj.getName(), obj.getId());