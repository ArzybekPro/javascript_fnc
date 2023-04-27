let nam = document.getElementById("name");
nam.addEventListener("blur", fnc1);
function fnc1(){
    let inp1=nam.value;
    if(inp1.length<=3){
        document.getElementById("p1").innerHTML="error"
    }
    else{
        document.getElementById("p1").innerHTML="true"
    }
}


let pas = document.getElementById("pas");
pas.addEventListener('blur', fnc2);
function fnc2(){
    let inp1 = pas.value;
    let pasA=innerHTML=document.getElementById("p2")
    if(inp1.length<=5){
        pasA.innerHTML="error"
    }
    else{
        pasA.innerHTML="true"
    }
}


let pas1 = document.getElementById("pas1");
pas1.addEventListener('blur', fnc3);
function fnc3(){
    let inp1 = pas1.value;
    let pasA=document.getElementById("p3")
    if(inp1.length<=5){
        pasA.innerHTML="error"
    }
    else{
        pasA.innerHTML="true"
    }
}



// function go(){
//     let n = document.getElementById("pas").value;
//     let n1 = document.getElementById("pas1").value;
//     let passA = document.getElementById("p4");
//     if(n !=n1){
//         passA.innerHTML="nooo"
//     }
//     else{
//         passA.innerHTML="yesss"
//     }
// }

function go(){
  let n= document.getElementById("pas").value;
  let n1= document.getElementById("pas1").value;
  let passA=document.getElementById("p4");
  if(n!=n1){
        passA.innerHTML="nooo"
  }
  else{
    passA.innerHTML="yess"
  }
}


