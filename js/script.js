// alert("sanity checks r cool");

/*----- constants -----*/
const PICTURES = {
    "0": "emptySlot",
    "1": "pic",
    //etc. thru 8
};

/*----- app's state (variables) -----*/ 
let grid, turn, winner;

//
/*----- cached element references -----*/ 



/*----- event listeners -----*/ 

// document.onkeydown
document.addEventListener('keydown', logKey);

function logKey(ev) {
  console.log(event);
}

/*----- functions -----*/
init();
function init() {

    grid = [
        [1, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    // console.table(grid) too see the grid in console to check if values add or slide
 
}
function shuffler() {
// shuffle pictures on array
}
function slide() {
//handle arrow keys to move
}
function render() {             
// render stuff
}
//shuffler, slider, keydown for arrow keys,