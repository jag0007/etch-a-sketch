function sketch(e) {
    e.srcElement.style.backgroundColor = "black";
}

function make_grid(grid_dim, draw_function) {
    const draw_grid = document.querySelector('#draw-grid');
    for (i = 0; i < grid_dim; i++){
        let new_row = document.createElement('div');
        new_row.classList.add('grid-row');
        for (j = 0; j < grid_dim; j++) {
            let new_block = document.createElement('div');
            new_block.classList.add('draw-block');
            new_row.appendChild(new_block);
        }
        draw_grid.appendChild(new_row);
    }
}

function set_draw_function(draw_function) {
    console.log('Down');
    const grid_blocks = document.querySelectorAll('.draw-block');
    grid_blocks.forEach((element) => {
        element.addEventListener('mouseover', (e) => {
           e.target.style.backgroundColor = "black"; 
        });
    });
}

function remove_draw_function(draw_function) {
    console.log('Up');
    const grid_blocks = document.querySelectorAll('.draw-block');
    grid_blocks.forEach((element) => {
        element.removeEventListener('mouseover', (e) => {
           e.target.style.backgroundColor = "black"; 
        });
    });
}

make_grid(16);
const draw_grid = document.querySelector('#draw-grid');
draw_grid.addEventListener('mousedown', set_draw_function);
draw_grid.addEventListener('mouseup', remove_draw_function, false);
//set_draw_function(sketch);

console.log('made');
