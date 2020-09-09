$("document").ready(function (){
    $("#inscriptionform").on("submit", onSubmitInscriptionForm);
    $("#inscriptionbutton").on("click", onClickInscriptionButton);
    $("#dropdownformheader").on("submit", onSubmitConnexion)
    $("#deconnexionbt").on("click", onClickDeconnexion);
    $("#passwordinscription").on("keyup", onChangeResetBorder);
    $("#confirmPassword").on("keyup", onChangeResetBorder);
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
    if ($("#passwordinscription").val() != $("#confirmPassword").val()){
        document.getElementById("confirmPassword").setCustomValidity("Les mot de passes ne sont pas identique !");
        $("#confirmPassword").css("border","solid red");
        $("#passwordinscription").css("border", "solid red");
        return;
    }
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

function onChangeResetBorder(){
    $("#confirmPassword").css("border","");
    $("#passwordinscription").css("border", "");
}
