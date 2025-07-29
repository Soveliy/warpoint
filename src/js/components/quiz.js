const steps = document.querySelectorAll(".quiz-item");
let currentStep = 0;

function showStep(index) {
  steps.forEach((step, i) => {
    step.classList.toggle("js-active", i === index);
  });
}

function updateButtons() {
  steps.forEach((step, i) => {
    const backButton = step.querySelector(".quiz-item__button--back");
    const nextButton = step.querySelector(".quiz-item__button--next");

    if (backButton) {
      backButton.disabled = i === 0;
      backButton.onclick = () => {
        if (currentStep > 0) {
          currentStep--;
          showStep(currentStep);
        }
      };
    }

    if (nextButton) {
      nextButton.onclick = () => {
        if (currentStep < steps.length - 1) {
          currentStep++;
          showStep(currentStep);
        }
      };
    }
  });
}

showStep(currentStep);
updateButtons();
