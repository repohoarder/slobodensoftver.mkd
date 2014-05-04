$(document).ready(function() {

    $("#kirilica").keyup(function() {
        var punnycode = punycode.toASCII($("#kirilica").val());
        $("#punnycode").val(punnycode);
    });

});

