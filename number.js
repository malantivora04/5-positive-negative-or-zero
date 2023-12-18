
function check(){
   
   
    var a = parseInt(document.getElementById('t1').value);


if(a>=1){

    document.getElementById('p1').innerHTML= "number is positive";
}
else if(a<0){
    document.getElementById('p1').innerHTML= "number is negative";
}
else if (a==0){
    document.getElementById('p1').innerHTML= "number is zero";
}

}