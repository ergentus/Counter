import {combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from './count-reducer'

export type AppStateType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
	counter: counterReducer
})

export const store = legacy_createStore(rootReducer)

// @ts-ignore
window.store = store
