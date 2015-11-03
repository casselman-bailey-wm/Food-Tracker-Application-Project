var foodInput = document.getElementById("food");
var caloInput = document.getElementById("calo");
var sizeInput = document.getElementById("size");
var descInput = document.getElementById("desc");
var tableOutput = document.getElementById("table");


function update() {
    var newItem = getInputItem();
    updateTable(newItem);

}


function getInputItem() {
    var item = {
        food: foodInput.value,
        calo: caloInput.value,
        size: sizeInput.value,
        desc: descInput.value,
    };
    return item;
}


function updateTable(item) {




    var tablerow = document.createElement("tr");
    var food = document.createElement("td");
    var calo = document.createElement("td");
    var size = document.createElement("td");
    var desc = document.createElement("td");



    food.innerHTML = item.food;
    calo.innerHTML = item.calo;
    size.innerHTML = item.size;
    desc.innerHTML = item.desc;



    if(parseFloat(item.calo) > 1000) tablerow.style.backgroundColor = "red";


    tablerow.appendChild(food);
    tablerow.appendChild(calo);
    tablerow.appendChild(size);
    tablerow.appendChild(desc);
    tableOutput.appendChild(tablerow);
}