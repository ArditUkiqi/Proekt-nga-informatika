const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.linksPhone');
const link = document.querySelectorAll('.link');
const body = document.querySelector('body');
const socialMedia = document.querySelector('.socialMedia');
const fText = document.querySelector('.footerText');
const first = document.querySelector('');
const second = document.querySelector('.second');
const third = document.querySelector('.third');
const footer = document.querySelector('footer');

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    
    body.classList.toggle("open");
    socialMedia.classList.toggle("open");
    fText.classList.toggle("open");
    first.classList.toggle("open");
    second.classList.toggle("open");
    third.classList.toggle("open");
    hamburger.classList.toggle("open");
    footer.classList.toggle("open");
});
