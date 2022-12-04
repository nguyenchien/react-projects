const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      }
    case 'REMOVE':
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
      }
    case 'INCREASE':
      let tempCart = state.cart.map((item) => {
        // update cart item match condition
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount + 1
          }
        }
        return item; // keep cart items don't match condition
      });
      
      return {
        ...state,
        cart: tempCart
      }
    case 'DECREASE':
      let tempCart02 = state.cart.map((item) => {
        // update cart item match condition
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount - 1
          }
        }
        return item; // keep cart items don't match condition
      }).filter((item) => item.amount !==0); // remove items has amount <= 0
      
      return {
        ...state,
        cart: tempCart02
      }
    default:
      throw new Error('invalid action...');
  }
  // return state;
}

export default reducer