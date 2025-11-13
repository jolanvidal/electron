const grid = document.getElementById('grid');

for (let row = 0; row < 20; row++) {
  for (let col = 0; col < 20; col++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.dataset.row = row;
    tile.dataset.col = col;

    tile.addEventListener('click', () => {
      tile.style.backgroundColor = 'blue'; // change color on click
    });

    grid.appendChild(tile);
  }
}
