
let pantalla = document.getElementById('ahorcado');
let pincel = pantalla.getContext('2d');

const dibujarTablero = () => {
    pincel.fillStyle = 'darkgrey';
    pincel.fillRect(0, 0, 1200, 800);
    pincel.fillStyle = 'black';
    pincel.lineWidth = 5;
    pincel.fillRect(198, 572, 70, 20); // base
}
dibujarTablero();

const dibujarLargo = () => {
    pincel.fillRect(230, 100, 5, 472);
}

const dibujarHorizontal = () => {
    pincel.fillRect(230, 100, 200, 5);
}

const dibujarCorto = () => {
    pincel.fillRect(430, 100, 5, 30);
}

const dibujarCabeza = () => {
    pincel.beginPath();
    pincel.arc(432, 170, 40, 0, 2 * 3.14);
    pincel.strokeStyle = '#000';
    pincel.stroke();
}

const dibujarCuerpo = () => {
    pincel.fillRect(430, 210, 5, 190);
}

const dibujarBrazoDerecho = () => {
    pincel.beginPath();
    pincel.moveTo(432, 270);
    pincel.lineTo(530, 200);
    pincel.closePath();
    pincel.strokeStyle = '#000';
    pincel.stroke();
}

const dibujarBrazoIzquierdo = () => {
    pincel.beginPath();
    pincel.moveTo(432, 270);
    pincel.lineTo(330, 200);
    pincel.closePath();
    pincel.strokeStyle = '#000';
    pincel.stroke();
}
const dibujarPiernaDerecha = () => {
    pincel.beginPath();
    pincel.moveTo(432, 400);
    pincel.lineTo(520, 470);
    pincel.closePath();
    pincel.strokeStyle = '#000';
    pincel.stroke();
}
const dibujarPiernaIzquierda = () => {
    pincel.beginPath();
    pincel.moveTo(432, 400);
    pincel.lineTo(340, 470);
    pincel.closePath();
    pincel.strokeStyle = '#000';
    pincel.stroke();
}

const espaciosPalabra = (num) => {
    // pincel.fillStyle = 'green';
    for (let i = 1; i <= num; i++) {
        let x = 300 + (i * 70);
        pincel.fillRect(x, 580, 50, 5);
    }
}

const dibujarLetras = (palabraSecreta, key) => {

    pincel.font = 'normal 40px Georgia';
    pincel.strokeStyle = '#0a3871';

    let letras = [];

    for (const letra of palabraSecreta) {
        letras = [...letras, letra];
    }

    letras.forEach((letra, index) => {

        if (letra === key) {

            switch (index) {
                case 0:
                    pincel.strokeText(key, 385, 560);
                    break;
                case 1:
                    pincel.strokeText(key, 455, 560);
                    break;
                case 2:
                    pincel.strokeText(key, 525, 560);
                    break;
                case 3:
                    pincel.strokeText(key, 595, 560);
                    break;
                case 4:
                    pincel.strokeText(key, 665, 560);
                    break;
                case 5:
                    pincel.strokeText(key, 735, 560);
                    break;
                case 6:
                    pincel.strokeText(key, 805, 560);
                    break;
                case 7:
                    pincel.strokeText(key, 875, 560);
                    break;
                case 8:
                    pincel.strokeText(key, 945, 560);
                    break;
                case 9:
                    pincel.strokeText(key, 1015, 560);
                    break;
                default:
                    break;
            }
        }
    });
}

const clearCanvas = () => {
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
    dibujarTablero();
}