import { Map } from 'immutable';

import * as actionTypes from './constant';

const defaultState = Map({
  currentSong: null,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    default:
      return state;
  }
}

export default reducer;