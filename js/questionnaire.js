nameOfAllDevices=[];
KhwOfAllDevices=[];
endInfo=[];
testeButtom=0;
varchecked=0;

$("document").ready(function(){
    $(".firstChose").on("change",following);
});

function following(){
    if ($("#"+this.id).prop('checked')){
        $("#main--"+this.id).append('\
        <div id="wrapper--'+this.id+'">\
            <label for="secondChose_'+this.id+'">Entrez le nombre de '+this.id+'(s) que vous possédez:</label>\
            <input type="number" class="secondChose" id="secondChose_'+this.id+'" step="1"  min="1" max="20" required>\
            <br>\
            <input type="button" id="valider'+this.id+'" value="Valider">\
        </div>\
        ');
        varchecked+=1;
        $("#valider"+this.id).on("click",followfollowing);
    }else{
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
    ocurences=$("#secondChose_"+nameOfDevice).val();
    $("#wrapper--"+nameOfDevice).html('\
        ');
    while (ocurences>numberofdevice){
        numberofdevice +=1;
        $("#wrapper--"+nameOfDevice).append('\
        <div class="underwrapper--'+nameOfDevice+'_'+numberofdevice+'">\
            <label for="thirdChose_'+nameOfDevice+numberofdevice+'_puissance"> La puissance de mon '+nameOfDevice+' n°'+numberofdevice+' est de </label>\
            <input type="number" class="thirdChose" id="thirdChose_'+nameOfDevice+'_'+numberofdevice+'_puissance" step="1"  min="1" max="10000" required>\
            <label for="thirdChose_'+nameOfDevice+numberofdevice+'_puissance"> Watts.</label>\
            <label for="thirdChose_'+nameOfDevice+numberofdevice+'_temps"> Il fonctionne environs </label>\
            <input type="number" class="thirdChose" id="thirdChose_'+nameOfDevice+'_'+numberofdevice+'_temps" step="1"  min="1" max="168" required>\
            <label for="thirdChose_'+nameOfDevice+numberofdevice+'_temps"> heure/semaine.</label>\
        </div>\
        ');
        nameOfAllDevices.push(nameOfDevice);
    };
    if (testeButtom!=1){
        $(".main").append('\
        <input type="button" id="end" value="Confirmer">\
            ');
        $("#end").on("click",ending);
        testeButtom=1;
    };
}

function ending(){
    $(".thirdChose").each(function (){
        if ($('['+this.id+'$=temps')){
            var medianeTime=$(this).val();
        }else{
            var medianePower=$(this).val();
        };
        KhwOfAllDevices.push(medianeTime*medianePower/1000);
    });
    endInfo+=nameOfAllDevices+KhwOfAllDevices;
    alert(endInfo);
}