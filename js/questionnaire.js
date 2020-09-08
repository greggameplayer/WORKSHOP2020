$("document").ready(function(){
    $(".group").on("change", postafficher);
});

$nbcat = 0;
function postafficher(event){
    if($("#"+this.id).prop('checked')){
        switch (this.id) {
            case 'telephone':
                $("#posttelephone").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="group" type="checkbox" id="telephoneNeDemarrePas" name="choix[]" value="telephoneNeDemarrePas">\
                            <label class="label" for="telephoneNeDemarrePas">\
                                <div class="indicator"></div>\
                                <span class="text">Ne démarre pas</span>\
                            </label>\
                            <div class="sous-cat" id="posttelephonenedemarrepas">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="group" type="checkbox" id="telephoneAVuSesPerformancesDiminuer">\
                            <label class="label" for="telephoneAVuSesPerformancesDiminuer">\
                            <div class="indicator"></div>\
                            <span class="text">A vu ses preformances diminuer</span>\
                            </label>\
                            <div class="sous-cat" id="posttelephoneavusesperformancesdiminuer">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="group" type="checkbox" id="telephoneNAfficheRien">\
                            <label class="label" for="telephoneNAfficheRien">\
                            <div class="indicator"></div>\
                            <span class="text">N\'affiche rien</span>\
                            </label>\
                            <div class="sous-cat" id="posttelephonenafficherien">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="group" type="checkbox" id="telephoneNeChargePas" name="choix[]" value="telephoneNeChargePas">\
                            <label class="label" for="telephoneNeChargePas">\
                            <div class="indicator"></div>\
                            <span class="text">Ne charge pas (Testé avec un autre chargeur)</span>\
                            </label>\
                            <div class="sous-cat" id="posttelephonenechargepas">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="group" type="checkbox" id="telephoneNemetPlusDeSons" name="choix[]" value="telephoneNemetPlusDeSons">\
                            <label class="label" for="telephoneNemetPlusDeSons">\
                            <div class="indicator"></div>\
                            <span class="text">N\'émet plus de sons</span>\
                            </label>\
                            <div class="sous-cat" id="telephonenementplusdesons">\
                            \
                            </div>\
                        </div>\
                    </div>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'ordinateurFixe':
                $("#postordinateurfixe").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurFixeNeDemarrePas" name="choix[]" value="ordinateurFixeNeDemarrePas">\
                            <label class="label" for="ordinateurFixeNeDemarrePas">\
                            <div class="indicator"></div>\
                            <span class="text">Ne démarre pas</span>\
                            </label>\
                            <div class="sous-cat" id="postordinateurficenedemarrepas">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurFixeNAfficheRien" name="choix[]" value="ordinateurFixeNAfficheRien">\
                            <label class="label" for="ordinateurFixeNAfficheRien">\
                            <div class="indicator"></div>\
                            <span class="text">N\'affiche rien(Testé sur un autre écran)</span>\
                            </label>\
                            <div class="sous-cat" id="postordinateurfixenafficherien">\
                            \
                            </div>\
                        </div>\
                    </div>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'tablette':
                $("#posttablette").append('\
                <div class="radiogroup">\
                    <hr>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="tabletteNeDemarrePas"  name="choix[]" value="tabletteNeDemarrePas">\
                            <label class="label" for="tabletteNeDemarrePas">\
                            <div class="indicator"></div>\
                            <span class="text">Ne démarre pas</span>\
                            </label>\
                            <div class="sous-cat" id="posttablettenedemarre">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="group" type="checkbox" id="tabletteAVuSesPerformancesDiminuer">\
                            <label class="label" for="tabletteAVuSesPerformancesDiminuer">\
                            <div class="indicator"></div>\
                            <span class="text">A vu ses preformances diminuer</span>\
                            </label>\
                            <div class="sous-cat" id="posttabletteavusesperformancediminuer">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="group" type="checkbox" id="tabletteNAfficheRien">\
                            <label class="label" for="tabletteNAfficheRien">\
                            <div class="indicator"></div>\
                            <span class="text">N\'affiche rien</span>\
                            </label>\
                            <div class="sous-cat" id="posttablettenafficherien">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="tabletteNeChargePas" name="choix[]" value="tabletteNeChargePas">\
                            <label class="label" for="tabletteNeChargePas">\
                            <div class="indicator"></div>\
                            <span class="text">Ne charge pas (Testé avec un autre chargeur)</span>\
                            </label>\
                            <div class="sous-cat" id="posttablettenechagepas">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="tabletteNemetPlusDeSons" name="choix[]" value="tabletteNemetPlusDeSons">\
                            <label class="label" for="tabletteNemetPlusDeSons">\
                            <div class="indicator"></div>\
                            <span class="text">N\'émet plus de sons</span>\
                            </label>\
                            <div class="sous-cat" id="posttablettenemetplusdesons">\
                            \
                            </div>\
                        </div>\
                    </div>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'ordinateurPortable':
                $("#postordinateurportable").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurPortableNeDemarrePas" name="choix[]" value="ordinateurPortableNeDemarrePas">\
                            <label class="label" for="ordinateurPortableNeDemarrePas">\
                            <div class="indicator"></div>\
                            <span class="text">Ne démarre pas</span>\
                            </label>\
                            <div class="sous-cat" id="postordinateurportablenedemarrepas">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="group" type="checkbox" id="ordinateurPortableAVuSesPerformancesDiminuer">\
                            <label class="label" for="ordinateurPortableAVuSesPerformancesDiminuer">\
                            <div class="indicator"></div>\
                            <span class="text">A vu ses preformances diminuer</span>\
                            </label>\
                            <div class="sous-cat" id="postordinateurportableavusesperformancesdiminuer">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurPortableNAfficheRien" name="choix[]" value="ordinateurPortableNafficheRien">\
                            <label class="label" for="ordinateurPortableNAfficheRien">\
                            <div class="indicator"></div>\
                            <span class="text">N\'affiche rien</span>\
                            </label>\
                            <div class="sous-cat" id="postordinateurportablenafficherien">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurPortableNeChargePas" name="choix[]" value="ordinateurPortableNeChargePas">\
                            <label class="label" for="ordinateurPortableNeChargePas">\
                            <div class="indicator"></div>\
                            <span class="text">Ne charge pas (Testé avec un autre chargeur)</span>\
                            </label>\
                            <div class="sous-cat" id="postordinateurportablenechargepas">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurPortableNemetPlusDeSons" name="choix[]" value="ordinateurPortableNemetPlusDeSons">\
                            <label class="label" for="ordinateurPortableNemetPlusDeSons">\
                            <div class="indicator"></div>\
                            <span class="text">N\'émet plus de sons</span>\
                            </label>\
                            <div class="sous-cat" id="postordinateurportablenemetplusdesons">\
                            \
                            </div>\
                        </div>\
                    </div>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'imprimante':
                $("#postimprimante").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="imprimanteMauvaisesCouleurs" name="choix[]" value="imprimanteMauvaisesCouleurs">\
                            <label class="label" for="imprimanteMauvaisesCouleurs">\
                            <div class="indicator"></div>\
                            <span class="text">Mauvaise couleurs</span>\
                            </label>\
                            <div class="sous-cat" id="postimprimantemauvaiscouleurs">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="imprimanteNAcceptePlusLesCartouchesDEncre" name="choix[]" value="imprimanteNAcceptePlusLesCartouchesDEncre">\
                            <label class="label" for="imprimanteNAcceptePlusLesCartouchesDEncre">\
                            <div class="indicator"></div>\
                            <span class="text">N\'accepte plus les cartouches d\'encre</span>\
                            </label>\
                            <div class="sous-cat" id="postimprimantenacceptepluslescartouchesdencre">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="imprimanteEstBourre" name="choix[]" value="imprimanteEstBourre">\
                            <label class="label" for="imprimanteEstBourre">\
                            <div class="indicator"></div>\
                            <span class="text">Est bourré</span>\
                            </label>\
                            <div class="sous-cat" id="postimprimanteestbourre">\
                            \
                            </div>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="imprimanteNeFonctionnePLus" name="choix[]" value="imprimanteNeFonctionnePLus">\
                            <label class="label" for="imprimanteNeFonctionnePLus">\
                            <div class="indicator"></div>\
                            <span class="text">Ne fonctionne plus</span>\
                            </label>\
                            <div class="sous-cat" id="postimprimantenefonctionneplus">\
                            \
                            </div>\
                        </div>\
                    </div>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'telephoneAVuSesPerformancesDiminuer':
                $("#posttelephoneavusesperformancesdiminuer").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="telephoneAVuSesPerformancesDiminuerEstInfecte" name="choix[]" value="telephoneAVuSesPerformancesDiminuerEstInfecte">\
                            <label class="label" for="telephoneAVuSesPerformancesDiminuerEstInfecte">\
                            <div class="indicator"></div>\
                            <span class="text">Est infecté</span>\
                            </label>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="telephoneAVuSesPerformancesDiminuerAutre" name="choix[]" value="telephoneAVuSesPerformancesDiminuerAutre">\
                            <label class="label" for="telephoneAVuSesPerformancesDiminuerAutre">\
                            <div class="indicator"></div>\
                            <span class="text">Autre</span>\
                            </label>\
                        </div>\
                    </div>\
                    <hr>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'telephoneNAfficheRien':
                $("#posttelephonenafficherien").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="telephoneNAfficheRienLEcranEstCasse" name="choix[]" value="telephoneNAfficheRienLEcranEstCasse">\
                            <label class="label" for="telephoneNAfficheRienLEcranEstCasse">\
                            <div class="indicator"></div>\
                            <span class="text">L\'écran est cassé</span>\
                            </label>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="telephoneNAfficheRienAutre" name="choix[]" value="telephoneNAfficheRienAutre">\
                            <label class="label" for="telephoneNAfficheRienAutre">\
                            <div class="indicator"></div>\
                            <span class="text">Autre</span>\
                            </label>\
                        </div>\
                    </div>\
                    <hr>');
                    $(".group").off("change").on("change", postafficher);
              break;
            case 'ordinateurFixeAVuSesPerformancesDiminuer':
                $("#postordinateurfixeavusesperformancesdiminuer").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurFixeAVuSesPerformancesDiminuerEstInfecte" name="choix[]" value="ordinateurFixeAVuSesPerformancesDiminuerEstInfecte">\
                            <label class="label" for="ordinateurFixeAVuSesPerformancesDiminuerEstInfecte">\
                            <div class="indicator"></div>\
                            <span class="text">Est infecté</span>\
                            </label>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurFixeAVuSesPerformancesDiminuerAutre" name="choix[]" value="ordinateurFixeAVuSesPerformancesDiminuerAutre">\
                            <label class="label" for="ordinateurFixeAVuSesPerformancesDiminuerAutre">\
                            <div class="indicator"></div>\
                            <span class="text">Autre</span>\
                            </label>\
                        </div>\
                    </div>\
                    <hr>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'tabletteAVuSesPerformancesDiminuer':
                $("#posttabletteavusesperformancediminuer").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="tabletteAVuSesPerformancesDiminuerEstInfecte" name="choix[]" value="tabletteAVuSesPerformancesDiminuerEstInfecte">\
                            <label class="label" for="tabletteAVuSesPerformancesDiminuerEstInfecte">\
                            <div class="indicator"></div>\
                            <span class="text">Est infecté</span>\
                            </label>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="tabletteAVuSesPerformancesDiminuerAutre" name="choix[]" value="tabletteAVuSesPerformancesDiminuerAutre">\
                            <label class="label" for="tabletteAVuSesPerformancesDiminuerAutre">\
                            <div class="indicator"></div>\
                            <span class="text">Autre</span>\
                            </label>\
                        </div>\
                    </div>\
                    <hr>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'tabletteNAfficheRien':
                $("#posttablettenafficherien").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="tabletteNAfficheRienLEcranEstCasse" name="choix[]" value="tabletteNAfficheRienLEcranEstCasse">\
                            <label class="label" for="tabletteNAfficheRienLEcranEstCasse">\
                            <div class="indicator"></div>\
                            <span class="text">L\'écran est cassé</span>\
                            </label>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="tabletteNAfficheRienAutre" name="choix[]" value="tabletteNAfficheRienAutre">\
                            <label class="label" for="tabletteNAfficheRienAutre">\
                            <div class="indicator"></div>\
                            <span class="text">Autre</span>\
                            </label>\
                        </div>\
                    </div>\
                    <hr>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'ordinateurPortableAVuSesPerformancesDiminuer':
                $("#postordinateurportableavusesperformancesdiminuer").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurPortableAVuSesPerformancesDiminuerEstInfecte" name="choix[]" value="ordinateurPortableAVuSesPerformancesDiminuerEstInfecte">\
                            <label class="label" for="ordinateurPortableAVuSesPerformancesDiminuerEstInfecte">\
                            <div class="indicator"></div>\
                            <span class="text">Est infecté</span>\
                            </label>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurPortableAVuSesPerformancesDiminuerAutre" name="choix[]" value="ordinateurPortableAVuSesPerformancesDiminuerAutre">\
                            <label class="label" for="ordinateurPortableAVuSesPerformancesDiminuerAutre">\
                            <div class="indicator"></div>\
                            <span class="text">Autre</span>\
                            </label>\
                        </div>\
                    </div>\
                    <hr>');
                    $(".group").off("change").on("change", postafficher);
                break;
            case 'ordinateurPortableNAfficheRien':
                $("#postordinateurportablenafficherien").append('\
                    <hr>\
                    <div class="radiogroup">\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurPortableNAfficheRienLEcranEstCasse" name="choix[]" value="ordinateurPortableNAfficheRienLEcranEstCasse">\
                            <label class="label" for="ordinateurPortableNAfficheRienLEcranEstCasse">\
                            <div class="indicator"></div>\
                            <span class="text">L\'écran est cassé</span>\
                            </label>\
                        </div>\
                        <div class="wrapper">\
                            <input class="" type="checkbox" id="ordinateurPortableNAfficheRienAutre" name="choix[]" value="ordinateurPortableNAfficheRienAutre">\
                            <label class="label" for="ordinateurPortableNAfficheRienAutre">\
                            <div class="indicator"></div>\
                            <span class="text">Autre</span>\
                            </label>\
                        </div>\
                    </div>\
                    <hr>');
                    $(".group").off("change").on("change", postafficher);
                break;
        }
    }
    else{
        posteffacer(event);
    }
}

