const reducer = (state, action) => {
  switch (action.type) {
    case 'CLEAR_CART':
      return {
        ...state,
        cart: []
      }
    default:
      throw new Error('invalid action...');
  }
  // return state;
}

export default reducer