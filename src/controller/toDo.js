import getDom  from "./getDom.js";
import events from "./setEvent.js";

(function () {
    console.log(getDom.inputCadastro.select)
    events.buttonAdd.addEvent(function (){
        event.preventDefault();
        console.log("OIII")
        registerToDo(getDom.inputCadastro)
    });


    // const $buttonAdd = document.querySelector('[data-js="btnCadastro"]');
    // const $inputCadastro = document.querySelector('[data-js="inputCadastro"]');
    // const $divConteinerItem = document.querySelector('[data-js="containerItem"]');

    // addClick($buttonAdd);

    // function clearClick() {
    //     const $buttonClear = document.querySelectorAll('[data-js="clearButton"]');
    //     Array.from($buttonClear).forEach(function (button) {
    //         button.addEventListener('click', clearToDo, false);
    //     })
    // }
    // function clearToDo() {
    //     this.parentNode.remove()
    // }


    function activeClick() {
         events.labelItem.addAllEvent(function(){
            this.classList.toggle("todo__item--active")
         })
    }
    // function activeTodo() {
    //     this.classList.toggle("todo__item--active")
    // }


    // function addClick(name) {
    //     name.addEventListener("submit", addToDo)
    // }


    // function addToDo() {
    //     event.preventDefault();
    //     registerToDo($inputCadastro.value)
    // }
    function registerToDo(elementHTML) {
        let div = `
            <div class="todo__item">
                <label class="" data-js="check">
                    ${elementHTML.value}    
                </label>
                <button class="todo__button--clear" id="clearButton" data-js="clearButton">X</button>
            </div> 
        `
        getDom.divContainerItem.insertAdjacentHTML("beforeend", div)
        elementHTML.value = "";
        activeClick();
    }




})(window, document)