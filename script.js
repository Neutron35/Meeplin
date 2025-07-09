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

    // Sélectionne toutes les sections de questions
    const totalQuestions = 8;

    for (let i = 1; i <= totalQuestions; i++) {
        const currentSection = document.getElementById(`question-${i}`);
        if (!currentSection) continue;
        const nextBtn = currentSection.querySelector('.quiz-next');
        if (!nextBtn) continue;

        nextBtn.addEventListener('click', function() {
            // Masque la question actuelle
            currentSection.style.display = 'none';
            // Si c'est la dernière question, on repart à la première
            let nextIndex = i === totalQuestions ? 1 : i + 1;
            const nextSection = document.getElementById(`question-${nextIndex}`);
            if (nextSection) {
                nextSection.style.display = 'block';
            }
        });
    }

    // Gestion de la sélection d'une option de quiz
    const allQuestions = document.querySelectorAll('section[id^="question-"]');
    allQuestions.forEach(section => {
      const options = section.querySelectorAll('.quiz-option');
      options.forEach(option => {
        option.addEventListener('click', function() {
          // Réinitialise toutes les options de la question
          options.forEach(btn => {
            btn.style.backgroundColor = '';
            btn.style.color = '';
          });
          // Applique la couleur sélectionnée
          this.style.backgroundColor = '#FE7F2D';
          this.style.color = '#fff';
        });
      });
    });
}); 