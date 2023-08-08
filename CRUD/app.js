/// sample data to store initial records

let data = [
    {name:"praveen",age:22},
    {name:"mani",age:20}
];


//function to display in the table 

function displayData() {
    const dataRows = document.getElementById("dataRows");
    dataRows.innerHTML = "";
    debugger;
    data.forEach((value, index)=> {
        const row = `
        <tr>
            <td>${value.name}</td>
            <td>${value.age}</td>
        <td>
            <button class="btn btn-info edit-btn">Edit</button>
            <button class="btn btn-danger delete-btn">Delete</button>
        </td>
        </tr>
        `;
        dataRows.insertAdjacentHTML("beforeend", row);
});
}

//function to handle form submission

function handlFormSubmit(event){
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");


    const name = nameInput.value;
    const age = ageInput.value;

    // add data to the array
    data.push({ name, age });

    // Clear form field
    nameInput.value = "";
    ageInput.value = "";

    //display update data in the table
    displayData();
}


// Attach event listeners

document
.getElementById("curdForm")
.addEventListener("submit",  handlFormSubmit);

document
.getElementById("dataRows").addEventListener("click",(event) => {
    alert();
});;

displayData();