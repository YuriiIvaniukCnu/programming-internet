const back = document.getElementById('backButton');
const forward = document.getElementById('forwardButton');
let imgArray = ['../images/cat1.jpg', '../images/cat2.jpg', '../images/cat3.jpg', '../images/cat4.jpg'];

back.addEventListener('click', () => {
    const currentImage = document.getElementById('image').getAttribute('src');
    const currentIndex = imgArray.indexOf(currentImage);
    if (currentIndex === 0) {
        document.getElementById('image').setAttribute('src', imgArray[3]);
    }
    else {
        document.getElementById('image').setAttribute('src', imgArray[currentIndex - 1]);
    }
});

forward.addEventListener('click', () => {
    const currentImage = document.getElementById('image').getAttribute('src');
    const currentIndex = imgArray.indexOf(currentImage);
    if (currentIndex === 3) {
        document.getElementById('image').setAttribute('src', imgArray[0]);
    }
    else {
        document.getElementById('image').setAttribute('src', imgArray[currentIndex + 1]);
    }
});