import domObject from "./domReading.js";
const setListeners = function () {
  setInterval(() => {
    domObject.date.innerHTML = Date();
  }, 1000);
};
export default setListeners;
