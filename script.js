// EmailJS SDK başlatma
(function () {
    emailjs.init('KeooaRGyCOhLWhCAd'); // Kendi EmailJS kullanıcı ID'nizi buraya girin
})();

document.addEventListener('DOMContentLoaded', function () {
    // --- GERÇEK ZAMANLI PROGRESS BAR SAYACI ---
    const bar = document.getElementById('progress-bar');
    const label = document.getElementById('progress-bar-label');
    const targetDate = new Date('2026-06-01T00:00:00');
    function updateProgressBar() {
        const now = new Date();
        const startDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
        const total = targetDate - startDate;
        let elapsed = now - startDate;
        elapsed = Math.max(0, Math.min(elapsed, total));
        const percent = Math.max(0, Math.min(100, Math.floor((elapsed / total) * 100)));
        bar.style.width = percent + '%';
        const diff = Math.max(0, targetDate - now);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        label.textContent = `${percent}% | ${days} gün ${hours} saat ${minutes} dk ${seconds} sn kaldı`;
    }
    setInterval(updateProgressBar, 1000);
    updateProgressBar();

    // Navigasyon işlevselliği
    document.querySelectorAll('.nav-btn').forEach(button => {
        button.addEventListener('click', function (e) {
            if (this.id === 'devblog-btn') {
                e.preventDefault();
                document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
                this.classList.add('active');
                document.getElementById('devblog').classList.add('active');
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-2px)';
                }, 100);
                return;
            }
            const targetSection = this.getAttribute('data-section');
            document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'translateY(-2px)';
            }, 100);
        });
    });

    // İletişim formu işlevselliği
    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = contactForm.name.value.trim();
        const email = contactForm.email.value.trim();
        const title = contactForm.title.value.trim();
        const message = contactForm.message.value.trim();
        if (!name || !email || !title || !message) {
            alert('❌ Lütfen tüm alanları doldurun!');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('❌ Geçerli bir e-posta adresi girin!');
            return;
        }
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '⏳ GÖNDERİLİYOR...';
        submitBtn.disabled = true;
        emailjs.send('service_802kh5i', 'template_ttmpbz7', {
            from_name: name,
            from_email: email,
            title: title,
            message: message
        }).then(function () {
            emailjs.send('service_802kh5i', 'template_58pxwxr', {
                to_email: email,
                from_name: name,
                title: title
            }).then(function () {
                contactForm.reset();
                successMessage.classList.add('show');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
                setTimeout(() => successMessage.classList.remove('show'), 3000);
            }, function () {
                alert('❌ Otomatik yanıt gönderilemedi.');
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        }, function () {
            alert('❌ Mesaj gönderilemedi. Lütfen tekrar deneyin!');
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        });
    });

    // Hover ve click efektleri
    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-5px) scale(1.02)');
        card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0) scale(1)');
    });
    document.querySelectorAll('.team-member').forEach(member => {
        member.addEventListener('click', function () {
            this.style.transform = 'scale(0.98)';
            setTimeout(() => this.style.transform = 'translateY(-5px) scale(1)', 100);
        });
    });
    document.querySelectorAll('.pixel-frame').forEach(frame => {
        frame.addEventListener('click', function () {
            const placeholder = this.closest('.screenshot-placeholder');
            placeholder.style.border = '3px solid #7fff7f';
            placeholder.style.boxShadow = '0 0 20px rgba(127, 255, 127, 0.5)';
            setTimeout(() => {
                placeholder.style.border = '2px solid #43d86b';
                placeholder.style.boxShadow = 'none';
            }, 500);
        });
    });

    // Ana başlık için yazma efekti
    const pixelText = document.querySelector('.pixel-text');
    if (pixelText) {
        const originalText = pixelText.textContent;
        pixelText.textContent = '';
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                pixelText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        setTimeout(typeWriter, 500);
    }

    // Yüzme animasyonu
    document.querySelectorAll('.nav-brand h1, .pixel-text').forEach(element => {
        element.style.animation = 'float 3s ease-in-out infinite';
    });
    const style = document.createElement('style');
    style.textContent = `@keyframes float {0%,100%{transform:translateY(0px);}50%{transform:translateY(-10px);}}`;
    document.head.appendChild(style);

    // Easter Egg
    let konamiCode = [];
    const konamiSequence = ['KeyM', 'KeyU', 'KeyR', 'KeyA', 'KeyT', 'KeyH', 'KeyO', 'KeyC', 'KeyA'];
    document.addEventListener('keydown', function (e) {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) konamiCode.shift();
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            document.body.style.filter = 'hue-rotate(180deg)';
            alert('🎮 Easter Egg Bulundu! Retro mode aktifleştirildi!');
            setTimeout(() => document.body.style.filter = 'none', 5000);
            konamiCode = [];
        }
    });
});

// Matrix yağmuru efekti ekle 
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';

    document.body.appendChild(canvas);

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const columns = canvas.width / 20;
    const drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = 1;
    }

    const chars = '01';

    function draw() {
        ctx.fillStyle = 'rgba(15, 15, 35, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00ff41';
        ctx.font = '15px monospace';

        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * 20, drops[i] * 20);

            if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }

            drops[i]++;
        }
    }

    setInterval(draw, 50);
}
// Matrix yağmuru efektini başlat
createMatrixRain();