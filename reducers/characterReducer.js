import { ROLL_CHARACTER } from '../actions/actionTypes';

const initialState = {
  name: 'Sycamore',
  class: 'Wizard',
  level: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ROLL_CHARACTER:
      return state;
    default:
      return state;
  }
};
