function fnc5(){
    var n=document.getElementById("pas").value;
    let n2 = document.getElementById('pas1').value;
    let passA2=document.getElementById("p5");
    if(n !=n2){
    passA2.innerHTML = 'Пароли не совпадают'
}
    else{
    passA2.innerHTML = 'Пароли правильны'
        
    }
}



function fnc1(){
    let n = document.getElementById('pas').value;
    let n1 = document.getElementById('pas1').value;
    let passA = document.getElementById('p5');
    if(n !=n1){
        passA.innerHTML = 'noo'
    }
    else{
        passA.innerHTML='yess'
    }
}
