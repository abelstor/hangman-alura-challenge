
let pantalla = document.getElementById('ahorcado');
let pincel = pantalla.getContext('2d');

pincel.fillStyle = 'darkgrey';
pincel.fillRect(0, 0, 1200, 800);
pincel.fillStyle = 'black';
pincel.lineWidth = 5;

pincel.fillRect(198, 572, 70, 20); // base
pincel.fillRect(230, 100, 5, 472); // vertical largo
pincel.fillRect(230, 100, 200, 5); // horizontal
pincel.fillRect(430, 100, 5, 30); // vertical pequeño

pincel.beginPath();
pincel.arc(432, 170, 40, 0, 2 * 3.14); // cabeza
pincel.stroke();

pincel.fillRect(430, 210, 5, 190); // tronco

pincel.beginPath(); // Brazo derecho
pincel.moveTo(432, 270);
pincel.lineTo(530, 200);
pincel.closePath();
pincel.stroke();

pincel.beginPath(); // Brazo izquierdo
pincel.moveTo(432, 270);
pincel.lineTo(330, 200);
pincel.closePath();
pincel.stroke();

pincel.beginPath(); // Pierna derecha
pincel.moveTo(432, 400);
pincel.lineTo(520, 470);
pincel.closePath();
pincel.stroke();

pincel.beginPath(); // Pierna izquierda
pincel.moveTo(432, 400);
pincel.lineTo(340, 470);
pincel.closePath();
pincel.stroke();

const espaciosPalabra = (num) => {

    for (let i = 1; i <= num; i++) {
        let x = 300 + (i * 70);
        pincel.fillRect(x, 580, 50, 5);
    }
}