let game = {
    score: 0,
    currentGame: [],
    playerMoves: [],
    choices: ["button1", "button2", "button3", "button4"],
    turnNumber: 0,
}

function newGame() {
    game.score = 0;
    game.currentGame = [];
    game.playerMoves = [];
    for (circle of document.getElementsByClassName("circle")) {
        if (circle.getAttribute("data-listener") !== "true") {
            circle.addEventListener("click", (e) => {
                let move = e.target.getAttribute("id");
                lightsOn(move);
                game.playerMoves.push(move);
                playerTurn();
            });
            circle.setAttribute("data-listener", "true");
        } 
    }
    showScore()
    addTurn()
}

function showScore() {
    document.getElementById("score").innerText = game.score
}

function addTurn(){
    game.playerMoves = [];
    game.currentGame.push(game.choices[(Math.floor(Math.random()*4))]);
    showTurns()
}

function lightsOn(circle){
    document.getElementById(circle).classList.add("light");
    setTimeout(() => {
        document.getElementById(circle).classList.remove("light");
    }, 400)
}

function showTurns() {
    game.turnNumber = 0;
    let turns = setInterval(() =>{
        lightsOn(game.currentGame[game.turnNumber]);
        game.turnNumber++;
        if (game.turnNumber >= game.currentGame.length){
            clearInterval(turns);
        }
    }, 800);
}

function playerTurn() {
    let i = game.playerMoves.length - 1; 
    if(game.currentGame[i] === game.playerMoves[i]) {
        if (game.currentGame.length == game.currentGame.length) {
            game.score++;
            showScore();
            addTurn();
        }
    } else {
        alert("Wrong move!");
        newGame();
    }
}

module.exports = { game, newGame, showScore, addTurn, lightsOn, showTurns, playerTurn };

