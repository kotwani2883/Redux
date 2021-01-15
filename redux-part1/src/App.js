import React from 'react'
import './App.css';
import {connect} from 'react-redux'
import {anotherName,addWish} from './actions/myaction'

function App(props) {
  const mywish=props.mywish.map(item=>{
    return <h2 key={Math.random()}>{item}</h2>
  })
  console.log(props)
  return (
    <div className="App">
     <h1>Hi i am app component!!</h1>
     <h1>my name is {props.myname}</h1>
     {mywish}
     <button onClick={()=>{props.changeName()}}>Change It</button>
     <button onClick={()=>{props.addWish()}}>Add wish!!</button>
    </div>
  );
}

const mapStateToProps =(state)=>{
  return {
    myname:state.name,
    mywish:state.wish
  }
}

const mapDispatchToProps=(dispatch)=>{
  return {
    changeName:()=>{dispatch(anotherName())},
    addWish:()=>{dispatch(addWish())}
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
