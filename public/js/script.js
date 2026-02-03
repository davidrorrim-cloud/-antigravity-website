document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // Custom Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;

        // Dot follows immediately
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Outline follows with lag using GSAP for smoothness
        gsap.to(cursorOutline, {
            x: posX,
            y: posY,
            duration: 0.15,
            ease: 'power2.out'
        });
    });




    // Loader Animation
    const loaderTl = gsap.timeline();

    loaderTl.to('.loader-circle', {
        scale: 1.5,
        borderWidth: 5,
        duration: 1.5,
        repeat: 1,
        yoyo: true,
        ease: 'power3.inOut'
    })
        .to('.loader-text', {
            opacity: 0,
            duration: 0.5
        })
        .to('#loader', {
            yPercent: -100,
            duration: 1,
            ease: 'power4.inOut'
        });

    // Hero Section Animations
    const tl = gsap.timeline({ delay: 2.5 });

    tl.from('.logo', { y: -50, opacity: 0, duration: 1, ease: 'power3.out' })
        .from('.glitch', { scale: 0.8, opacity: 0, duration: 1.5, ease: 'elastic.out(1, 0.3)' }, '-=0.5')
        .from('.subtitle', { y: 20, opacity: 0, duration: 1, ease: 'power2.out' }, '-=1')
        .from('.cta-button', { y: 20, opacity: 0, duration: 1 }, '-=0.8');

    // Floating Elements Animation
    gsap.to('.shape-1', {
        y: -30,
        rotation: 360,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape-2', {
        y: 40,
        rotation: -180,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    gsap.to('.shape-3', {
        x: 50,
        y: -50,
        duration: 15,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });

    // Particle System
    const particleContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random style
        const size = Math.random() * 5 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.background = Math.random() > 0.5 ? '#00f3ff' : '#bc13fe';
        particle.style.position = 'absolute';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        particleContainer.appendChild(particle);

        // Animate each particle randomly
        gsap.to(particle, {
            y: `random(-100, 100)`,
            x: `random(-100, 100)`,
            duration: `random(10, 30)`,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
    }

    // Scroll Animations

    // Slide In Left
    gsap.utils.toArray('.slide-in-left').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Slide In Right
    gsap.utils.toArray('.slide-in-right').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    });

    // Fade In Up
    gsap.utils.toArray('.fade-in-up').forEach(element => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });
    });

    // Staggered Cards
    gsap.from('.card', {
        scrollTrigger: {
            trigger: '.cards-grid',
            start: 'top 80%'
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });

    // Future Grid Stagger
    gsap.from('.future-item', {
        scrollTrigger: {
            trigger: '.future-grid',
            start: 'top 85%'
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)'
    });

    // Navigation Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("Antigravity Systems Operational.");
});
