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
    //etc 15
};
let numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

/*----- app's state (variables) -----*/ 
let grid, winner;
let shuffler;
/*----- cached element references -----*/ 



/*----- event listeners -----*/ 

// document.onkeydown
document.addEventListener('keydown', logKey);

function logKey() {
  console.log(event);
}

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
    // logic behind moving just the blank tile
}
//sanity check 2, color tiles for moving or shuffling
// 
// grid.forEach(function(colIdx, rowIdx) {
// let div = document.getElementById(`c${colIdx}r${rowIdx}`);
// div.style.backgroundColor = PICTURES[cell];
// });
// function shuffler() {
//     PICTURES.sort(function () {
//         return .5 - Math.random();
//     })

for(let x= 0; x<16;x++)
{
    shuffler = (Math.floor(Math.random() * 100))%numArray.length;
    console.log(numArray.splice(shuffler,1));
}

// shuffle pictures on array

function slide(ev) { 
  
}
//handle arrow keys to move

function render() {             
// render stuff
}
//shuffler, slider, keydown for arrow keys, timer