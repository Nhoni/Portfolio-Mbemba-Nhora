

function animateProgressBar(progress) {
    const targetValue = parseInt(progress.getAttribute('value'));
    const max = parseInt(progress.getAttribute('max'));
    const animationDuration = 80000; // Durée de l'animation en millisecondes (3 secondes)
    const step = targetValue / (animationDuration / 1000); // Calcul de l'incrément

    let current = 0;

    const animation = setInterval(() => {
      if (current < targetValue) {
        current += step;
        if (current > targetValue) {
          current = targetValue;
        }
        progress.value = current;
      } else {
        progress.value = targetValue;
        clearInterval(animation);
      }
    }, 10);
  }

  // Fonction pour gérer le survol de la div
  function handleDivHover() {
    const progressBars = document.querySelectorAll('progress');
    progressBars.forEach(progress => {
      animateProgressBar(progress);
    });
  }

  // Ajouter un gestionnaire d'événements pour le survol de la div
  const divContainer = document.getElementById('bar_front');
  divContainer.addEventListener('mouseenter', handleDivHover);
