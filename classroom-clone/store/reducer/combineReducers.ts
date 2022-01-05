import { Reducer, combineReducers } from 'redux';
import IState from '../interface/IState';
import reducerAuth from './auth/reducer';
import reducerClassroom from './classroom/reducer';
import reducerComment from './comment/reducer';

const reducers: Reducer<IState> = combineReducers<IState>({
    auth: reducerAuth,
    classroom: reducerClassroom,
    comment: reducerComment
});

export default reducers;
