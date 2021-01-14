import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import {anotherName} from './actions/myaction'

function App(props) {
  console.log(props)
  return (
    <div className="App">
     <h1>Hi i am app component!!</h1>
     <h1>my name is {props.myname}</h1>
     <button onClick={()=>{props.changeName()}}>Change It</button>
    </div>
  );
}

const mapStateToProps =(state)=>{
  return {
    myname:state.name
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    changeName:()=>{dispatch(anotherName())}
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
