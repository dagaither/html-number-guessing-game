console.log("HELLO PAPA PLATOON!")
// Your function(s) should go here that will interact with the webpage or DOM

// 
let randNum = Math.floor(Math.random() * 100) + 1;


document.getElementById("userInput").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let userInput = parseInt(document.getElementById("userGuess").value);
    if (userInput >=1 && userInput <=100) {
        if (userInput > randNum) {
            appendGuess(userInput, "high")
            document.getElementById("userGuess").value = "";
        }
        else if (userInput < randNum) {
            appendGuess(userInput, "low")
            document.getElementById("userGuess").value = "";
        }
        else {
            gameWon(userInput)
    }    
    }
    else {
        alert("Enter a valid number 1-100!")
    }
    });


function appendGuess(guess, hiLo) {
    let li = document.createElement("li");
    li.textContent = `Your guess ${guess} was too ${hiLo}`;
    document.getElementById("guesses").appendChild(li);
}

function gameWon(guess) {
    let li = document.createElement("li");
    li.textContent = `Your guess ${guess} was correct!  You win!`
    document.getElementById("guesses").appendChild(li)
}

function refreshPage() {
    location.reload();
}