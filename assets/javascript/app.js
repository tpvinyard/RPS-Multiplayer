let player1 = {
    game: {rock: false, paper: false, scissors: false},
    wins: 0,
    losses: 0,
    ties: 0,
    hasPlayed: false,
    playerSet: false,
    playerName: ''
}

let player2 = {
    game: {rock: false, paper: false, scissors: false},
    wins: 0,
    losses: 0,
    ties: 0,
    hasPlayed: false,
    playerSet: false,
    playerName: ''
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
    updateDOM(snapshot);
})

$(document).ready(function() {
    $('#initiate-player-one').on('click', function() {
        event.preventDefault();
        if (!player1.playerSet) {
            player1.playerSet = true;
            player1.playerName = $('#nameInput1').val().trim();
            updatePlayers();
        }
    })

    $('#initiate-player-two').on('click', function() {
        event.preventDefault();
        if (!player2.playerSet) {
            player2.playerSet = true;
            player2.playerName = $('#nameInput2').val().trim();
            updatePlayers();
        }
    })
    
    $('.play-button-one').on('click', function() {
        player1.game[$(this).data('value')] = true;
        player1.hasPlayed = true;
        console.log(player1.game);
        playGame();
        updatePlayers();
        checkRoundOver();
        updatePlayers();
        console.log(player1);
        console.log(player2);
    })

    $('.play-button-two').on('click', function() {
        player2.game[$(this).data('value')] = true;
        player2.hasPlayed = true;
        console.log(player2.game);
        playGame();
        updatePlayers();
        checkRoundOver();
        updatePlayers();
        console.log(player2);
        console.log(player1);
    })

})

function updatePlayers() {
    database.ref().set({
        player1 ,
        player2
    })
}

function updateDOM(Snapshot) {
    console.log(Snapshot.val());

    $('#player-one-name').text(Snapshot.val().player1.playerName);
    $('#player-two-name').text(Snapshot.val().player2.playerName);

    $('#player-one-wins').text(`Wins: ${Snapshot.val().player1.wins}`);
    $('#player-one-losses').text(`Losses: ${Snapshot.val().player1.losses}`);
    $('#player-one-ties').text(`Ties: ${Snapshot.val().player1.ties}`);
    $('#player-two-wins').text(`Wins: ${Snapshot.val().player2.wins}`);
    $('#player-two-losses').text(`Losses: ${Snapshot.val().player2.losses}`);
    $('#player-two-ties').text(`Ties: ${Snapshot.val().player2.ties}`);
}

function checkRoundOver() {
    if (player2.hasPlayed && player1.hasPlayed) {
        resetRound();
    }
}

function playGame() {
    if (player1.game.rock && player2.game.scissors) {
        player1.wins++;
        player2.losses++;
    }
    else if (player1.game.rock && player2.game.paper) {
        player1.losses++;
        player2.wins++;
    }
    else if (player1.game.rock && player2.game.rock) {
        player1.ties++;
        player2.ties++;
    }
    else if (player1.game.paper && player2.game.scissors) {
        player1.losses++;
        player2.wins++;
    }
    else if (player1.game.paper && player2.game.paper) {
        player1.ties++;
        player2.ties++;
    }
    else if (player1.game.paper && player2.game.rock) {
        player1.wins++;
        player2.losses++;
    }
    else if (player1.game.scissors && player2.game.scissors) {
        player1.ties++;
        player2.ties++;
    }
    else if (player1.game.scissors && player2.game.paper) {
        player1.wins++;
        player2.losses++;
    }
    else if (player1.game.scissors && player2.game.rock) {
        player1.losses++;
        player2.wins++;
    }
}

function resetRound() {
    player1.game.rock = false;
    player1.game.paper = false;
    player1.game.scissors = false;
    player2.game.rock = false;
    player2.game.paper = false;
    player2.game.scissors = false;

    player1.hasPlayed = false;
    player2.hasPlayed = false;

    database.ref().set({
        player1,
        player2
    })
}

function resetGame() {

}