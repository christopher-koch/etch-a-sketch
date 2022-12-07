const container = document.querySelector('#grid-container');
let gridSize = 0;
const div = document.createElement('div');

function createGrid () {
    
    while (gridSize < 16) {
        gridSize++;
        console.log(gridSize);
        const div = document.createElement('div');
        container.append(div);
    }
    
}

createGrid();












































// erstelle eine fläche innerhalb eines begrenzten containers
// die Fläche ist in einheiten unterteilt

// die fläche kann neu generiert werden

