import {combineReducers} from 'redux';
import {dataReducer} from './dataReducer';
import {defaultReducer} from './defaultReducer';

export default combineReducers({
    mdata:dataReducer,
    ddata:defaultReducer
});

/*

  combineReducers will return an object using which we can
  create Store

  combine reducers will group all the reducers into one objec */