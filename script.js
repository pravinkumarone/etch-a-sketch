const setGrid = document.querySelector(".set-grid");
const container = document.querySelector(".container");
let sizeValue = document.querySelector("#sizeValue");
let sizeSlider = document.querySelector("#sizeSlider");

sizeValue.textContent = `${sizeSlider.value} x ${sizeSlider.value}`; 

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