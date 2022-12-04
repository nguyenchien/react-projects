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
    default:
      throw new Error('invalid action...');
  }
  // return state;
}

export default reducer