function posteffacer(event)
{
    $("#"+event.currentTarget.parentNode.children[2].id).html("");
}




function afficher()
{
    switch (this.id) {
        case 'telephone':
            effacertout();
            $("#afficheur1").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="telephoneNeDemarrePas" value="telephoneNeDemarrePas">\
                        <label class="label" for="telephoneNeDemarrePas">\
                        <div class="indicator"></div>\
                        <span class="text">Ne démarre pas</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="telephoneAVuSesPerformancesDiminuer">\
                        <label class="label" for="telephoneAVuSesPerformancesDiminuer">\
                        <div class="indicator"></div>\
                        <span class="text">A vu ses preformances diminuer</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="telephoneNAfficheRien">\
                        <label class="label" for="telephoneNAfficheRien">\
                        <div class="indicator"></div>\
                        <span class="text">N\'affiche rien</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="telephoneNeChargePas" value="telephoneNeChargePas">\
                        <label class="label" for="telephoneNeChargePas">\
                        <div class="indicator"></div>\
                        <span class="text">Ne charge pas (Testé avec un autre chargeur)</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="telephoneNemetPlusDeSons" value="telephoneNemetPlusDeSons">\
                        <label class="label" for="telephoneNemetPlusDeSons">\
                        <div class="indicator"></div>\
                        <span class="text">N\'émet plus de sons</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'ordinateurFixe':
            effacertout();
            $("#afficheur1").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="ordinateurFixeNeDemarrePas" value="ordinateurFixeNeDemarrePas">\
                        <label class="label" for="ordinateurFixeNeDemarrePas">\
                        <div class="indicator"></div>\
                        <span class="text">Ne démarre pas\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="ordinateurFixeNAfficheRien" value="ordinateurFixeNAfficheRien">\
                        <label class="label" for="ordinateurFixeNAfficheRien">\
                        <div class="indicator"></div>\
                        <span class="text">N\'affiche rien(Testé sur un autre écran)\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'tablette':
            effacertout();
            $("#afficheur1").html('\
            <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="tabletteNeDemarrePas" value="tabletteNeDemarre">\
                        <label class="label" for="tabletteNeDemarrePas">\
                        <div class="indicator"></div>\
                        <span class="text">Ne démarre pas</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="tabletteAVuSesPerformancesDiminuer">\
                        <label class="label" for="tabletteAVuSesPerformancesDiminuer">\
                        <div class="indicator"></div>\
                        <span class="text">A vu ses preformances diminuer</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="tabletteNAfficheRien" value="tabletteNAfficheRien">\
                        <label class="label" for="tabletteNAfficheRien">\
                        <div class="indicator"></div>\
                        <span class="text">N\'affiche rien</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="tabletteNeChargePas" value="tabletteNeChargePas">\
                        <label class="label" for="tabletteNeChargePas">\
                        <div class="indicator"></div>\
                        <span class="text">Ne charge pas (Testé avec un autre chargeur)</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="tabletteNemetPlusDeSons" value="tabletteNemetPlusDeSons">\
                        <label class="label" for="tabletteNemetPlusDeSons">\
                        <div class="indicator"></div>\
                        <span class="text">N\'émet plus de sons</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'ordinateurPortable':
            effacertout();
            $("#afficheur1").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="ordinateurPortableNeDemarrePas" value="ordinateurPortableNeDemarrePas">\
                        <label class="label" for="ordinateurPortableNeDemarrePas">\
                        <div class="indicator"></div>\
                        <span class="text">Ne démarre pas</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="ordinateurPortableAVuSesPerformancesDiminuer">\
                        <label class="label" for="ordinateurPortableAVuSesPerformancesDiminuer">\
                        <div class="indicator"></div>\
                        <span class="text">A vu ses preformances diminuer</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="ordinateurPortableNAfficheRien" value="ordinateurPortableNafficheRien">\
                        <label class="label" for="ordinateurPortableNAfficheRien">\
                        <div class="indicator"></div>\
                        <span class="text">N\'affiche rien</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="ordinateurPortableNeChargePas" value="ordinateurPortableNeChargePas">\
                        <label class="label" for="ordinateurPortableNeChargePas">\
                        <div class="indicator"></div>\
                        <span class="text">Ne charge pas (Testé avec un autre chargeur)</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="ordinateurPortableNemetPlusDeSons" value="ordinateurPortableNemetPlusDeSons">\
                        <label class="label" for="ordinateurPortableNemetPlusDeSons">\
                        <div class="indicator"></div>\
                        <span class="text">N\'émet plus de sons</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'imprimante':
            effacertout();
            $("#afficheur1").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="imprimanteMauvaisesCouleurs" value="imprimanteMauvaisesCouleurs">\
                        <label class="label" for="imprimanteMauvaisesCouleurs">\
                        <div class="indicator"></div>\
                        <span class="text">Mauvaise couleurs</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="imprimanteNAcceptePlusLesCartouchesDEncre" value="imprimanteNAcceptePlusLesCartouchesDEncre">\
                        <label class="label" for="imprimanteNAcceptePlusLesCartouchesDEncre">\
                        <div class="indicator"></div>\
                        <span class="text">N\'accepte plus les cartouches d\'encre</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="imprimanteEstBourre" value="imprimanteEstBourre">\
                        <label class="label" for="imprimanteEstBourre">\
                        <div class="indicator"></div>\
                        <span class="text">Est bourré</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre2" id="imprimanteNeFonctionnePLus" value="imprimanteNeFonctionnePLus">\
                        <label class="label" for="imprimanteNeFonctionnePLus">\
                        <div class="indicator"></div>\
                        <span class="text">Ne fonctionne plus</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'telephoneAVuSesPerformancesDiminuer':
            effacer();
            $("#afficheur2").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="telephoneAVuSesPerformancesDiminuerEstInfecte" value="telephoneAVuSesPerformancesDiminuerEstInfecte">\
                        <label class="label" for="telephoneAVuSesPerformancesDiminuerEstInfecte">\
                        <div class="indicator"></div>\
                        <span class="text">Est infecté</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="telephoneAVuSesPerformancesDiminuerAutre" value="telephoneAVuSesPerformancesDiminuerAutre">\
                        <label class="label" for="telephoneAVuSesPerformancesDiminuerAutre">\
                        <div class="indicator"></div>\
                        <span class="text">Autre</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'telephoneNAfficheRien':
            effacer();
            $("#afficheur2").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="telephoneNAfficheRienLEcranEstCasse" value="telephoneNAfficheRienLEcranEstCasse">\
                        <label class="label" for="telephoneNAfficheRienLEcranEstCasse">\
                        <div class="indicator"></div>\
                        <span class="text">L\'écran est cassé</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="telephoneNAfficheRienAutre" value="telephoneNAfficheRienAutre">\
                        <label class="label" for="telephoneNAfficheRienAutre">\
                        <div class="indicator"></div>\
                        <span class="text">Autre</span>\
                        </label>\
                    </div>\
                </div>');
          break;
        case 'ordinateurFixeAVuSesPerformancesDiminuer':
            effacer();
            $("#afficheur2").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="ordinateurFixeAVuSesPerformancesDiminuerEstInfecte" value="ordinateurFixeAVuSesPerformancesDiminuerEstInfecte">\
                        <label class="label" for="ordinateurFixeAVuSesPerformancesDiminuerEstInfecte">\
                        <div class="indicator"></div>\
                        <span class="text">Est infecté</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="ordinateurFixeAVuSesPerformancesDiminuerAutre" value="ordinateurFixeAVuSesPerformancesDiminuerAutre">\
                        <label class="label" for="ordinateurFixeAVuSesPerformancesDiminuerAutre">\
                        <div class="indicator"></div>\
                        <span class="text">Autre</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'tabletteAVuSesPerformancesDiminuer':
            effacer();
            $("#afficheur2").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="tabletteAVuSesPerformancesDiminuerEstInfecte" value="tabletteAVuSesPerformancesDiminuerEstInfecte">\
                        <label class="label" for="tabletteAVuSesPerformancesDiminuerEstInfecte">\
                        <div class="indicator"></div>\
                        <span class="text">Est infecté</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="tabletteAVuSesPerformancesDiminuerAutre" value="tabletteAVuSesPerformancesDiminuerAutre">\
                        <label class="label" for="tabletteAVuSesPerformancesDiminuerAutre">\
                        <div class="indicator"></div>\
                        <span class="text">Autre</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'tabletteNAfficheRien':
            effacer();
            $("#afficheur2").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="tabletteNAfficheRienLEcranEstCasse" value="tabletteNAfficheRienLEcranEstCasse">\
                        <label class="label" for="tabletteNAfficheRienLEcranEstCasse">\
                        <div class="indicator"></div>\
                        <span class="text">L\'écran est cassé</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="tabletteNAfficheRienAutre" value="tabletteNAfficheRienAutre">\
                        <label class="label" for="tabletteNAfficheRienAutre">\
                        <div class="indicator"></div>\
                        <span class="text">Autre</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'ordinateurPortableAVuSesPerformancesDiminuer':
            effacer();
            $("#afficheur2").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="ordinateurPortableAVuSesPerformancesDiminuerEstInfecte" value="ordinateurPortableAVuSesPerformancesDiminuerEstInfecte">\
                        <label class="label" for="ordinateurPortableAVuSesPerformancesDiminuerEstInfecte">\
                        <div class="indicator"></div>\
                        <span class="text">Est infecté</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="ordinateurPortableAVuSesPerformancesDiminuerAutre" value="ordinateurPortableAVuSesPerformancesDiminuerAutre">\
                        <label class="label" for="ordinateurPortableAVuSesPerformancesDiminuerAutre">\
                        <div class="indicator"></div>\
                        <span class="text">Autre</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'ordinateurPortableNAfficheRien':
            effacer();
            $("#afficheur2").html('\
                <div class="radiogroup">\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="ordinateurPortableNAfficheRienLEcranEstCasse" value="ordinateurPortableNAfficheRienLEcranEstCasse">\
                        <label class="label" for="ordinateurPortableNAfficheRienLEcranEstCasse">\
                        <div class="indicator"></div>\
                        <span class="text">L\'écran est cassé</span>\
                        </label>\
                    </div>\
                    <div class="wrapper">\
                        <input class="state" type="radio" name="gendre3" id="ordinateurPortableNAfficheRienAutre" value="ordinateurPortableNAfficheRienAutre">\
                        <label class="label" for="ordinateurPortableNAfficheRienAutre">\
                        <div class="indicator"></div>\
                        <span class="text">Autre</span>\
                        </label>\
                    </div>\
                </div>');
            break;
        case 'telephoneNeDemarrePas':
        case 'telephoneNeChargePas':
        case 'telephoneNemetPlusDeSons':
        case 'ordinateurFixeNeDemarrePas':
        case 'ordinateurFixeNAfficheRien':
        case 'tabletteNeDemarrePas':
        case 'tabletteNemetPlusDeSons':
        case 'tabletteNeChargePas':
        case 'ordinateurPortableNeDemarrePas':
        case 'ordinateurPortableNeChargePas':
        case 'ordinateurPortableNemetPlusDeSons':
        case 'imprimanteMauvaiseCouleurs':
        case 'imprimanteNAcceptePlusLesCartouchesDEncre':
        case 'imprimanteEstBourre':
        case 'imprimanteNeFonctionnePLus':
            effacer();
        default:
            $("#afficheur3").html('\
            <br>\
            <input type="submit" class="btn btn-primary btn-lg btn-block" value="Valider">');
            break;
    }
    $(".state").off("change");
    $(".state").on("change", afficher);
}
function effacertout()
{
    $("#afficheur1, #afficheur2, #afficheur3").html("");
}

function effacer()
{
    $("#afficheur2, #afficheur3").html("");
}
