const iniciarJuego = document.querySelector('#iniciar-juego');
const nuevaPalabra = document.querySelector('#nueva-palabra');

let palabras = ['alura', 'oracle', 'html', 'css', 'javascript', 'hangman', 'abel'];

nuevaPalabra.addEventListener('click', (e) => {

    e.preventDefault();
    const text = document.querySelector('#input-nueva-palabra');
    palabras = [...palabras, (text.value)];
    document.getElementById('input-nueva-palabra').value = '';
})

const jugar = () => {

    iniciarJuego.addEventListener('click', () => {

        let intentos = 0;
        let gano = false;
        let game = [];

        const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
        espaciosPalabra(palabraSecreta.length);

        const keyGame = (key) => {
            const secretKey = palabraSecreta.includes(key);

            if (!secretKey) {
                intentos++;
            } else {
                dibujarLetras(palabraSecreta, key);
                secret = [...palabraSecreta];
                game = [...game, key];

                let secretWord = secret.filter((item, idx) => {
                    return secret.indexOf(item) === idx;
                })

                secretWord.sort();
                game.sort();

                if (secretWord.every((ele, ix) => { return ele === game[ix] })) {
                    gano = true;
                }
            }

            if (gano) {
                Swal.fire({
                    icon: 'success',
                    title: 'Ganaste  :)',
                    allowOutsideClick: false,
                    showConfirmButton: false,
                    html: `<a href="#logo">
                    <button class="btn" onclick="nuevoJuego()">
                    NUEVO JUEGO
                    </button></a>`,
                });
            }

            switch (intentos) {
                case 1:
                    dibujarLargo();
                    break;
                case 2:
                    dibujarHorizontal();
                    break;
                case 3:
                    dibujarCorto();
                    break;
                case 4:
                    dibujarCabeza();
                    break;
                case 5:
                    dibujarCuerpo();
                    break;
                case 6:
                    dibujarPiernaIzquierda();
                    break;
                case 7:
                    dibujarPiernaDerecha();
                    break;
                case 8:
                    dibujarBrazoIzquierdo();
                    break;
                case 9:
                    dibujarBrazoDerecho();
                    Swal.fire({
                        icon: 'error',
                        title: 'Perdiste  :(',
                        allowOutsideClick: false,
                        showConfirmButton: false,
                        html: `<a href="#logo">
                        <button class="btn" onclick="nuevoJuego()">
                        NUEVO JUEGO
                        </button></a>`,
                    });
                    break;
                default:
                    break;
            }
        }

        window.addEventListener('keypress', ({ key }) => { keyGame(key) }, false);

    })
}

jugar();

const nuevoJuego = () => {
    setTimeout(() => {
        location.reload();
    }, 500);
}
