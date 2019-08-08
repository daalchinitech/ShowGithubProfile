import {createStore} from 'redux';  

import Reducer from './reducer';
import thunk from 'redux-thunk'
import {compose,applyMiddleware } from 'redux';


const InitialState= {
    err:null,
    loading: true,
    currentUser:null,
    followers :[],
    following:[],
    repo:[],
    starred:[],
    organizations:[],

}
const devTools=  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store= createStore(
    Reducer,
    InitialState, 
    compose(
        applyMiddleware(thunk),
        devTools
         )
); 

export default store;