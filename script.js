let display = document.getElementById("display");
let clear = document.getElementById("clear");
 
function allclear(){
    display.value="";
}
 function show(n){
    display.value+=n;
 }

 function calci(){
    display.value = eval(display.value);
 }

