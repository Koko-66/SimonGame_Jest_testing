/**
 * @jest-environment jsdom
 */

const { domainToUnicode } = require("url");
const { game, newGame, showScore } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
})

describe("game object contains correct keys", () => {
    test("score key exists", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exists", () => {
        expect("currentGame" in game).toBe(true);
    });  
    test("playerMoves key exists", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choices key exists", () => {
        expect("choices" in game).toBe(true);
    });
    test("choices contain correct ids", () => {
        expect(game.choices).toEqual(["button1", "button2", "button3", "button4"]);
    }); 
})

describe("newGame function works correctly", () => {
    beforeAll(() => { //sets some fake values to test if the function works properly and resets them
        game.score = 42;
        game.playerMoves = ['button1', 'button2'];
        game.currentGame = ['button1', 'button2'];
        document.getElementById("score").innerText = "42";
        newGame();
    });
    test("should set the score to 0", () => {
        expect(game.score).toEqual(0);
    });
    test("should clear playerMoves array", () => {
        expect(game.playerMoves.length).toBe(0);
    });
    test("should clear currentGame array", () => {
        expect(game.currentGame.length).toBe(0);
    });
    test("should set displayed score to 0", () => {
        expect(document.getElementById("score").innerText).toEqual(0);
    });
})

describe("Add turn function works correctly", () =>{
    test()
})