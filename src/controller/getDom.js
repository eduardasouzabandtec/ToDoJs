import { selectDom } from './selectQuery.js';

const GET_DOM = {
    inputCadastro: selectDom('[data-js="inputCadastro"]'),
    divContainerItem: selectDom('[data-js="containerItem"]'),
    buttonAdd:{
        select: selectDom('[data-js="btnCadastro"]'),
        typeClick: 'submit'
    }
};

export default GET_DOM