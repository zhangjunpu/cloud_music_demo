import { combineReducers } from 'redux-immutable';
import { reducer as recommentReducer } from '@/pages/discover/c-pages/recommend/store';

const reducer = combineReducers({
    recommend: recommentReducer,
});

export default reducer;