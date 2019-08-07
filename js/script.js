/*----- constants -----*/
const PICTURES = {
    0 : "pictures/img00.png",
    1 : "pictures/img01.png",
    2 : "pictures/img02.png",
    3 : "pictures/img03.png",
    4 : "pictures/img04.png",
    5 : "pictures/img05.png",
    6 : "pictures/img06.png",
    7 : "pictures/img07.png",
    8 : "pictures/img08.png",
    9 : "pictures/img09.png",
    10 : "pictures/img10.png",
    11 : "pictures/img11.png",
    12 : "pictures/img12.png",
    13 : "pictures/img13.png",
    14 : "pictures/img14.png",
    15 : "pictures/img15.png"
};

// let numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//shuffler example
/*----- app's state (variables) -----*/ 
let grid, winner;
let shuffler;
let holder =[];
/*----- cached element references -----*/ 


/*----- event listeners -----*/ 
document.querySelector('.grid').addEventListener('click', handleMove);


/*----- functions -----*/
init();
function init() {

    grid = [
        0, 1, 2, 3,
        4, 5, 6, 7,
        8, 9, 10, 11,
        12, 13, 14, 15
    ];
     render();
    // console.table(grid) too see the grid in console to check if values add or slide
    // logic behind moving just the blank tile
}
// shuffle an array
for(let x= 0; x<16; x++) {
    shuffler = (Math.floor(Math.random() * 100))%grid.length;
    console.log(grid.splice(shuffler,1));
}
function handleMove(evt) { 
    let moveIdx = parseInt(evt.target.id);
        holder.push(moveIdx);
        if (holder.length == 2) {
       
            let valAplha = grid[holder[0]];
            grid[holder[0]] = grid[holder[1]];
            grid[holder[1]] = valAplha;
            holder = [];
            render();
        }
 //swap the positions of the value 
}
//grid[holder[0]] grid[holder[1]]
function render()
{
    for(let x =0; x<16; x++) {           
        let div = document.getElementById(`${x}`);  
        div.style.backgroundImage = `url(${PICTURES[grid[x]]})`;
    }
}

