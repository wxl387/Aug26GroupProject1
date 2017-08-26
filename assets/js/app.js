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

    //update table





});

// Create Firebase "watcher" Hint: .on("value")
// database.ref().on("value", function(snapshot) {
// database.ref().on("child_added", function(snapshot) {

// 	// console.log(snapshot.val());
// 	var test = snapshot.val();

// 	// for (var i = test.length - 1; i >= 0; i--) {
// 	// 	console.log(test[i]);
// 	// }

// 	for (var i = 0; i < test.length; i++) {
// 		console.log(i);
// 	}
// });

// database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
database.ref().orderByChild("dateAdded").on("child_added", function(snapshot) {


    var sv = snapshot.val();

    // Console.loging the last user's data
    console.log(sv.name);
    console.log(sv.role);
    console.log(sv.sdate);
    console.log(sv.rate);




    // console.log(snapshot.val());
    // console.log(snapshot.val().name);
    // console.log(snapshot.val().role);
    // console.log(snapshot.val().sdate);
    // console.log(snapshot.val().rate);

    // change html to reflect the user input
    // $("#employeeName").html(sv.name);
    // $("#role").html(sv.role);
    // $("#startDate").html(sv.sdate);
    // $("#monthyRate").html(sv.rate);

    // $("#employeeName").append(sv.name);
    // $("#role").html(sv.role);
    // $("#startDate").html(sv.sdate);
    // $("#monthyRate").html(sv.rate);

    var content = '';
        content += '<tr>';
        content += '<td>' + sv.name + '</td>';
        content += '<td>' + sv.role + '</td>';
        content += '<td>' + sv.sdate + '</td>';

        content += '</tr>';
    // });
    $('#myTable').append(content);


}, function(errorObject) {
    console.log("Errors handled: " + errorObject.code);
});


//function to populate row

// $.each(val, function(i, item) {

//        tr = $('<tr>').append('<td>' + (sv.name) + '</td>' + 
//                              '<td>' + (sv.role) + '</td>');

//        $("#scalaapi").append(tr);
//   });

// database.ref().once('value', function(snapshot){
//     if(snapshot.exists()){
//         var content = '';
//         snapshot.forEach(function(data){
//             var val = data.val();
//             content +='<tr>';
//             content += '<td>' + val.descripcion + '</td>';
//             content += '<td>' + val.direccion + '</td>';
//             content += '<td>' + val.estado + '</td>';
//             content += '<td>' + val.imagen + '</td>';
//             content += '<td>' + val.tipo + '</td>';
//             content += '<td>' + val.udisplayName + '</td>';
//             content += '<td>' + val.uemail + '</td>';
//             content += '</tr>';
//         });
//         $('#ex-table').append(content);
//     }
// });