//import { createStore } from './miniReduxStoreExmple';
import { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducer';
// import { 
//     sayHiOnDispatch,
//     includeMeaningOfLife
// } from './exampleAddons/enhancers';
import { print1, print2, print3 } from './exampleAddons/middleware';

let preloadedState;
const persistedTodoString = localStorage.getItem('todos');

if (persistedTodoString) {
    preloadedState = {
        todos: JSON.parse(persistedTodoString)
    }
}

//const store = createStore(rootReducer, preloadedState);

//const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);
//const store = createStore(rootReducer, undefined, composedEnhancer);

// const middlewareEnhancer = applyMiddleware(print1, print2, print3);
// const store = createStore(rootReducer, middlewareEnhancer);

const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1, print2, print3)
)
const store = createStore(rootReducer, composedEnhancer)

export default store;