var spa = 250;
var spt = 150;

function dataId(id, speeded){
    var text = document.getElementById(id);
    var str = text.innerHTML;
    text.innerHTML = "";
    var speed = speeded;
    var i = 0;
   
    function typeWrite(){
        if(i < str.length){
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(typeWrite, speed);
        }
    }
    setTimeout(typeWrite, speed);
}

dataId("maquina-writing", spt);
dataId("main-id", spa);
dataId("skill-id", spa);
dataId("proyec-id", spa);
dataId("cert-id", spa);
dataId("contact-id", spa);


