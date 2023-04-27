function go(){
    window.timerId=window.setInterval(timer , 1000)
}
function timer(){
    let n =document.getElementById("p1");
    let n1 =document.getElementById("p2");
    let n2 =document.getElementById("p3");
    let now=new Date();
    let midnigth=new Date(now.getFullYear(), now.getMonth(),now.getDay()+1,0,0,0);
    let diff=Math.floor((midnigth -now)/1000);
    let nRemain = Math.floor(diff/(60*60));
    let n1Remain =Math.floor((diff-nRemain*60*60) /60);
    let n2Remain = Math.floor(diff%60);

    n.innerHTML=nRemain;
    n1.innerHTML=addZero(n1Remain);
    n2.innerHTML=addZero(n2Remain);
    function addZero(num){
        if (num <=9) return '0' +num;
        else return num;
    }
}
