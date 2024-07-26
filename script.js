document.addEventListener("DOMContentLoaded", () => {
    const topDown = document.querySelector('.begin_intro')
    const slides = document.querySelectorAll('.info_alignment');
    let animationsCompleted = 0;
    const totalSlides = slides.length;

    topDown.addEventListener('animationend', () => {
        slides.forEach((slide, index) => {
            slide.style.animationDelay = `${index * 0.5}s`;
            slide.addEventListener('animationend', () => {
                animationsCompleted++;
                if (animationsCompleted === totalSlides) {
                    setTimeout(() => {
                        document.body.style.overflow = 'auto';
                    }, 500);
                }
            });
        });
    });
});