let playerOneWins = 0;
let playerOneLosses = 0;
let playerOneTies = 0;
let playerTwoWins = 0
let playerTwoLosses = 0;
let playerTwoTies = 0;

const firebaseConfig = {
    apiKey: "AIzaSyAlw3QxbfupX16ZaSQC81RG6vrLU1yN1Aw",
    authDomain: "rps-multiplayer-65046.firebaseapp.com",
    databaseURL: "https://rps-multiplayer-65046.firebaseio.com",
    projectId: "rps-multiplayer-65046",
    storageBucket: "rps-multiplayer-65046.appspot.com",
    messagingSenderId: "108598882221",
    appId: "1:108598882221:web:4cea1c3ce112b23419fb24"
  };

firebase.initializeApp(config);

// Create a variable to reference the database
const database = firebase.database();


database.ref().on("value", function(snapshot) {

})

$('.play-button').on('click', function() {

})

function playGame(playerOneInput, playerTwoInput) {
    if (playerOneInput == "rock" && playerTwoInput == "scissors") {
        playerOneWins++;
        playerTwoLosses++;
    }
    else if (playerOneInput == "rock" && playerTwoInput == "paper") {
        playerOneLosses++;
        playerTwoWins++;
    }
    else if (playerOneInput == "rock" && playerTwoInput == "rock") {
        playerOneTies++;
        playerTwoTies++;
    }
    else if (playerOneInput == "paper" && playerTwoInput == "scissors") {
        playerOneLosses++;
        playerTwoWins++;
    }
    else if (playerOneInput == "paper" && playerTwoInput == "paper") {
        playerOneTies++;
        playerTwoTies++;
    }
    else if (playerOneInput == "paper" && playerTwoInput == "rock") {
        playerOneWins++;
        playerTwoLosses++;
    }
    else if (playerOneInput == "scissors" && playerTwoInput == "scissors") {
        playerOneTies++;
        playerTwoTies++;
    }
    else if (playerOneInput == "scissors" && playerTwoInput == "paper") {
        playerOneWins++;
        playerTwoLosses++;
    }
    else {
        playerOneLosses++;
        playerTwoWins++;
    }
}

function resetGame() {

}