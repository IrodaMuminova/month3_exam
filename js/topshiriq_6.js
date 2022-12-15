let  upper=document.getElementById("upper");
upper.addEventListener('input',function(e){
    e.preventDefault();
    e.target.value=e.target.value.toUpperCase();
   console.log(u.toUpperCase())
})