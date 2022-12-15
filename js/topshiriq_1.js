let lavozim = document.getElementById('lavozim');
let what_job = document.getElementById('what_job');


// tasdiq.addEventListener('click',function(e){
//     e.preventDefault();
//     if()
// })
function tekshir(e) {
    e.preventDefault();
    let job = lavozim.value;
    let word;
    if (job.toLowerCase() == "ishchi") {
        word = 'Hello'
    }
    else if (job.toLowerCase() == 'director') {
        word = 'Greeting';
    }
    else if (job == '') {
        word = 'No login';
    }
    else {
        word = 'Bunday lavozim mavjud emas'
    }
    what_job.innerHTML = word;
}