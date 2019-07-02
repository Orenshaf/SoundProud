import { combineReducers } from 'redux';
import usersReducer from './session/users_reducer';
import tracksReducer from './tracks/tracks_reducer';
import commentsReducer from './comments/comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    tracks: tracksReducer,
    comments: commentsReducer
})

export default entitiesReducer;