import GraphTabs from "graph-tabs";
import { isDesktop } from "../functions/check-viewport.js";

// Инициализация табов
const tabs = new GraphTabs("contacts", {
  isChanged: (instance) => {
    // Дополнительное поведение при смене вкладки, если нужно
  },
});

// Если мобильное устройство — активируем вторую вкладку (индекс 1)
if (!isDesktop()) {
  const secondTabBtn = tabs.tabsBtns[1];
  const firstTabBtn = tabs.tabsBtns[0];
  if (secondTabBtn && firstTabBtn) {
    tabs.switchTabs(secondTabBtn, firstTabBtn);
  }
}

// Вторая группа табов
const tabsAuth = new GraphTabs("auth");
