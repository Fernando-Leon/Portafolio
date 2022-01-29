
 var text = document.getElementById("maquina-writing");
 var str = text.innerHTML;

 text.innerHTML = "";

 var speed = 150;
 var i = 0;


//function to efect tipier

 function typeWrite(){
    if(i < str.length){
        text.innerHTML += str.charAt(i);
        i++;
        setTimeout(typeWrite, speed);
    }
 }

 setTimeout(typeWrite, speed);
