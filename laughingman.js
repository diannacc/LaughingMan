const SQUARE_COUNT = 30;
const SPEED = 10;
const TIMER_SPEED = 100;

document.addEventListener('DOMContentLoaded', ()=>{
    let squareElement = document.getElementById("square");
    //let squareElement = document.getElementById("#square");
    squareElement.addEventListener("click", ()=>{
        alert("OMG YOU CAUGHT ME!");
    });

    //#6 Prompt: If we mouse over the #square element, change it's background-color instead.
    squareElement.addEventListener("mouseover", ()=>{
        squareElement.dataset.oldbg = squareElement.style.backgroundColor;
        squareElement.style.backgroundColor = getRandomColor(); //On mouseover, displays a different random color
    });

    squareElement.addEventListener("mouseout", ()=>{
        squareElement.style.backgroundColor = squareElement.dataset.oldbg || ""; //On mouseout, resets color back to default set (red)
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
    let squareArray = Array.from(allSquares);
    squareArray.forEach(function(element,index){

        //#5 Adding the hover feature to show the image / not show it
        element.addEventListener("mouseover", ()=> {
            element.dataset.hovering = element.src;
            element.src = "Orochimaru.jpg"; //Hover sets to new IMG to orochimaru
        });

        element.addEventListener("mouseout", ()=>{
            element.src = "laughing_man.jpg"; //Not Hovering resets IMG to laughing_man
        });

        var dx = SPEED * (Math.random()*2-1);
        var dy = SPEED * (Math.random()*2-1);
        setInterval(()=> {
            let currentLeft = parseInt(element.style.left) || 275;
            let currentTop = parseInt(element.style.top) || 175;
            if(currentLeft >=450 || currentLeft<=0){
                dx*=-1;
                element.style.borderColor = getRandomColor();
            }
            if(currentTop >=350 || currentTop <=0){
                dy*=-1;
                element.style.borderColor = getRandomColor();
            }


            element.style.left = (currentLeft+dx)+"px";
            element.style.top = (currentTop+dy)+"px";
        }, TIMER_SPEED);
    });
    

});

function getRandomColor(){
    let r = parseInt(Math.random()*256);
    let g = parseInt(Math.random()*256);
    let b = parseInt(Math.random()*256);
    let color = `rgb(${r},${g},${b})`;
    return color;
}

//FOR HW DO #5-#6, #1-4 DID IN CLASS ALREADY