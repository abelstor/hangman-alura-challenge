
const iniciarJuego = document.querySelector('#iniciar-juego');
const nuevaPalabra = document.querySelector('#nueva-palabra');

let palabras = ['alura', 'oracle', 'html', 'css', 'javascript', 'hangman', 'abel'];

nuevaPalabra.addEventListener('click', (e) => {

    e.preventDefault();
    const text = document.querySelector('#input-nueva-palabra');
    palabras = [...palabras, (text.value)];
    document.getElementById('input-nueva-palabra').value = '';
})

iniciarJuego.addEventListener('click', () => {

    const palabraSecreta = palabras[Math.floor(Math.random() * palabras.length)];
    espaciosPalabra(palabraSecreta.length);
    console.log(palabraSecreta);

})