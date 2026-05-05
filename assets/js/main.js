/**
 * La Mañanita - Main JavaScript
 * ========================================
 * Archivo principal de interacciones para el sitio web
 * de Cabaña La Mañanita
 */

(function() {
  'use strict';

  // ============================================
  // DOM Elements
  // ============================================
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuClose = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('overlay');
  const header = document.getElementById('header');
  const mobileDropdownBtns = document.querySelectorAll('.mobile-dropdown-btn');

  // ============================================
  // Mobile Menu Toggle
  // ============================================
  
  /**
   * Abre el menú mobile
   */
  function openMobileMenu() {
    if (mobileMenu && overlay) {
      mobileMenu.classList.add('active');
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  /**
   * Cierra el menú mobile
   */
  function closeMobileMenu() {
    if (mobileMenu && overlay) {
      mobileMenu.classList.remove('active');
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Event listeners para el menú mobile
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', openMobileMenu);
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener('click', closeMobileMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
  }

  // Cerrar menú con tecla Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // ============================================
  // Mobile Dropdown Toggles
  // ============================================
  
  mobileDropdownBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const content = this.nextElementSibling;
      const icon = this.querySelector('svg');
      
      // Toggle visibility
      if (content) {
        content.classList.toggle('hidden');
      }
      
      // Rotate icon
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    });
  });

  // ============================================
  // Header Scroll Effect
  // ============================================
  
  let lastScrollY = window.scrollY;
  let ticking = false;

  /**
   * Maneja el efecto del header al hacer scroll
   * Agrega sombra adicional cuando se scrollea
   */
  function handleScroll() {
    const currentScrollY = window.scrollY;
    
    if (header) {
      if (currentScrollY > 10) {
        header.classList.add('shadow-xl');
      } else {
        header.classList.remove('shadow-xl');
      }
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(handleScroll);
      ticking = true;
    }
  });

  // ============================================
  // Smooth scroll para links internos (opcional)
  // ============================================
  
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          
          // Cerrar menú mobile si está abierto
          closeMobileMenu();
        }
      }
    });
  });

  // ============================================
  // Utilidades
  // ============================================
  
  /**
   * Debounce function para optimizar eventos
   * @param {Function} func - Función a ejecutar
   * @param {number} wait - Tiempo de espera en ms
   */
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = function() {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Cerrar menú mobile al redimensionar a desktop
  window.addEventListener('resize', debounce(function() {
    if (window.innerWidth >= 1024 && mobileMenu && mobileMenu.classList.contains('active')) {
      closeMobileMenu();
    }
  }, 250));

  // ============================================
  // Inicialización
  // ============================================
  
  console.log('La Mañanita - Site initialized');
  
})();
