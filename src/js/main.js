import 'normalize.css';
import '/src/scss/main.scss'

document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

const form = document.querySelector('.card form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let wrapper = e.target.closest('.flip-wrapper');
    wrapper.classList.add('flip-wrapper--flip');
});

form.addEventListener('change', e => {
    let formData = new FormData(e.target.closest('form'));

    let nlDataCount = document.querySelectorAll('[data-count]');

    nlDataCount.forEach(el => {
        el.innerHTML = formData.get('rating');
    });
})
