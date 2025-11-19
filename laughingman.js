const SQUARE_COUNT = 3;
const SPEED = 5;
const TIMER_SPEED = 100;

document.addEventListener('DOMContentLoaded', ()=>{
    let squareElement = document.getElementById("square");
    //let squareElement = document.getElementById("#square");
    squareElement.addEventListener("click", ()=>{
        alert("OMG YOU CAUGHT ME!");
    });
    let box = document.querySelector('#box');

    for(let i = 0; i<SQUARE_COUNT; i++){
        //create the square
        let square = document.createElement('img');
        square.src = 'laughing_man.jpg';
        square.alt = 'Catch the Laughing Man!';
        square.className = 'square';
        box.appendChild(square);
        //add it to the screen
    }
    let allSquares = box.children;
    let squareArray = Array.from(children);
    squareArray.forEach(function(element,index){
        var dx = SPEED * (Math.random()*2-1);
        var dy = SPEED * (Math.random()*2-1);
    });
    
});

