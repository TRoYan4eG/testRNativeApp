import React from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMidleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './app/reducers'

import AppContainer  from './app/containers/appContainer'

const loggerMidleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
    const enhancer = compose(
        applyMiddleware(
            thunkMidleware,
            loggerMidleware
        ),
    )
    return createStore(reducer, initialState, enhancer)
}

const store = configureStore({})

export default class App extends React.Component {
    render(){
        return (
            <Provider store={ store }>
                <AppContainer />
            </Provider>)
    }

}



