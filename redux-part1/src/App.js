import React from 'react'
import './App.css';
import {connect} from 'react-redux'

function App(props) {
  console.log(props)
  return (
    <div className="App">
     <h1>Hi i am app component!!</h1>
     <h1>my name is {props.myname}</h1>
     <button onClick={()=>{props.changeName("Palak")}}>Change It</button>
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
    changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
