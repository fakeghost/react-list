import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../Reducers'

const store = createStore(
	rootReducer,
	applyMiddleware(
		thunkMiddleware
	)
)

export default store