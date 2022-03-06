import domObject from "./domReading.js";
import { DateTime } from "./luxonLibrary.js";

const displayDate = function () {
  setInterval(() => {
    domObject.date.innerHTML = DateTime.now().toLocaleString(
      DateTime.DATETIME_MED_WITH_SECONDS
    );
  }, 1000);
};
export default displayDate;
