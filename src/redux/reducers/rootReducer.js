import { combineReducers } from "redux";

import htmlcontentReducer from './htmlcontentReducer';

const rootReducer = combineReducers({
  htmlContent: htmlcontentReducer,
});

export default rootReducer;
