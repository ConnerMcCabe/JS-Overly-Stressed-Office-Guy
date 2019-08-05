// alert("sanity checks r cool");

/*----- constants -----*/


/*----- app's state (variables) -----*/ 
let grid, turn, winner;


/*----- cached element references -----*/ 



/*----- event listeners -----*/ 



/*----- functions -----*/
init();
function init() {

    grid = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    // console.table(grid) too see the grid in console to check if values add or slide
 
}
function addNumber() {
    let options = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                options.push({
                    x: i,
                    y: j
                });
            }
        }
    }
    if (options.length > 0);
    let spot = random(options);
    grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;
}
//stuff to add
// slide function
// add number function