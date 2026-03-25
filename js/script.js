document.addEventListener('DOMContentLoaded', () => {
    // ============ PARTICLE CANVAS ============
    const canvas = document.getElementById('particleCanvas');
    const ctx = canvas.getContext('2d');
    let particles = [];

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.init();
        }
        init() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.v = (Math.random() - 0.5) * 0.4;
        }
        update() {
            this.x += this.v;
            this.y += this.v;
            if(this.x > canvas.width || this.x < 0) this.v *= -1;
            if(this.y > canvas.height || this.y < 0) this.v *= -1;
        }
        draw() {
            ctx.fillStyle = 'rgba(0, 246, 255, 0.5)';
            ctx.beginPath(); 
            ctx.arc(this.x, this.y, 1.2, 0, Math.PI*2); 
            ctx.fill();
        }
    }

    for(let i = 0; i < 60; i++) particles.push(new Particle());

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, i) => {
            p.update();
            p.draw();
            
            for(let j = i + 1; j < particles.length; j++){
                const d = Math.hypot(p.x - particles[j].x, p.y - particles[j].y);
                if(d < 130){
                    ctx.strokeStyle = `rgba(0, 246, 255, ${0.12 - d/1000})`;
                    ctx.lineWidth = 0.6;
                    ctx.beginPath(); 
                    ctx.moveTo(p.x, p.y); 
                    ctx.lineTo(particles[j].x, particles[j].y); 
                    ctx.stroke();
                }
            }
        });
        requestAnimationFrame(animate);
    }
    animate();

    // ============ MOBILE MENU TOGGLE ============
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinks.classList.toggle('active');
        const isExpanded = mobileMenuBtn.classList.contains('active');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
        });
    });

    // ============ INTERSECTION OBSERVER (Fade Animations) ============
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeElements.forEach(el => fadeObserver.observe(el));

    // ============ MULTIIDIOMA ============
    let currentLang = 'es';
    const langBtns = document.querySelectorAll('.lang-btn');
    
    function updatePageContent(lang) {
        const t = window.translations[lang];
        if(!t) return;
        
        document.querySelector('.eyebrow').textContent = t.eyebrow;
        document.querySelector('h1').innerHTML = `SISTEMAS<br><span class="accent-text">${lang === 'es' ? 'AUTÓNOMOS' : 'AUTONOMOUS'}</span>`;
        document.querySelector('.hero-section p').textContent = t.subtitle;
        document.querySelector('.btn-main').textContent = t.cta;
        
        const navLinksEls = document.querySelectorAll('.nav-links a');
        if(navLinksEls[0]) navLinksEls[0].textContent = t.servicios;
        if(navLinksEls[1]) navLinksEls[1].textContent = t.ecosistema;
        if(navLinksEls[2]) navLinksEls[2].textContent = t.contacto;
        
        const cards = document.querySelectorAll('.card');
        if(cards[0]) {
            cards[0].querySelector('h3').textContent = t.iaCore;
            cards[0].querySelector('p').textContent = t.iaCoreDesc;
        }
        if(cards[1]) {
            cards[1].querySelector('h3').textContent = t.dataMining;
            cards[1].querySelector('p').textContent = t.dataMiningDesc;
        }
        if(cards[2]) {
            cards[2].querySelector('h3').textContent = t.rpa;
            cards[2].querySelector('p').textContent = t.rpaDesc;
        }
        
        const ecosystemSection = document.querySelector('#ecosistema h2');
        if(ecosystemSection) ecosystemSection.textContent = t.ecosistemaTitle;
        
        const ecosystemP = document.querySelector('.section-header p');
        if(ecosystemP) ecosystemP.textContent = t.ecosistemaDesc;
        
        document.querySelector('#contacto h2').textContent = t.contactoTitle;
        
        document.getElementByName('name')[0].placeholder = t.namePlaceholder;
        document.getElementByName('email')[0].placeholder = t.emailPlaceholder;
        document.getElementByName('message')[0].placeholder = t.messagePlaceholder;
        document.getElementById('submit-btn').textContent = t.submitBtn;
        
        document.querySelector('footer p').textContent = t.footer;
        
        document.documentElement.lang = lang;
        currentLang = lang;
        
        langBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }
    
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            updatePageContent(btn.dataset.lang);
        });
    });

    // ============ SANITIZE INPUT ============
    function sanitizeInput(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // ============ EMAILJS FORM ============
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formStatus = document.getElementById('form-status');

    emailjs.init('xVwdbB46eyW5LrqW4');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const originalText = submitBtn.textContent;
        submitBtn.textContent = window.translations[currentLang].sending;
        submitBtn.disabled = true;
        formStatus.textContent = '';
        formStatus.className = 'form-status';

        const name = sanitizeInput(document.getElementById('name').value.trim());
        const email = sanitizeInput(document.getElementById('email').value.trim());
        const message = sanitizeInput(document.getElementById('message').value.trim());

        if (!name || !email || !message) {
            formStatus.textContent = 'Todos los campos son requeridos';
            formStatus.classList.add('error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            formStatus.textContent = 'Email inválido';
            formStatus.classList.add('error');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
            to_name: 'JEOSYS'
        };

        emailjs.send('service_lpndc49', 'template_qj19ozw', templateParams)
            .then(() => {
                formStatus.textContent = window.translations[currentLang].success;
                formStatus.classList.add('success');
                submitBtn.style.backgroundColor = '#00ff88';
                submitBtn.style.color = '#000';
                submitBtn.textContent = '✓ ENVIADO';
                form.reset();
            })
            .catch((error) => {
                formStatus.textContent = window.translations[currentLang].error;
                formStatus.classList.add('error');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                console.error('EmailJS Error:', error);
            });
    });

    // ============ SMOOTH SCROLL FOR ANCHOR LINKS ============
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if(target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});