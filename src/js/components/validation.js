import MicroModal from "micromodal";
import { validateForms } from "../functions/validate-forms.js";
const rules1 = [
  {
    ruleSelector: ".input__native--name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "поле обязательно для заполнения",
      },
    ],
  },
  {
    ruleSelector: ".input__native--email",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "поле обязательно для заполнения",
      },
    ],
  },
  {
    ruleSelector: ".input__native--phone",
    tel: true,
    telError: "поле обязательно для заполнения",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "поле обязательно для заполнения",
      },
    ],
  },
];
const rules2 = [
  {
    ruleSelector: ".input__native--phone",
    tel: true,
    telError: "поле обязательно для заполнения",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "поле обязательно для заполнения",
      },
    ],
  },
];

const afterForm = () => {
  console.log("Произошла отправка, тут можно писать любые действия");
  MicroModal.close();
  MicroModal.show("quiz-thansk");
};

validateForms(".qusetion-form", rules1, afterForm);

validateForms(".pick-up__form", rules2, afterForm);

const rules3 = [
  {
    ruleSelector: "#q-name",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "поле обязательно для заполнения",
      },
    ],
  },
  {
    ruleSelector: "#q-email",
    rules: [
      {
        rule: "minLength",
        value: 3,
      },
      {
        rule: "required",
        value: true,
        errorMessage: "поле обязательно для заполнения",
      },
    ],
  },
  {
    ruleSelector: "#q-phone",
    tel: true,
    telError: "поле обязательно для заполнения",
    rules: [
      {
        rule: "required",
        value: true,
        errorMessage: "поле обязательно для заполнения",
      },
    ],
  },
];
validateForms(".quiz__form", rules3, [], afterForm);
