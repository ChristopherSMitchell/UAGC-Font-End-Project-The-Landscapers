$(document).ready(function () {

    $('#menuButton').on('click', function () {
        $('#menu').slideToggle(1000);
        $('#menu').css({
            "background-color": "red",
            "border": "2px solid black"
        });
    });

    // Residential
    var rModal = document.getElementById('resModal');

    // Get the button that opens the modal
    var rBtn = document.getElementById("resButton");

    // Get the <span> element that closes the modal
    var rSpan = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal 
    rBtn.onclick = function () {
        rModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    rSpan.onclick = function () {
        rModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == rModal) {
            rModal.style.display = "none";
        }
    }

    // Commercial
    var cModal = document.getElementById('comModal');

    // Get the button that opens the modal
    var cBtn = document.getElementById("comButton");

    // Get the <span> element that closes the modal
    var cSpan = document.getElementsByClassName("close")[1];

    // When the user clicks on the button, open the modal 
    cBtn.onclick = function () {
        cModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    cSpan.onclick = function () {
        cModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == cModal) {
            cModal.style.display = "none";
        }
    }

    // Specialty
    var sModal = document.getElementById('specModal');

    // Get the button that opens the modal
    var sBtn = document.getElementById("specButton");

    // Get the <span> element that closes the modal
    var sSpan = document.getElementsByClassName("close")[2];

    // When the user clicks on the button, open the modal 
    sBtn.onclick = function () {
        sModal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    sModalSpan.onclick = function () {
        sModal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == sModal) {
            sModal.style.display = "none";
        }
    }


});