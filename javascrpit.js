document.getElementById("submit").onclick = function () {
     document.getElementById("submit").onclick = function () {
        let marks = document.getElementById("marks").value;
        console.log("clicked");
        if (marks >= 90) {
            document.getElementById("label1").innerHTML = "You have A1";
        } else if (marks >= 80) {
            document.getElementById("label1").innerHTML = "You have A2";
        } else if (marks >= 70) {
            document.getElementById("label1").innerHTML = "You have B1";
        } else if (marks >= 60) {
            document.getElementById("label1").innerHTML = "You have B2";
        } else if (marks >= 50) {
            document.getElementById("label1").innerHTML = "You have C1";
        } else if (marks >= 40) {
            document.getElementById("label1").innerHTML = "You have C2";
        } else {
            document.getElementById("label1").innerHTML = "Sorry, you have failed";
        }
    }
}