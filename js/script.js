// alert("sanity checks r cool");

/*----- constants -----*/
const PICTURES = {
    "0": "emptySlot",
    "1": "pic",
    "2": "pic",
    "3": "pic",
    "4": "pic",
    "5": "pic",
    "6": "pic",
    "7": "pic",
    "8": "pic",
};

/*----- app's state (variables) -----*/ 
let grid, winner;

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
    // logic behind moving just the blank tile
}
function shuffler() {
// shuffle pictures on array
}
function slide(ev) { 
  
}
//handle arrow keys to move

function render() {             
// render stuff
}
//shuffler, slider, keydown for arrow keys, timer