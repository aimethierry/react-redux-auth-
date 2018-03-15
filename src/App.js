import React, { Component } from 'react';
import {View, Text} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import {Card} from './components/common';
import LoginForm from './components/common/LoginForm';
import ReduxThunk from 'redux-thunk';

class App extends Component {
   
    componentWillMount () {
        firebase.initializeApp({
            apiKey: "AIzaSyCdWQUr89JPrps1t2me7JIGhmWKYQk9-bM",
            authDomain: "manager-839c1.firebaseapp.com",
            databaseURL: "https://manager-839c1.firebaseio.com",
            projectId: "manager-839c1",
            storageBucket: "manager-839c1.appspot.com",
            messagingSenderId: "902772858060"
        })


    }

    render () {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        )
    }
}

export default App;
