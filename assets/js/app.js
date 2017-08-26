// firebase shit


var config = {
    apiKey: "AIzaSyBMXTweV7HqHawTfcSAs-CHJG7AF92c6CI",
    authDomain: "hello-world-b23f8.firebaseapp.com",
    databaseURL: "https://hello-world-b23f8.firebaseio.com",
    projectId: "hello-world-b23f8",
    storageBucket: "hello-world-b23f8.appspot.com",
    messagingSenderId: "348557850048"
};


firebase.initializeApp(config);

var database = firebase.database();

// Initial Values
var name = "";
var role = "";
var sdate = 0;
var rate = 0;

// Capture Button Click
$("#add-employee").on("click", function(event) {
    event.preventDefault();

    // Grabbed values from text boxes
    name = $("#employee-name").val().trim(); //
    role = $("#employee-role").val().trim();
    sdate = $("#start-date").val().trim();
    rate = $("#monthly-rate").val().trim();

    console.log(name);
    console.log(role);

    // Code for handling the push
    database.ref().push({
        name: name,
        role: role,
        sdate: sdate,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
    });

});