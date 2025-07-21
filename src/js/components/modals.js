import MicroModal from "micromodal";
MicroModal.init({
  disableScroll: true,
  disableFocus: true,
});

import "swiped-events";
const modalHead = document.querySelector(".location__header");
if (modalHead) {
  modalHead.addEventListener("swiped-down", function (e) {
    MicroModal.close("location");
  });
}
