import React, { createContext, useContext,useReducer } from 'react'
const StateContext= createContext();
const DispatchContext= createContext();

const reducer=(state,action)=>{

  switch(action.type){
    case "Add":
      
      return[...state,{id:action.id,foodimg:action.foodimg,foodname:action.foodname,foodprice:action.foodprice,Foodquantity: 1}]

      case "updateQuantity":
      return state.map((item, index) => (index === action.index ? { ...item, Foodquantity: action.quantity } : item));
    //   const updatedCart = [...state];
    // updatedCart[action.index].Foodquantity = action.quantity;
    // return updatedCart
      
    case "remove":
      return state.filter((_, index) => index !== action.index);
      // let newArr =[...state]
      // newArr.splice(action.index,1)
      // return newArr
     
    case "DROP":
        let empArray = []
        return empArray

    default:
      console.log("error")
  }



}

export const CartProvider=({children})=> {
    const[state,dispatch]=useReducer(reducer,[])

  return (
    <DispatchContext.Provider value={dispatch}>
        <StateContext.Provider value={state}>
            {children}
</StateContext.Provider>
    </DispatchContext.Provider>
  )
}

export const useStateCart =()=>useContext(StateContext)
export const useDispatchCart =()=>useContext(DispatchContext)