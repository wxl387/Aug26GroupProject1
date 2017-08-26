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
    // alert("button clicked");
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

// Create Firebase "watcher" Hint: .on("value")
// database.ref().on("value", function(snapshot) {
	database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val());
    console.log(snapshot.val().name);
    // console.log(snapshot.val().role);
    // console.log(snapshot.val().sdate);
    // console.log(snapshot.val().rate);

    //change html to reflect the user input
    $("#employeeName").html(snapshot.val().name);
    $("#role").html(snapshot.val().role);
    $("#startDate").html(snapshot.val().sdate);
    $("#monthyRate").html(snapshot.val().rate);


}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});