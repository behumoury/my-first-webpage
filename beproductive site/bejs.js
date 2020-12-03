var btn1 = document.getElementById("btn");
var a = 'yash';

btn1.addEventListener('click', ()=>{
   if(btn1.textContent=='thx'){
       btn1.textContent= 'why are you clicking it agin man!!';
   }else{
    btn1.textContent='thx';
   };

});

var btn2 = document.getElementById("btn2");
var h = document.querySelector("h3");
var input = document.getElementById("inp").value;

btn2.addEventListener('click', ()=>{
    document.getElementById("inp").style.display= "none";
    document.getElementById("label").style.display= "none";
    document.getElementById("btn2").style.display= "none";
    h.textContent= "got it!";
    
});