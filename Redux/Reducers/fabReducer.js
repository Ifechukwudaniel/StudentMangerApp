const initialState = {
  cart: [],
};

export const fabReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT_FAB':
      return {...state, cartItems: state.cartItems + 1};

    default:
      return {...state};
  }
};
