import { combineReducers } from 'redux';

import mainScreenReducer from './containers/MainScreen/reducer';
import authScreenReducer from './containers/AuthScreen/reducer';

const rootReducer = combineReducers({
    mainScreen: mainScreenReducer,
    authScreen: authScreenReducer,
});

export default rootReducer;
