function clearmsg() {
    var msg = document.getElementById("email");
    if(msg.value == "Enter your email") {
        msg.value = "";
    }
}

function msgback() {
    var msg = document.getElementById("email");
    if(msg.value == "") {
        msg.value = "Enter your email";
    }
}