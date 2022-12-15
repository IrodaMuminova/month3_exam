function sum(array){
    let Sum=0;
    for (let i=0;i<array.length;i++) {
   array[i]+=3;
    Sum+=array[i];
    }
    return Sum;
}
let massiv=[3,5,22,5,7,2,45,75,89,21,2];
let natija=document.getElementById('natija');

natija.innerHTML=sum(massiv)