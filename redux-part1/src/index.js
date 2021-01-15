import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore,applyMiddleware,combineReducers} from 'redux'
import {Provider} from 'react-redux'
import nameReducer from './reducers/nameReducer'
import thunk from 'redux-thunk'
import wishReducer from './reducers/wishReducer'

const masterReducer=combineReducers({
  name:nameReducer,
  wish:wishReducer
})

const store=createStore(masterReducer,{name:'ramesh',wish:['eat','sleep']},applyMiddleware(thunk));

ReactDOM.render(
 <Provider store={store}>
    <App />
    </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
