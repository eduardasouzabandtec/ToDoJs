(function () {


    const $buttonAdd = document.querySelector('[data-js="btnCadastro"]');
    const $inputCadastro = document.querySelector('[data-js="inputCadastro"]');
    const $divConteinerItem = document.querySelector('[data-js="containerItem"]');

    addClick($buttonAdd);

    function clearClick() {
        const $buttonClear = document.querySelectorAll('[data-js="clearButton"]');
        Array.from($buttonClear).forEach(function (button) {
            button.addEventListener('click', clearToDo, false);
        })
    }
    function clearToDo() {
        this.parentNode.remove()
    }


    function activeClick() {
        const $labelItem = document.querySelectorAll('[data-js="check"]');
        Array.from($labelItem).forEach(function (label) {
            label.addEventListener("click", activeTodo)
        })
    }
    function activeTodo() {
        this.classList.toggle("todo__item--active")
    }


    function addClick(name) {
        name.addEventListener("submit", addToDo)
    }


    function addToDo() {
        event.preventDefault();
        registerToDo($inputCadastro.value)
    }
    function registerToDo(value) {
        let div = `
            <div class="todo__item">
                <label class="" data-js="check">
                    ${value}    
                </label>
                <button class="todo__button--clear" id="clearButton" data-js="clearButton">X</button>
            </div> 
        `
        $divConteinerItem.insertAdjacentHTML("beforeend", div)
        $inputCadastro.value = "";
        activeClick();
        clearClick();
    }

})(window, document)