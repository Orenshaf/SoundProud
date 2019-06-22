import { combineReducers } from 'redux';
import usersReducer from './session/users_reducer';
import tracksReducer from './tracks/tracks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    tracks: tracksReducer
})

export default entitiesReducer;