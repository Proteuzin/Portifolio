
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("Portifolio");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector('.toggle-dark-mode');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');
    const navLinks = document.querySelectorAll('nav ul li a');

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode');
        footer.classList.toggle('dark-mode');
        navLinks.forEach(link => link.classList.toggle('dark-mode'));

        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Modo Claro';
        } else {
            toggleButton.textContent = 'Modo Noturno';
        }
    });
});