function sm_mon(){
    let inp3 = document.getElementById('inp3').value;
    let sum1 = document.getElementById('summa1').value;
    let sum = document.getElementById('summa');
    let month = document.getElementById('months');
    sum.value = sum1 * inp3 
    month.value = (sum.value / 100* 10 ) 
}