function make_grid(grid_dim) {
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

make_grid(16)