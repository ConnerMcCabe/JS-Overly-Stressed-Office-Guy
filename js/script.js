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

/*----- app's state (variables) -----*/ 
let grid, shuffler; 
let winner = 0;
let holder =[];
let timerId;
let count, fontSize;

/*----- cached element references -----*/ 
const timer = document.querySelector('#timer')

/*----- event listeners -----*/ 
document.querySelector('.grid').addEventListener('click', handleMove);

/*----- functions -----*/
init();
function init() {
let numArray = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    grid = [
        0, 1, 2, 3,
        4, 5, 6, 7,
        8, 9, 10, 11,
        12, 13, 14, 15
    ];
    for(let x= 0; x<16; x++) {
    shuffler = (Math.floor(Math.random() * 100))%numArray.length;
    grid[x] = numArray.splice(shuffler,1);
//initializes the game board then shuffles the grid 
//using numArray
}
    count = 100;
    fontSize = 25;
    timer.style.display = "block";
    timer.textContent = "";
    render();
// sets the values of some of the variables and renders   
}
function handleMove(evt) { 
    let moveIdx = parseInt(evt.target.id);
    if (isNaN(moveIdx)) {return}
        holder.push(moveIdx);
        if (holder.length == 2) {
       
            let valAlpha = grid[holder[0]];
            grid[holder[0]] = grid[holder[1]];
            grid[holder[1]] = valAlpha;
            holder = [];
            render();
            countDown();   
        }
}
//throws the value of grid clicked on (the first and second click) into the holder array then swaps the value using the valAlpha, empties the holder array, renders and triggers countDown
function countDown() {
timerId = setInterval(counter, 1000); 
}
//set up for the timer
function counter() {
count--;
fontSize += 2;
timer.textContent = count;   
timer.style.fontSize = `${fontSize}px`;    
    if (count <= 75) {
        if (count % 2) {
            timer.style.color = "red"; 
        } else {timer.style.color = "black"}
//sets up the counter with the count, fontsize, and flashing
    }
    if (count <= 0) {
        clearInterval(timerId);
        timer.style.display = "none";
        resButton.style.visibility = "visible";
        document.querySelector('.grid').removeEventListener('click', handleMove);
    }
}
//when the count hits 0 the counter display is taken away
//makes the reset button visible and RemEvLis on the click
function render()
{
    for(let x = 0; x < 16; x++) {           
        let div = document.getElementById(`${x}`);  
        div.style.backgroundImage = `url(${PICTURES[grid[x]]})`;
    }
    checkwinner();
}
//sets up the display on the grid and runs checkwinner
function checkwinner() {
    for(let x = 0; x < 16; x++) {
        if (grid[x] == x) { winner++ }  
    } 
    if (winner == 16) {
        confetti.start();
        clearInterval(timerId);
        timer.style.display = "none";
    }  else {  winner = 0; }  
}
//checks if the grid matches and if it does it increments "winner" by one, when "winner" adds up to 16 the confetti falls