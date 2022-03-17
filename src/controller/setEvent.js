import getDom from "./getDom.js";
import { selectDomAll } from "./selectQuery.js";
let events = {
    buttonAdd:{
        dom: getDom.buttonAdd,
        addEvent
    },
    buttonClear: {
        dom: getDom.buttonClear,
        addAllEvent
    },
    labelItem: {
        dom: '[data-js="check"]',
        subtype: 'click',
        addAllEvent
    }
  
}

function addEvent(callback) {
    
    this.dom.select.addEventListener(this.dom.typeClick, callback)
}

function addAllEvent(callback) {
    let type = this.subtype;
    Array.from(selectDomAll(this.dom)).forEach(function (element){
        element.addEventListener(type, callback)
    })

}

export default  events