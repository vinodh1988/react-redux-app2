import {combineReducers} from 'redux';
import {dataReducer} from './dataReducer';
import {defaultReducer} from './defaultReducer';

export default combineReducers({
    mdata:dataReducer,
    ddata:defaultReducer
});
