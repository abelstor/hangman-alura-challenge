
const iniciarJuego = document.querySelector('#iniciar-juego');
const nuevaPalabra = document.querySelector('#nueva-palabra');
const nuevoJuego = document.querySelector('#nuevo-juego');

let palabras = ['alura', 'oracle', 'html', 'css', 'javascript', 'hangman', 'abel'];

nuevaPalabra.addEventListener('click', (e) => {

    e.preventDefault();
    const text = document.querySelector('#input-nueva-palabra');
    palabras = [...palabras, (text.value)];
    console.log(palabras);
    document.getElementById('input-nueva-palabra').value = '';
})

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
                title: 'Ganaste!  :)',
                showConfirmButton: true,
            })
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
                    title: 'Perdiste!  :(',
                    showConfirmButton: true,
                })
                break;
            default:
                break;
        }
    }

    window.addEventListener('keypress', ({ key }) => { keyGame(key) }, false);

})
// window.removeEventListener('click', () => { });
window.removeEventListener('keypress', () => { keyGame }, true);