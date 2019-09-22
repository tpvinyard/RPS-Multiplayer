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