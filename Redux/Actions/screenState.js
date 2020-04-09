export const CHANGE_SCREEN = data => {
  return dispatch => {
    dispatch({type: 'CHANGE_SCREEN', payload: data});
  };
};
