import { combineReducers } from 'redux'
import userReducer from './reducers/user'
import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    user: userReducer,
})

const store = configureStore(rootReducer)

export default store
