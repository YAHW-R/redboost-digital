//animate header and nav elements on page load

const header = document.querySelector('.header');
const nav = document.querySelector('nav');

document.addEventListener('DOMContentLoaded', () => {
    header.classList.add('animate-header');
    nav.classList.add('animate-nav');
});


//animate services elements on scroll

const ssm = document.querySelector('.SSM');
const ctm = document.querySelector('.CTM');
const cm = document.querySelector('.CM');
const wdd = document.querySelector('.WDD');

const ssmPosition = ssm.offsetTop - window.innerHeight + 200;
const ctmPosition = ctm.offsetTop - window.innerHeight + 200;
const cmPosition = cm.offsetTop - window.innerHeight + 200;
const wddPosition = wdd.offsetTop - window.innerHeight + 200;


function verificarScrollSsm() {
    if (window.scrollY > ssmPosition) {
        ssm.classList.add('animate-services-rigth');
        window.removeEventListener('scroll', verificarScrollSmm);
    }
}
window.addEventListener('scroll', verificarScrollSsm);

function verificarScrollCtm() {
    if (window.scrollY > ctmPosition) {
        ctm.classList.add('animate-services-left');
        window.removeEventListener('scroll', verificarScrollCtm);
    }
}
window.addEventListener('scroll', verificarScrollCtm);

function verificarScrollCm() {
    if (window.scrollY > cmPosition) {
        cm.classList.add('animate-services-right');
        window.removeEventListener('scroll', verificarScrollCm);
    }
}
window.addEventListener('scroll', verificarScrollCm);

function verificarScrollWdd() {
    if (window.scrollY > wddPosition) {
        wdd.classList.add('animate-services-left');
        window.removeEventListener('scroll', verificarScrollWdd);
    }
}
window.addEventListener('scroll', verificarScrollWdd);