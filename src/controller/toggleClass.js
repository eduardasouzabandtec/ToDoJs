
import { selectDomAll } from "./selectQuery.js";

export const TOGGLE_CLASS = function () {
    let item = this;
    Array.from(selectDomAll(item.dom)).forEach(function (element) {
        element.addEventListener(item.subtype, toggle)
    })
}

function toggle() {
    this.classList.toggle("todo__item--active")
}