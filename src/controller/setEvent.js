import GET_DOM from "./getDom.js";
import { TOGGLE_CLASS } from "./toggleClass.js";
import{ CLEAR_CLASS } from './clearClass.js'

let events = {
    buttonAdd:{
        dom: GET_DOM.buttonAdd,
        addEvent
    },
    buttonClear: {
        dom: '[data-js="clearButton"]',
        subtype: 'click',
        CLEAR_CLASS
    },
    labelItem: {
        dom: '[data-js="check"]',
        subtype: 'click',
        TOGGLE_CLASS
    }
  
}

function addEvent(callback) {
    this.dom.select.addEventListener(this.dom.typeClick, callback);
}


export default  events