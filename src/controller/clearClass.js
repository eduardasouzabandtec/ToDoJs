import { selectDomAll } from "./selectQuery.js";

export const CLEAR_CLASS = function () {
    let item = this;
    Array.from(selectDomAll(item.dom)).forEach( elementHTML => elementHTML.addEventListener(item.subtype, clearClass))
}

function clearClass() {
    this.parentNode.remove();
}