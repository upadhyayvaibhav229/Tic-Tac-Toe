let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGamewin = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");




let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [0, 4, 8],
       [1, 4, 7],
       [2, 5, 8],
       [2, 4, 6],
    ];

    // reset button
const resetGame = () =>{
    turnO = true;
    enabledBoxes();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("button was clicked");
        if(turnO){ 
            box.innerText = 'O';
            box.style.color = "red"
            turnO = false;//after 0  x turn will be there
            
        }
        else{
            box.innerText = "X";
            box.style.color = "blue";
            turnO = true
        }
        box.disabled = true;
        checkWinner();
    });
});

// box reset after winning of one player
const disabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

// box is enabled after reset button is clicked
const enabledBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText  = `Conguralation, winner is  ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const showdraw = () =>{
    msg.innerText  = "It's a draw";
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

let count = 0;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        checkWinner();
    });
});


// check winner
// check winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                showWinner(pos1val);
                return;
            }
        }
        if (count === boxes.length) {
            showdraw();
        }
    }

    // Check for a draw
};


newGamewin.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame)