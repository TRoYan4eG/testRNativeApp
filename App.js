import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunkMidleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import reducer from './app/reducers'

import {
    Alert,
    AppRegistry,
    Button,
    StyleSheet,
    View,
    Text
} from 'react-native';

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
                <Pechkin />
            </Provider>)
    }

}

class Pechkin extends Component {
    render() {
        return <View>
            <Button style={{marginTop: 100, alignItems: 'flex-end'}} onPress={() => Alert.alert('Magic')} title="Make some magic!"/>
        </View>
    }
}



