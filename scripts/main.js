$(document).ready(function () {

    $('.com').hide();
    $('.spec').hide();

    $('#menuButton').on('click', function () {
        $('#menu').slideToggle(1000);
    });

    $('#resButton').on('click', function () {
        $('.res').show(1000);
        $('.com').hide(1000);
        $('.spec').hide(1000);
    });

    $('#comButton').on('click', function () {
        $('.com').show(1000);
        $('.res').hide(1000);
        $('.spec').hide(1000);
    });

    $('#specButton').on('click', function () {
        $('.spec').show(1000);
        $('.res').hide(1000);
        $('.com').hide(1000);
    });


});