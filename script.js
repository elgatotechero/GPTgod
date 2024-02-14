const collage = document.getElementById('collage');
const messages = [
    "¡Te amo más que a nada en este mundo!🤍",
    "Eres mi luz en la oscuridad.🤍",
    "Gracias por ser mi felicidad.🤍",
    "En este mundo, solo estamos los dos.🤍",
    "Nuestro amor lo supera todo.🤍"
];

let currentIndex = 0;

document.addEventListener('click', () => {
    if (currentIndex < photos.length) {
        const photoUrl = photos[currentIndex];
        const photo = document.createElement('div');
        photo.classList.add('photo');
        photo.style.backgroundImage = `url(${photoUrl})`;
        collage.appendChild(photo);
        currentIndex++;
        if (currentIndex === photos.length) {
            const message = document.createElement('p');
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            message.textContent = randomMessage;
            message.classList.add('message');
            collage.appendChild(message);
        }
    }
});

const photos = [
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/SUKUNA.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/fotito1.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/fotito2.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/fotito3.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/fotito4.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/fotito5.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/los%202-1.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/los%202-2.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/los%202-3.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/los%202-4.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/los%202-5.jpeg',
    'https://raw.githubusercontent.com/elgatotechero/GPTgod/main/anillos.jpeg'
];
const audioPlayer = document.getElementById('audioPlayer');
const bgMusic = document.getElementById('bgMusic');

audioPlayer.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        audioPlayer.textContent = '⏸️';
    } else {
        bgMusic.pause();
        audioPlayer.textContent = '❤️';
    }
});
