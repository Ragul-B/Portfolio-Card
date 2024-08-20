// JavaScript for creating floating particles
const particlesContainer = document.querySelector('#particles-js');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 12 + 5 + 'px';
    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 7 + 3 + 's'; // Duration 3-10 seconds
    particle.style.animationDelay = Math.random() * 5 + 's'; // Delay 0-5 seconds
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, parseFloat(particle.style.animationDuration) * 1000); // Remove after animation
}

setInterval(createParticle, 200); // Continuously generate particles

// 3D Tilt Effect for the Card
const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
    const cardRect = card.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const rotateX = -y / 10; // Enhanced tilt effect
    const rotateY = x / 10;  // Enhanced tilt effect

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
});

// Parallax Effect for Particles
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.02;
        particle.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});

// Intersection Observer to Reveal Card
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            card.classList.add('revealed');
        }
    });
}, { threshold: 0.1 });

observer.observe(card);
