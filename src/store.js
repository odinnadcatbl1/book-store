import {createStore, applyMiddleware} from 'redux';
import ThunkMiddleware from 'redux-thunk';
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
    return next(action);
}


const store = createStore(reducer, applyMiddleware(ThunkMiddleware, stringMiddleware, logMiddleware)); // порядок имеет значение 

store.dispatch('HELLO WORLD'); // обрабатывает обычные строки

const delayedActionCreator = (timeout) => (dispatch) => {
    setTimeout(()=>dispatch({
        type: 'DELAYED_ACTION'
    }), timeout);
};

store.dispatch(delayedActionCreator(3000)); // благодаря thunkmiddleware может обрабатывать и функции

export default store;