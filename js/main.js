// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close nav when clicking a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('dropdown-toggle')) {
            mainNav.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});

// ===== Dropdown Toggle (Mobile) =====
document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.preventDefault();
        const parent = toggle.parentElement;
        parent.classList.toggle('active');
    });
});

// ===== Active Navigation on Scroll =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

function updateActiveNav() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===== Stats Counter Animation =====
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current).toLocaleString('id-ID');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target.toLocaleString('id-ID');
            }
        };

        updateCounter();
    });
}

// Intersection Observer for stats animation
const statsSection = document.querySelector('.stats');
let statsAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !statsAnimated) {
            animateCounters();
            statsAnimated = true;
        }
    });
}, { threshold: 0.5 });

if (statsSection) {
    statsObserver.observe(statsSection);
}

// ===== Scroll Animations =====
const animateElements = document.querySelectorAll(
    '.profil-card, .layanan-card, .berita-card, .kontak-item'
);

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    scrollObserver.observe(el);
});

// ===== Supabase Configuration =====
const SUPABASE_URL = 'https://gsjcacwnjsjkrbsdcgkr.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdzamNhY3duanNqa3Jic2RjZ2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEyODg0ODcsImV4cCI6MjA5Njg2NDQ4N30.nRV0bVV5PYVJdNdKvsVFP5jXO6jhk2ZV0tARyWah610';

// ===== Contact Form =====
const kontakForm = document.getElementById('kontakForm');

if (kontakForm) {
    kontakForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(kontakForm);
        const data = {
            nama: formData.get('nama'),
            email: formData.get('email'),
            subjek: formData.get('subjek'),
            pesan: formData.get('pesan')
        };

        const btn = kontakForm.querySelector('button[type="submit"]');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<span>Mengirim...</span>';
        btn.disabled = true;

        try {
            const response = await fetch(`${SUPABASE_URL}/rest/v1/pesan_kontak`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'apikey': SUPABASE_ANON_KEY,
                    'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                alert('Pesan Anda telah terkirim! Terima kasih telah menghubungi kami.');
                kontakForm.reset();
            } else {
                const error = await response.json();
                console.error('Supabase error:', error);
                alert('Maaf, terjadi kesalahan. Silakan coba lagi nanti.');
            }
        } catch (err) {
            console.error('Network error:', err);
            alert('Maaf, tidak dapat terhubung ke server. Periksa koneksi internet Anda.');
        } finally {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
        }
    });
}

// ===== Header Shadow on Scroll =====
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});
