let array = new Array();

function massiv_sum(array_1, array_2) {
    let massiv = document.getElementById('massiv');
    let massiv_1 = document.getElementById("array_1");
    let massiv_2 = document.getElementById("array_2");
    if (array_1.length == array_2.length) {
        for (let i = 0; i < array_1.length; i++) {
            array[i] = array_1[i] + array_2[i];

        }
    }
    massiv.innerText = `[${array}]`;
    massiv_1.innerText = `[${array_1}]`;
    massiv_2.innerText = `[${array_2}]`;

}
let array_1 = [3, 5, 22, 5, 7, 2, 45, 75, 89, 21, 2];
let array_2 = [4, 2, 21, 12, 13, 34, 46, 79, 10, 21, 34];
massiv_sum(array_1, array_2);