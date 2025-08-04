const steps = document.querySelectorAll(".quiz-item");
const quizContainer = document.querySelector(".modal__container--quiz");
const resultContainer = document.querySelector(".modal__container--quiz-form");
const changeAnswersButton = document.querySelector(".quiz__form-button--reset");
const form = document.querySelector(".quiz__form");
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
        } else {
          if (quizContainer) quizContainer.style.display = "none";
          if (resultContainer) resultContainer.style.display = "block";
          collectQuizData();
        }
      };
    }
  });
}

function collectQuizData() {
  const getCheckedValues = (name) => {
    return Array.from(
      document.querySelectorAll(`input[name="${name}"]:checked`)
    )
      .map((input) => input.value)
      .join(", ");
  };

  const setHiddenValue = (id, value) => {
    const input = document.getElementById(id);
    if (input) input.value = value;
  };

  setHiddenValue("hidden-event", getCheckedValues("event"));
  setHiddenValue("hidden-persons", getCheckedValues("persons"));
  setHiddenValue("hidden-additionally", getCheckedValues("additionally"));
  setHiddenValue("hidden-loc", getCheckedValues("loc"));

  const dateInput = document.getElementById("calendar");
  setHiddenValue("hidden-event-date", dateInput ? dateInput.value.trim() : "");
}

function resetQuiz() {
  // Сброс всех radio, checkbox и текстовых полей
  const inputs = document.querySelectorAll(".quiz-item input");
  inputs.forEach((input) => {
    if (input.type === "radio" || input.type === "checkbox") {
      input.checked = false;
    } else {
      input.value = "";
    }
  });

  // Очистка значений скрытых полей
  [
    "hidden-event",
    "hidden-persons",
    "hidden-additionally",
    "hidden-loc",
    "hidden-event-date",
  ].forEach((id) => {
    const input = document.getElementById(id);
    if (input) input.value = "";
  });

  // Сброс шага
  currentStep = 0;
  showStep(currentStep);
  quizContainer.style.display = "block";
  resultContainer.style.display = "none";
}

if (changeAnswersButton) {
  changeAnswersButton.addEventListener("click", (e) => {
    e.preventDefault();
    resetQuiz();
  });
}

showStep(currentStep);
updateButtons();
