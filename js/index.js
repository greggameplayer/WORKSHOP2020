$("document").ready(function (){
    $("#inscriptionform").on("submit", onSubmitInscriptionForm);
    $("#inscriptionbutton").on("click", onClickInscriptionButton);
    $("#dropdownformheader").on("submit", onSubmitConnexion)
    $("#deconnexionbt").on("click", onClickDeconnexion);
});

function onSubmitConnexion(event){
    event.preventDefault();

    $.post("./index.php", {
        page: "connexion",
        Email: $("#emaillogin").val(),
        Password: $("#passwordlogin").val()
    }, function (results) {
        $("body").html(results);
        $("#deconnexionbt").on("click", onClickDeconnexion);
    });
}

function onClickDeconnexion(_event){
    $.post("./index.php", {page: "deconnexion"}, function (results){
        $("body").html(results);
        window.location.reload();
    });
}

function onClickInscriptionButton(_event){
    $.post("./index.php", {page: "inscription"}, function (results){
        $("body").html(results);
    });
}

function onSubmitInscriptionForm(event){
    event.preventDefault();
    $.post("./index.php", {page: "inscription.model", Email: $("#usernameinscription").val(), Password: $("#passwordinscription").val()}, function(results){
        $("#submitinscription").prop("disabled", true);
        $.post("./index.php", {
            page: "connexion",
            Email: $("#usernameinscription").val(),
            Password: $("#passwordinscription").val()
        }, function (results) {
            $("body").html(results);
            $("#deconnexionbt").on("click", onClickDeconnexion);
            window.location.replace("./?page=questionnaire");
        });
    });
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
