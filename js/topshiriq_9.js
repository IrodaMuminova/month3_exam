let ketma_ket=document.getElementById("ketma_ket");
let box=document.getElementById("box");

ketma_ket.addEventListener('change',function(e){
     e.preventDefault();

const p=document.createElement('p');
p.innerHTML=`${e.target.value}`;
box.append(p)
e.target.value='';
})

