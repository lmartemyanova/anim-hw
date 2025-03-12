document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.anim-btn');
    const text = document.querySelector('.anim-text');

    button.addEventListener('click', (e) => {
        e.preventDefault();
        text.classList.toggle('shown');
    })
})