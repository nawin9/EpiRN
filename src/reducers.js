import { combineReducers } from 'redux';

import mainScreenReducer from './containers/MainScreen/reducer';
import authScreenReducer from './containers/AuthScreen/reducer';

const rootReducer = combineReducers({
    mainReducer: mainScreenReducer,
    authReducer: authScreenReducer,
});

export default rootReducer;
