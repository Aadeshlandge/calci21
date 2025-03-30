function addition(){
    let num1 = document.getElementById("1stno");
    let num2 = document.getElementById("2stno");

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value)

    let res = n1+n2;

    let displaydata = document.getElementById("result")

     displaydata.innerHTML =`your result is ::${res}`;
    
}

function subtraction(){
    let num1 = document.getElementById("1stno");
    let num2 = document.getElementById("2stno");
    let displaydata = document.getElementById("result")

    let n1 = parseInt(num1.value);
    let n2 = parseInt(num2.value)

    if(n1<n2){
        displaydata.innerHTML =`1st no should be greater...!!!!`;
    }else{
    let res = n1-n2
    displaydata.innerHTML =`your result is ::${res}`;
    }
}

function ondatachange(){
    let name1 = document.getElementById("myname");
    name1.style.color='white';
    name1.style.background='green';
}