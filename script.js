/* ============================================================
   PT GREEN ALLOY NUSANTARA — script.js
   ============================================================ */

/* ===========================
   PAGE NAVIGATION
   =========================== */
function showPage(page) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });

  // Show target page
  var targetPage = document.getElementById('page-' + page);
  if (targetPage) {
    targetPage.classList.add('active');
  }

  // Update active nav link
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.remove('active');
  });
  var navEl = document.getElementById('nav-' + page);
  if (navEl) {
    navEl.classList.add('active');
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Re-init fade-in animations
  setTimeout(initFadeIn, 100);
}

/* ===========================
   FADE-IN ON SCROLL
   =========================== */
function initFadeIn() {
  var elements = document.querySelectorAll('.fade-in');

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, index) {
      if (entry.isIntersecting) {
        setTimeout(function() {
          entry.target.classList.add('visible');
        }, index * 100);
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(function(el) {
    observer.observe(el);
  });
}

/* ===========================
   CONTACT FORM SUBMIT
   =========================== */
function submitForm() {
  var name  = document.getElementById('inp-name').value.trim();
  var email = document.getElementById('inp-email').value.trim();
  var msg   = document.getElementById('inp-msg').value.trim();

  if (!name || !email || !msg) {
    alert('Please fill in the required fields: Name, Email, and Message.');
    return;
  }

  // Show toast notification
  var toast = document.getElementById('toast');
  toast.classList.add('show');
  setTimeout(function() {
    toast.classList.remove('show');
  }, 4000);

  // Clear form fields
  document.getElementById('inp-name').value  = '';
  document.getElementById('inp-email').value = '';
  document.getElementById('inp-msg').value   = '';
}

/* ===========================
   PREVENT DEFAULT ON # LINKS
   =========================== */
function preventDefaultLinks() {
  document.querySelectorAll('a[href="#"]').forEach(function(a) {
    a.addEventListener('click', function(e) {
      e.preventDefault();
    });
  });
}

/* ===========================
   NAVBAR SCROLL SHADOW
   =========================== */
function initNavbarScroll() {
  window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
    } else {
      nav.style.boxShadow = '0 2px 12px rgba(0,0,0,0.08)';
    }
  });
}

/* ===========================
   INITIALIZE
   =========================== */
document.addEventListener('DOMContentLoaded', function() {
  initFadeIn();
  preventDefaultLinks();
  initNavbarScroll();
});