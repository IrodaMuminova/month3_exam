let tasdiq=document.getElementById('tasdiq');
// let farq=document.getElementById('farq');
// tasdiq.addEventListener('click',function(e){
//     e.preventDefault();
//     let date_first=new Date(document.getElementById('date_first').value)
//     let date_second=new Date(document.getElementById('date_second').value) 

//     let day=(date_first.getTime()-date_second.getTime())/1000/60/24/60;
//     farq.innerHTML=`${day} kun`
//     console.log(`${day} kun`)
// console.log(day)


// })
function kkk(e){
    e.preventDefault();
    let date_first=new Date(document.getElementById('date_first').value)
    let date_second=new Date(document.getElementById('date_second').value) 
    let day=(date_first.getTime()-date_second.getTime())/1000/60/24/60;
let farq=document.getElementById('farq');
let b=`${day} kun`;
farq.innerHTML=b;

}