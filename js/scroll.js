document.addEventListener("DOMContentLoaded", function () {
    let lastScrollTop = 0; // Variable to store the last scroll position
    const elements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (entry.isIntersecting) {
                if (currentScrollTop > lastScrollTop) {
                    // Scrolling down
                    entry.target.style.transition = 'opacity 1.2s ease-out, transform 1.3s ease-out'; // Slower transition
                } else {
                    // Scrolling up
                  //  entry.target.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'; // Faster transition
                }
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible');
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Update last scroll position
        });
    }, {
        rootMargin: '0px',
        threshold: 0.1
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
