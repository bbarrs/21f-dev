import { combineReducers } from "redux";
import demoJsonReducer from './demoJsonReducer';

const reducers = combineReducers({
    demoJson: demoJsonReducer
});

export default reducers;