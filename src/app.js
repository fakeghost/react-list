import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link} from 'react-router'
import { FormList } from './Component/form'
import { PropTypes } from 'prop-types'

class App extends React.Component{
	render(){
		return(
			<FormList />
		) 
	}
}

render((
	<Router>
		<Route path='/' component={App}></Route>
	</Router>
), document.body)