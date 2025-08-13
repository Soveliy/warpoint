import AirDatepicker from "air-datepicker";
import { createPopper } from "@popperjs/core";
import { isMobile } from "../functions/check-viewport.js";

new AirDatepicker("#calendar", {
  position: "right center",
  // inline: true,
  autoClose: true,
  isMobile: isMobile(),
});
