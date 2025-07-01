//animate header and nav elements on page load

const header = document.querySelector('.header');
const nav = document.querySelector('nav');

document.addEventListener('DOMContentLoaded', () => {
    header.classList.add('animate-header');
    nav.classList.add('animate-nav');
});


//animate services elements on scroll

const ssm = document.querySelector('.ssm');
const ctm = document.querySelector('.ctm');
const cm = document.querySelector('.cm');
const wdd = document.querySelector('.wdd');

const observerRight = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-services-rigth');
        }
    });
}, {threshold: 0.5});


const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-services-left');
        }
    });
}, {threshold: 0.5});

observerRight.observe(ssm);
observerLeft.observe(ctm);
observerRight.observe(cm);
observerLeft.observe(wdd);