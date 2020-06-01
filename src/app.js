import React, { Component } from 'react';

import Authentic from './navigation/Authentic';
import reducer from './redux/reducer/reducer';
//redux
import {createStore,applyMiddleware} from 'redux';
import {Provider}   from 'react-redux';

//redux saga
import createSagaMiddleware   from 'redux-saga';
import rootSaga from './saga/rootSaga';

const  sagaMiddleware=createSagaMiddleware();


let store=createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);
export default class app extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Provider store={store} >
                <Authentic />
            </Provider>
            
        );
    }
}