document.querySelector('.toggle-btn').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});

document.querySelector('.first-link').addEventListener('click', () => {
    document.querySelector('.details1').classList.toggle('show-details');
});

document.querySelector('.second-link').addEventListener('click', () => {
    document.querySelector('.details2').classList.toggle('show-details');
});

document.querySelector('.third-link').addEventListener('click', () => {
    document.querySelector('.details3').classList.toggle('show-details');
});