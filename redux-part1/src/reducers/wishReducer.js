

const nameReducer=(state=[],action)=>{
 if(action.type==='ADD_WISH')  
 { 
   return [...state,'code']
 }
return state;
}

export default nameReducer;