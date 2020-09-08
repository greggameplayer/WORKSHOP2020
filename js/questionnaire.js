$("document").ready(function(){
    $(".firstChose").on("change",following);
});

function following(){
    if ($("#"+this.id).prop('checked')){
        $("#main--"+this.id).append('\
        <div id="wrapper--'+this.id+'">\
            <label for="secondChose_'+this.id+'">Entrez le nombre de '+this.id+'(s) que vous possédez:</label>\
            <input type="number" class="secondChose" id="secondChose_'+this.id+'" step="1"  min="1" max="100" required>\
            <br>\
            <input type="button" id="valider'+this.id+'" value="Valider">\
        </div>\
        ');
        $("#valider"+this.id).on("click",followfollowing);
    }else{
        $("#wrapper--"+this.id).html('\
        ');
    $(".firstChose").off("change").on("change", following);
    };
};

function followfollowing(){
    numberofdevice=0;
    $("#wrapper--"+this.id).html('\
        ');
    while ($("#secondChose_"+this.id).val()>numberofdevice){
        numberofdevice +=1;
        $("#wrapper--"+this.id).append('\
        <div class="underwrapper--'+this.id+'_'+numberofdevice+'">\
            <span>"----------'+this.id+' n°'+numberofdevice+'----------"</span>\
            <label for="thirdChose_'+this.id+numberofdevice+'_puissance">Entrez la puissance de votre '+this.id+' n°'+numberofdevice+' :</label>\
            <input type="number" class="thirdChose" id="thirdChose_'+this.id+'_'+numberofdevice+'_puissance" step="1"  min="1" max="10000" required>\
            <label for="thirdChose_'+this.id+numberofdevice+'_temps">Entrez le temps de fonctionnement de votre '+this.id+' n°'+numberofdevice+' pour semaine :</label>\
            <input type="number" class="thirdChose" id="thirdChose_'+this.id+'_'+numberofdevice+'_temps" step="1"  min="1" max="168" required>\
        </div>\
        ');
    };
};