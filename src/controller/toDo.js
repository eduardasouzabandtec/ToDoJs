import GET_DOM  from "./getDom.js";
import events from "./setEvent.js";

(function () {
    events.buttonAdd.addEvent(() =>{
        event.preventDefault();
        registerToDo(GET_DOM.inputCadastro);
    });

    function activeClick() {
         events.labelItem.TOGGLE_CLASS();
    }

    function clearClick() {
        events.buttonClear.CLEAR_CLASS();
    }

    function registerToDo(elementHTML) {
        let div = `
            <div class="todo__item">
                <label class="" data-js="check">
                    ${elementHTML.value}    
                </label>
                <button class="todo__button--clear" id="clearButton" data-js="clearButton">X</button>
            </div> 
        `
        GET_DOM.divContainerItem.insertAdjacentHTML("beforeend", div)
        elementHTML.value = "";
        activeClick();
        clearClick();
    }




})(window, document)