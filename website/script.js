// ===== NAVBAR SCROLL =====
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== HAMBURGER MENU =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// ===== PARALLAX EFFECT =====
const orbs = document.querySelectorAll('.parallax-orb, .floating-shape');
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      orbs.forEach((orb, i) => {
        const speed = 0.03 + (i * 0.015);
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
      // Parallax for problem cards
      document.querySelectorAll('[data-parallax]').forEach(el => {
        const speed = parseFloat(el.dataset.parallax);
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2 - window.innerHeight / 2;
        el.style.transform = `translateY(${center * speed}px)`;
      });
      ticking = false;
    });
    ticking = true;
  }
});

// ===== MOUSE PARALLAX ON HERO =====
const hero = document.getElementById('hero');
hero.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;
  const heroOrbs = hero.querySelectorAll('.parallax-orb');
  heroOrbs.forEach((orb, i) => {
    const speed = 15 + i * 10;
    orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
  });
});

// ===== SCROLL ANIMATIONS (Intersection Observer) =====
const fadeElements = document.querySelectorAll(
  '.problem-card, .feature-block, .result-card, .pricing-card, .timeline-item, .contact-wrapper, .section-header'
);

const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -50px 0px' };

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Stagger children if grid
      const children = entry.target.parentElement?.querySelectorAll('.problem-card, .result-card, .pricing-card');
      if (children && children.length > 1) {
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * 0.1}s`;
        });
      }
    }
  });
}, observerOptions);

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});

// visible class handler
const style = document.createElement('style');
style.textContent = `.visible { opacity: 1 !important; transform: translateY(0) !important; }`;
document.head.appendChild(style);

// ===== COUNTER ANIMATION =====
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const counters = entry.target.querySelectorAll('[data-target]');
      counters.forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const update = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current);
            requestAnimationFrame(update);
          } else {
            counter.textContent = target;
          }
        };
        update();
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.hero-stats, .results-grid').forEach(el => {
  counterObserver.observe(el);
});

// ===== LEAD FORM HANDLING =====
const leadForm = document.getElementById('leadForm');
const formSuccess = document.getElementById('formSuccess');

leadForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const btnText = btn.querySelector('.btn-text');
  const btnLoader = btn.querySelector('.btn-loader');
  
  btnText.style.display = 'none';
  btnLoader.style.display = 'inline';
  btn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    leadForm.style.display = 'none';
    formSuccess.style.display = 'block';
    formSuccess.style.animation = 'fadeInUp 0.5s ease';
  }, 1500);
});

// FadeInUp keyframe
const animStyle = document.createElement('style');
animStyle.textContent = `@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}`;
document.head.appendChild(animStyle);

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
