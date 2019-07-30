import { combineReducers } from 'redux-immutable';
import {reducer as header} from './../common/Header/store';
import { reducer as show } from "./../page/tuijian/store"
export const Reducer =  combineReducers({
    header,show
})