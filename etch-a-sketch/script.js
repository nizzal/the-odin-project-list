let container = document.getElementById('container');
let changeSize = document.getElementById('changeSize');
let changeSize2 = document.getElementById('changeSize2');
let removeColor = document.getElementById('clear');

let createGrid = function(num) {
    for (i = 1; i <= num * num; i++){
        var newDiv = document.createElement('div');
        container.appendChild(newDiv);
        newDiv.classList.add('gridSquare');
        newDiv.addEventListener('mouseover', colorPixel);
        container.style.display = 'grid';
        container.style.gridTemplateColumns = `repeat(${num}, auto)`;
        container.style.gridTemplateRows = `repeat(${num}, auto)`;

    }

}

createGrid(3);

// removes grid elements before resetting the number of grid elements
function clearGrid() {
    let removeGrid = document.querySelectorAll('.gridSquare');
    removeGrid.forEach(grid => grid.remove());
}

changeSize.addEventListener('click', resetNum)

function resetNum() {
    let userInput = parseInt(prompt("Enter number."));
    console.log(userInput);
    if (userInput == null) {
        return
    }else if (isNaN(userInput)) {
        alert('The input value is not a number');
    } else if (userInput > 64) {
        alert("Numbers less than 64 are only allowed!");
        resetNum();
    } else {
        clearGrid();
        createGrid(userInput);
    }
}

// Color Pixel
function colorPixel(e) {
    bg = '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    e.target.style.backgroundColor = `${bg}`;
}

// Clear grid element color
removeColor.addEventListener('click', removePixel)

function removePixel() {
    let removeGrid = document.querySelectorAll('.gridSquare');
    removeGrid.forEach(grid => grid.style.backgroundColor = '#fff');
}
