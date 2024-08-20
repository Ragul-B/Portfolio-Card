// JavaScript for creating floating particles
const particlesContainer = document.querySelector('.particles');

function createParticle() {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    const size = Math.random() * 5 + 2 + 'px';
    particle.style.width = size;
    particle.style.height = size;
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = Math.random() * 5 + 3 + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    particlesContainer.appendChild(particle);

    setTimeout(() => {
        particle.remove();
    }, 8000); // Remove the particle after it floats out
}

setInterval(createParticle, 200); // Continuously generate particles

// Add particle style dynamically
const style = document.createElement('style');
style.textContent = `
.particle {
    position: absolute;
    bottom: -10px;
    background: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    animation: move 8s infinite ease-in-out;
}
`;
document.head.append(style);

// 3D Tilt Effect
const card = document.querySelector('.card');

card.addEventListener('mousemove', (e) => {
    const cardRect = card.getBoundingClientRect();
    const centerX = cardRect.left + cardRect.width / 2;
    const centerY = cardRect.top + cardRect.height / 2;
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    const rotateX = -y / 15;
    const rotateY = x / 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0)';
});

// Parallax Effect for Particles
document.addEventListener('mousemove', (e) => {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
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
