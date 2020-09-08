$("document").ready(function (){
    $("#inscriptionform").on("submit", onSubmitInscriptionForm);
    $("#inscriptionbutton").on("click", onClickInscriptionButton);
    $("#dropdownformheader").on("submit", onSubmitConnexion);
});

function onSubmitConnexion(event){
    event.preventDefault();

    $.post("./index.php", {
        page: "connexion",
        Email: $("#emaillogin").val(),
        Password: $("#passwordlogin").val()
    }, function (results) {
        $("body").html(results);
        document.title = "Accueil / ElectroRepair";
    });
}

function onClickInscriptionButton(_event){
    $.post("./index.php", {page: "inscription"}, function (results){
        $("body").html(results);
        document.title = "Inscription / ElectroRepair";
    });
}

function onSubmitInscriptionForm(event){
    event.preventDefault();
    $.post("./index.php", {page: "inscription.model", Email: $("#usernameinscription").val(), Password: $("#passwordinscription").val()}, function(results){
        $("#submitinscription").prop("disabled", true);
    });
}
