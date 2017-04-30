import {combineReducers, createStore, applyMiddleware} from 'redux'
import{start} from '../Actions'

function index(state={}, action){
	switch(action.type){
		case 'first': 
			return{
				name: 'fuck'
			}
		default: 
			return state
	}
}


export default index