document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    // Toggle menu
    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Fermer le menu en cliquant sur un lien
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Fermer le menu en cliquant en dehors
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Fermer le menu avec la touche Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // === Modal Compte ===
    const accountBtn = document.querySelector('.account-btn');
    const accountModal = document.getElementById('accountModal');
    const accountModalClose = document.querySelector('.account-modal-close');
    const accountModalBackdrop = document.querySelector('.account-modal-backdrop');

    function openAccountModal() {
        accountModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeAccountModal() {
        accountModal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    accountBtn.addEventListener('click', openAccountModal);
    accountModalClose.addEventListener('click', closeAccountModal);
    accountModalBackdrop.addEventListener('click', closeAccountModal);

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && accountModal.getAttribute('aria-hidden') === 'false') {
            closeAccountModal();
        }
    });
}); 