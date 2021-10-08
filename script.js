// take away the message if user input text or focus
function clearmsg() {
    var msg = document.getElementById("email");
    if(msg.value == "Enter your email") {
        msg.value = "";
    }
}

// show a "enter your email" message if the input field is empty and blur
function msgback() {
    var msg = document.getElementById("email");
    if(msg.value == "") {
        msg.value = "Enter your email";
    }
}

// get nav bar by ajax
$(document).ready(function(){
    $.ajax({
        type: "GET",
        url: "nav.js",
        dataType: "json",
        success: function(responseData, status) {
            var output="";
            output += responseData.landing + "<ul><li>";
            output += responseData.gnh + "</li><li>";
            output += responseData.events + "</li><li>";
            output += responseData.newsletter + "</li><li>";
            output += responseData.tutoring + "</li><ul>";
            $("#nav_bar").html(output);
        }
    });

})