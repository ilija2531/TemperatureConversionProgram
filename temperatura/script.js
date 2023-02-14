document.getElementById("pre").onclick = function(){

    let temp;

    if(document.getElementById("cel").checked){
        temp = document.getElementById("vrednost").value;
        temp = Number(temp);
        temp = voCelzius(temp);
        document.getElementById("pretvori").innerHTML = temp + "°C";
    }
    else if(document.getElementById("far").checked){
        temp = document.getElementById("vrednost").value;
        temp = Number(temp);
        temp = voFarenhajt(temp);
        document.getElementById("pretvori").innerHTML = temp + "°F";
    }
    else{
        document.getElementById("pretvori").innerHTML = "Nemate odbrano temperaturna edinica";

    }
    

}



function voCelzius(temp){
    return (temp - 32) * (5/9);
}

function voFarenhajt(temp){
    return temp * 9/5 + 32;
}