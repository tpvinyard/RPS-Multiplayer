let player1 = {
    game: {rock: false, paper: false, scissors: false},
    wins: 0,
    losses: 0,
    ties: 0,
    hasWon: false,
    playerSet: false,
}

let player2 = {
    game: {rock: false, paper: false, scissors: false},
    wins: 0,
    losses: 0,
    ties: 0,
    hasWon: false,
    playerSet: false,
}


// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAlw3QxbfupX16ZaSQC81RG6vrLU1yN1Aw",
authDomain: "rps-multiplayer-65046.firebaseapp.com",
databaseURL: "https://rps-multiplayer-65046.firebaseio.com",
projectId: "rps-multiplayer-65046",
storageBucket: "rps-multiplayer-65046.appspot.com",
messagingSenderId: "108598882221",
appId: "1:108598882221:web:4cea1c3ce112b23419fb24"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create a variable to reference the database
const database = firebase.database();

//initialize players on page load
updatePlayers();


database.ref().on("value", function(snapshot) {

})

$(document).ready(function() {
    $('#initiate-player-one').on('click', function() {
        player1.playerSet = true;
        updatePlayers();
    })

    $('#initiate-player-two').on('click', function() {
        player2.playerSet = true;
        updatePlayers();
    })
    
    $('.play-button-one').on('click', function() {
        player1.game[$(this).data('value')] = true;
        console.log(player1.game);
        updatePlayers();
        console.log(player1);
    })

    $('.play-button-two').on('click', function() {
        player2.game[$(this).data('value')] = true;
        console.log(player2.game);
        updatePlayers();
        console.log(player2);
    })

})

function updatePlayers() {
    database.ref().set({
        player1 ,
        player2
    })
}

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