import {createStore, applyMiddleware} from 'redux';

import reducer from './reducers';

const logMiddleware = (store) => (dispatch) => (action) => {
    console.log(action.type, store.getState());
    return dispatch(action);
};

const stringMiddleware = () => (next) => (action) => { //next === dispatch в документациях
    if (typeof action === 'string') {
        return next(
            {type: action}
        );
    }
    return dispatch(action);
}


const store = createStore(reducer, applyMiddleware(stringMiddleware, logMiddleware)); // порядок имеет значение 

store.dispatch('HELLO WORLD'); // обрабатывает обычные строки

export default store;