const _images = [];
const _dots = [];
let _currentImage;
let _currentDot;


const imageSliderSetUp = () => {
    // image & dots set up
    document.querySelectorAll('.images').forEach(image => {
        image.style.display = 'none';
        _images.push(image);
    });
    document.querySelectorAll('.dot').forEach(dot => {
        dot.style.backgroundColor = 'transparent';
        _dots.push(dot);
    });
    // default image
    _currentImage = _images[0];
    _currentDot = _dots[0];
    _currentImage.style.display = 'block';
    _currentDot.style.backgroundColor = 'red';
    // buttons
    document.querySelector('#forwards').addEventListener('click', () => {
        _currentImage.style.display = 'none';
        _currentDot.style.backgroundColor = 'transparent';
        const index = _nextImageSlideForward(_images, _currentImage);
        _currentImage = _images[index];
        _currentDot = _dots[index];
        _currentImage.style.display = 'block';
        _currentDot.style.backgroundColor = 'red';
    });
    document.querySelector('#backwards').addEventListener('click', () => {
        _currentImage.style.display = 'none';
        _currentDot.style.backgroundColor = 'transparent';
        const index = _nextImageSlideBackward(_images, _currentImage);
        _currentImage = _images[index];
        _currentDot = _dots[index];
        _currentImage.style.display = 'block';
        _currentDot.style.backgroundColor = 'red';
    });
    document.querySelectorAll('.dot').forEach(dot => {
        dot.addEventListener('click', () => {
            _currentImage.style.display = 'none';
            _currentDot.style.backgroundColor = 'transparent';
            const index = _dots.indexOf(dot);
            _currentImage = _images[index];
            _currentDot = _dots[index];
            _currentImage.style.display = 'block';
            _currentDot.style.backgroundColor = 'red';
        });
    });
};

const _nextImageSlideForward = (_images, _currentImage) => {
    const index = _images.indexOf(_currentImage);
    if (_images.length == index + 1) {
        return 0;
    }
    else {
        return index + 1;
    }
};

const _nextImageSlideBackward = (_images, _currentImage) => {
    const index = _images.indexOf(_currentImage);
    if (index - 1 < 0) {
        return _images.length - 1;
    }
    else {
        return index - 1;
    }
};

const scrollTimer = setInterval(() => {
    _currentImage.style.display = 'none';
    _currentDot.style.backgroundColor = 'transparent';
    const index = _nextImageSlideForward(_images, _currentImage);
    _currentImage = _images[index];
    _currentDot = _dots[index];
    _currentImage.style.display = 'block';
    _currentDot.style.backgroundColor = 'red';
}, 5000);

export { imageSliderSetUp, scrollTimer };
