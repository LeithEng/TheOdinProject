const gridContainer = document.querySelector('.container');
for (let i = 0; i < 16 * 16; i++) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');
    gridContainer.appendChild(gridItem);
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', () => {
        gridItem.style.backgroundColor = getRandomColor();
    });
});

function createGrid(size) {
    const gridContainer = document.querySelector('.container');
    gridContainer.innerHTML = '';

    const gridItemSize = 960 / size -2;
    for (let i = 0; i < size * size; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${gridItemSize}px`;
        gridItem.style.height = `${gridItemSize}px`;
        gridContainer.appendChild(gridItem);
    }
}

function changeGridSize() {
    let gridSize = prompt('Enter the number of squares per side (max 100):');
    gridSize = parseInt(gridSize);

    if (isNaN(gridSize) || gridSize < 1 || gridSize > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    createGrid(gridSize);
}