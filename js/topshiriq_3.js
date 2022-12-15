let number_read = document.getElementById('number_read');
let reading = document.getElementById('reading');
let oqi;
let ten;
function birlik(n) {
    switch (n) {
        case '1':
            oqi = 'bir';
            break;

        case '2':
            oqi = 'ikki';
            break;

        case '3':
            oqi = 'uch';
            break;

        case '4':
            oqi = 'to\'rt';
            break;
        case '5':
            oqi = 'besh';
            break;

        case '6':
            oqi = 'olti';
            break;

        case '7':
            oqi = 'yetti';
            break;

        case '8':
            oqi = 'sakkiz';
            break;

        case '9':
            oqi = 'to\'qqiz';
            break;

        case '0':
            oqi = '';
            break;

        default:
            oqi = ''
            break;



    }
    return oqi;
}
function onlik(n) {
    switch (n) {
        case '1':
            ten = 'o\'n';
            break;

        case '2':
            ten = 'yigirma';
            break;

        case '3':
            ten = 'o\'ttiz';
            break;

        case '4':
            ten = 'qirq';
            break;
        case '5':
            ten = 'ellik';
            break;

        case '6':
            ten = 'oltmish';
            break;

        case '7':
            ten = 'yetmish';
            break;

        case '8':
            ten = 'sakson';
            break;

        case '9':
            ten = 'to\'qson ';
            break;

        case '0':
            ten = '';
            break;

        default:
            ten = ''
            break;



    }
    return ten;
}
number_read.addEventListener('input', function (e) {
    e.preventDefault();
    let number = e.target.value;
    let massiv = number.split('')
    if (massiv.length == 1) {

        // switch (number) {
        //     case '1':
        //         oqi = 'bir';
        //         break;

        //     case '2':
        //         oqi = 'ikki';
        //         break;

        //     case '3':
        //         oqi = 'uch';
        //         break;

        //     case '4':
        //         oqi = 'to\'rt';
        //         break;
        //     case '5':
        //         oqi = 'besh';
        //         break;

        //     case '6':
        //         oqi = 'olti';
        //         break;

        //     case '7':
        //         oqi = 'yetti';
        //         break;

        //     case '8':
        //         oqi = 'sakkiz';
        //         break;

        //     case '9':
        //         oqi = 'to\'qqiz';
        //         break;

        //     case '0':
        //         oqi = 'nol';
        //         break;

        //     default:
        //         oqi = ''
        //         break;



        // }
        birlik(number)
        console.log(oqi)
        reading.innerHTML = oqi;
    }

    if (massiv.length == 2) {
        onlik(massiv[0]);
        birlik(massiv[1]);
        reading.innerHTML = ten + " " + oqi;
        console.log(oqi)
    }
})