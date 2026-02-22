/* ============================================
   FLUXX PMC — CORE JAVASCRIPT
   Classification: INTERNAL / RESTRICTED
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // ---- BOOT SEQUENCE ----
  const bootScreen = document.querySelector('.boot-screen');
  if (bootScreen) {
    const lines = [
      '> INITIALIZING FLUXX SECURE NETWORK...',
      '> CONNECTING TO NODE [ENCRYPTED]...',
      '> VERIFYING CLEARANCE LEVEL...',
      '> SCANNING BIOMETRIC SIGNATURE...',
      '> LOADING OPERATIONAL FRAMEWORK...',
      '> DECRYPTING COMMUNICATION CHANNELS...',
      '> STATUS: <span class="text-red">OPERATIONAL</span>',
      '> ACCESS GRANTED — CLEARANCE: STANDARD',
      '> ═══════════════════════════════════',
      '> WELCOME TO FLUXX',
    ];

    const bootText = bootScreen.querySelector('.boot-text');
    const progressBar = bootScreen.querySelector('.boot-progress-bar');
    let lineIndex = 0;

    function addLine() {
      if (lineIndex < lines.length) {
        const lineEl = document.createElement('div');
        lineEl.classList.add('line');
        lineEl.innerHTML = lines[lineIndex];
        lineEl.style.animationDelay = '0s';
        bootText.appendChild(lineEl);
        progressBar.style.width = ((lineIndex + 1) / lines.length * 100) + '%';
        lineIndex++;
        setTimeout(addLine, 150 + Math.random() * 200);
      } else {
        setTimeout(() => {
          bootScreen.classList.add('fade-out');
          setTimeout(() => {
            bootScreen.style.display = 'none';
            document.body.classList.add('loaded');
          }, 800);
        }, 600);
      }
    }

    addLine();
  }

  // ---- MOBILE NAV TOGGLE ----
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // ---- SCROLL REVEAL ----
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in, .slide-in-left').forEach(el => {
    observer.observe(el);
  });

  // ---- CIPHER / DECODE INTERACTIONS ----
  document.querySelectorAll('.cipher').forEach(el => {
    el.addEventListener('click', function () {
      const decoded = this.getAttribute('data-decoded');
      if (decoded && !this.classList.contains('decoded')) {
        this.classList.add('decoded');
        this.textContent = decoded;
      }
    });
  });

  // ---- COORDINATES HOVER ----
  document.querySelectorAll('.coordinates').forEach(el => {
    el.addEventListener('mouseenter', function () {
      this.setAttribute('data-original', this.textContent);
    });
  });

  // ---- GLITCH ON SCROLL ----
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    const delta = Math.abs(currentScroll - lastScroll);

    if (delta > 50) {
      document.body.style.setProperty('--scanline-opacity', '0.08');
      setTimeout(() => {
        document.body.style.setProperty('--scanline-opacity', '0.03');
      }, 150);
    }

    lastScroll = currentScroll;
  });

  // ---- TYPING EFFECT ----
  document.querySelectorAll('.type-text').forEach(el => {
    const text = el.textContent;
    el.textContent = '';
    let i = 0;

    function typeChar() {
      if (i < text.length) {
        el.textContent += text.charAt(i);
        i++;
        setTimeout(typeChar, 30 + Math.random() * 40);
      }
    }

    const typeObserver = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        typeChar();
        typeObserver.unobserve(el);
      }
    }, { threshold: 0.5 });

    typeObserver.observe(el);
  });

  // ---- HERO TITLE CHAR ANIMATION ----
  document.querySelectorAll('.hero-title').forEach(title => {
    const text = title.textContent;
    title.innerHTML = '';
    text.split('').forEach((char, i) => {
      const span = document.createElement('span');
      span.classList.add('char');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.animationDelay = `${0.8 + i * 0.08}s`;
      title.appendChild(span);
    });
  });

  // ---- SECRET CODE SYSTEM ----
  const secretSequence = [];
  const TARGET_CODE = 'UMBRA';

  document.addEventListener('keydown', (e) => {
    secretSequence.push(e.key.toUpperCase());
    if (secretSequence.length > 20) secretSequence.shift();

    const currentStr = secretSequence.join('');
    if (currentStr.includes(TARGET_CODE)) {
      window.location.href = 'classified.html';
    }
  });

  // ---- ACCESS TERMINAL ----
  const accessInput = document.querySelector('.access-terminal input');
  if (accessInput) {
    accessInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const value = accessInput.value.trim().toUpperCase();
        if (value === 'UMBRA' || value === 'SIGMA-7' || value === 'FL-7742') {
          triggerAccessGranted();
        } else {
          triggerAccessDenied();
        }
      }
    });
  }

  function triggerAccessGranted() {
    const terminal = document.querySelector('.access-terminal');
    if (terminal) {
      terminal.style.borderColor = 'var(--red-primary)';
      const msg = document.createElement('div');
      msg.style.cssText = 'font-family: var(--font-mono); font-size: 0.75rem; color: var(--red-primary); margin-top: 1rem; letter-spacing: 0.15em;';
      msg.textContent = '> ACCESS GRANTED — REDIRECTING...';
      terminal.appendChild(msg);
      setTimeout(() => {
        window.location.href = 'classified.html';
      }, 1500);
    }
  }

  function triggerAccessDenied() {
    const terminal = document.querySelector('.access-terminal');
    if (terminal) {
      terminal.style.borderColor = '#ff0000';
      const input = terminal.querySelector('input');
      input.value = '';
      input.placeholder = 'ACCESS DENIED — ATTEMPT LOGGED';
      setTimeout(() => {
        terminal.style.borderColor = 'var(--gray-dark)';
        input.placeholder = 'ENTER ACCESS CODE...';
      }, 2000);
    }
  }

  // ---- MICRO DISTORTION ON HOVER (CARDS) ----
  document.querySelectorAll('.card, .member-card, .dossier-item').forEach(el => {
    el.addEventListener('mouseenter', () => {
      el.style.transform = `translate(${(Math.random() - 0.5) * 1}px, ${(Math.random() - 0.5) * 1}px)`;
      setTimeout(() => {
        el.style.transform = 'translate(0, 0)';
      }, 100);
    });
  });

  // ---- HIDDEN DATA ATTRIBUTES (hover reveal) ----
  document.querySelectorAll('[data-hidden-info]').forEach(el => {
    const original = el.textContent;
    el.addEventListener('mouseenter', () => {
      el.textContent = el.getAttribute('data-hidden-info');
      el.style.color = 'var(--red-primary)';
    });
    el.addEventListener('mouseleave', () => {
      el.textContent = original;
      el.style.color = '';
    });
  });

  // ---- BASE64 DECODE ON CLICK ----
  document.querySelectorAll('.b64').forEach(el => {
    el.addEventListener('click', () => {
      try {
        const decoded = atob(el.textContent);
        el.textContent = decoded;
        el.style.color = 'var(--red-primary)';
        el.classList.add('decoded');
      } catch (e) {
        // Already decoded or invalid
      }
    });
  });

  // ---- NAV ACTIVE STATE ----
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // ---- AMBIENT RANDOM GLITCHES ----
  function ambientGlitch() {
    const glitchEls = document.querySelectorAll('.glitch');
    if (glitchEls.length > 0) {
      const randomEl = glitchEls[Math.floor(Math.random() * glitchEls.length)];
      randomEl.style.textShadow = `2px 0 var(--red-accent), -2px 0 #00ffff`;
      setTimeout(() => {
        randomEl.style.textShadow = 'none';
      }, 80);
    }
    setTimeout(ambientGlitch, 3000 + Math.random() * 8000);
  }
  ambientGlitch();

  // ---- HIDDEN COORDINATES ACROSS PAGES ----
  // These coordinates form clues when combined:
  // Page 1: 47.2° N, 8.5° E  (surface)
  // Page 2: SIGMA-7 (doctrine code)
  // Page 3: ██-UMBRA (division name)
  // Page 4: FL-7742 (case number)
  // Page 5: Base64: "The instrument has no allegiance"

  // ---- CONSOLE EASTER EGG ----
  console.log('%c FLUXX SYSTEMS ', 'background: #8b0000; color: #fff; font-size: 14px; padding: 5px 10px; font-family: monospace;');
  console.log('%c Unauthorized access will be traced and logged. ', 'color: #c41e3a; font-family: monospace; font-size: 11px;');
  console.log('%c Hint: Some things are not meant to be found. But they exist. ', 'color: #555; font-family: monospace; font-size: 10px;');
  console.log('%c > Try: UMBRA ', 'color: #333; font-family: monospace; font-size: 9px;');

});
