const setGrid = document.querySelector(".set-grid");
const container = document.querySelector(".container");
var sizeValue = document.querySelector("#sizeValue");

var x = document.getElementById("sizeSlider").value;
sizeValue.textContent = `${x} x ${x}`;

function setGrids (x){
    for(let i = 0; i<x; i++){
        let row = document.createElement('div');
        row.classList = `row row-${row}`;
        container.appendChild(row);

        for(let j = 0; j<x; j++){
            let column = document.createElement('div');
            column.classList = `column column-${column}`;
            row.appendChild(column);
        }
    }
}