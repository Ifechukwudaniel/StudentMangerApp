const initialState = {
  screen: 'Loading',
};

export const screenReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_SCREEN':
      return {...state, screen: action.payload};

    default:
      return {...state};
  }
};
