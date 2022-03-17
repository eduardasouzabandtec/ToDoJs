import { selectDom, selectDomAll } from './selectQuery.js';

const getDom = {
    inputCadastro: selectDom('[data-js="inputCadastro"]'),
    divContainerItem: selectDom('[data-js="containerItem"]'),
    buttonAdd:{
        select: selectDom('[data-js="btnCadastro"]'),
        typeClick: 'submit'
    },
    buttonClear: {
        select: Array.from(selectDomAll('[data-js="clearButton"]')),
        typeClick: 'click'
    },
    labelItem: {
        select: '',
        typeClick: 'click'
    },
};

export default getDom