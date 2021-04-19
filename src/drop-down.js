const dropDownSetUp = () => {
    document.querySelectorAll('.drop-down-button').forEach(button => {
        button.addEventListener('click', () => {
            button.nextElementSibling.classList.toggle('visible');
        });
    });
};

export { dropDownSetUp };
