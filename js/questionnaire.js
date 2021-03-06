var endInfo={
    congelateur: [],
    refrigerateur:[],
    "seche-linge":[],
    "Lave-vaisselle":[],
    "Lave-linge":[],
    "Television LCD":[],
    Aspirateur:[],
    Ordinateur:[],
    "Four micro-ondes":[],
    "Four classique":[],
    Ampoules:[]
};
var nameOfAllDevices = []
var testeButtom=0;
var varchecked=0;
var medianePower = 0, medianeTime = 0;

$("document").ready(function(){
    $(".firstChose").on("change",following);
});

function following(){
    if ($("[id='" + this.id + "']").prop('checked')){
        $("[id='main--"+this.id+ "']").append('\
        <div id="wrapper--'+this.id+'" class="wrapperquest">\
            <label for="secondChose_'+this.id+'">Entrez le nombre de '+this.id+'(s) que vous possédez:</label>\
            <input type="number" class="secondChose" id="secondChose_'+this.id+'" step="1"  min="1" max="20" required>\
            <br>\
            <input type="button" id="valider'+this.id+'" value="Valider" class="btn btn-color">\
        </div>\
        ');
        varchecked+=1;
        $("[id='valider"+this.id+"']").on("click",followfollowing);
    }else{
        $("[id='wrapper--"+this.id+"']").remove();
        varchecked-=1;
        let deleteDevice = this.id;
        for(let i = 0 ; i<nameOfAllDevices.length ; i++){
            if (nameOfAllDevices[i]==deleteDevice){
                while(nameOfAllDevices[i+1]===deleteDevice){
                    nameOfAllDevices.splice(i+1,1);
                }
                nameOfAllDevices.splice(i,1);
            }
        }
        if (varchecked<1){
            $("#end").remove();
            testeButtom=0;
        }
    }
}

function followfollowing(){
    numberofdevice=0;
    nameOfDevice=this.parentNode.parentNode.children[0].id;
    ocurences=$("[id='secondChose_"+nameOfDevice+"']").val();
    $("[id='wrapper--"+nameOfDevice+"']").html('\
        ');
    while (ocurences>numberofdevice){
        numberofdevice +=1;
        $("[id='wrapper--"+nameOfDevice+"']").append('\
        <div class="underwrapper--'+nameOfDevice+'_'+numberofdevice+'">\
            <label for="thirdChose_'+nameOfDevice+numberofdevice+'_puissance"> La puissance de mon '+nameOfDevice+' n°'+numberofdevice+' est de </label>\
            <input type="number" class="thirdChose" id="thirdChose_'+nameOfDevice+'_'+numberofdevice+'_puissance" min="1" max="10000" required>\
            <label for="thirdChose_'+nameOfDevice+numberofdevice+'_puissance"> Watts.</label>\
            <label for="thirdChose_'+nameOfDevice+numberofdevice+'_temps"> Il fonctionne environs </label>\
            <input type="number" class="thirdChose" id="thirdChose_'+nameOfDevice+'_'+numberofdevice+'_temps" min="1" max="168" required>\
            <label for="thirdChose_'+nameOfDevice+numberofdevice+'_temps"> heure/semaine.</label>\
        </div>\
        ');
    nameOfAllDevices.push(nameOfDevice);
    };
    if (testeButtom!=1){
        $(".main").append('\
        <input type="button" id="end" value="Confirmer" class="btn btn-color">\
            ');
        $("#end").on("click",ending);
        testeButtom=1;
    };
}

function ending(){
    var testeMedianeTime=0;
    var testeMedianePower=0;
    $(".thirdChose").each(function (){
        if (this.id.includes("temps")){
            medianeTime=this.value;
            testeMedianeTime=1;
        }else{
            medianePower=this.value;
            testeMedianePower=1;
        };
        if(testeMedianePower==1&&testeMedianeTime==1){
            endInfo[this.parentNode.parentNode.parentNode.children[0].id].push(medianeTime*medianePower*52/1365);
            testeMedianeTime=0;
            testeMedianePower=0;
        }
    });
    for (let [key] of Object.entries(endInfo)) {
        var allKwH = getArraySum(endInfo[key]);
        endInfo[key]=allKwH/endInfo[key].length;
    }
    $.post("./index.php", {page: "consumption.model", endInfos: JSON.stringify(endInfo)}, function (results){
        alert(results);
        $.post("./index.php", {}, function (results){
           $("body").html(results);
           window.location.replace('/workshop');
        });
    });
}

function getArraySum(a){
    var total=0;
    for(var i in a) {
        total += a[i];
    }
    return total;
}
