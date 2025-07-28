import JustValidate from "just-validate";
// import Inputmask from "../../../node_modules/inputmask/dist/inputmask.es6.js";
import SimplePhoneMask from "simple-phone-mask";
export const validateForms = (selector, rules, checkboxes = [], afterSend) => {
  const form = document?.querySelector(selector);
  const telSelector = form?.querySelector('input[type="tel"]');

  if (!form) {
    console.error("Нет такого селектора!");
    return false;
  }

  if (!rules) {
    console.error("Вы не передали правила валидации!");
    return false;
  }

  if (telSelector) {
    const phoneMask = new SimplePhoneMask('input[type="tel"]', {
      countryCode: "RU",
    });

    for (let item of rules) {
      if (item.tel) {
        item.rules.push({
          rule: "function",
          validator: function () {
            const phone = telSelector.value.replace(/\D/g, "");
            return phone.length === 11;
          },
          errorMessage: item.telError,
        });
      }
    }
  }

  const validation = new JustValidate(selector, {
    errorFieldCssClass: "is-invalid",
    errorLabelStyle: {
      color: "#ff545d",
    },
  });

  for (let item of rules) {
    const el = document.querySelector(item.ruleSelector);
    let errorLabelTarget = undefined;

    if (el) {
      const parentInput = el.closest(".input");
      if (parentInput) {
        errorLabelTarget = parentInput;
      }
    }

    validation.addField(
      item.ruleSelector,
      item.rules,
      errorLabelTarget ? { errorLabelTarget } : undefined
    );
  }

  if (checkboxes.length) {
    for (let item of checkboxes) {
      validation.addRequiredGroup(`${item.selector}`, `${item.errorMessage}`);
    }
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
          console.log("Отправлено");
        }
      }
    };

    xhr.open("POST", "mail.php", true);
    xhr.send(formData);

    ev.target.reset();
  });
};
