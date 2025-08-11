import GraphTabs from "graph-tabs";
import { isDesktop } from "../functions/check-viewport.js";

// Инициализация табов
const tabs = new GraphTabs("contacts");

// Если мобильное устройство — активируем вторую вкладку (индекс 1)
if (window.innerWidth <= 1280) {
  const secondTabBtn = tabs.tabsBtns[1];
  const firstTabBtn = tabs.tabsBtns[0];
  if (secondTabBtn && firstTabBtn) {
    tabs.switchTabs(secondTabBtn, firstTabBtn);
  }
}

// Вторая группа табов
const tabsAuth = new GraphTabs("auth");

const tabsTarifs = new GraphTabs("tarifs");
