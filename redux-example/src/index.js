import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import { createStore } from 'redux';
import reducers from './reducers';

import { Provider } from 'react-redux';

const store = createStore(reducers);

/*
// Action TEST Code

import * as actions from './actions';

console.log(store.getState());
const unsubscribe = store.subscribe(() => console.log(store.getState())); // action listener

store.dispatch(actions.increment());
store.dispatch(actions.increment())
store.dispatch(actions.decrement())
store.dispatch(actions.setColor([200, 200, 200]))

unsubscribe(); // 이후에는 store.subscribe가 실행 되지 않음 (console이 나오지 않음)

store.dispatch(actions.setColor([210, 210, 210]));
*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
