/*
* @Author: kaikai
* @Date:   2017-02-21 22:51:41
* @Last Modified by:   kaikai
* @Last Modified time: 2017-02-21 22:55:46
*/

import React from "react"
import { render } from 'react-dom'
import { Route, IndexRoute } from 'react-router'
import HomePage from './HomePage'

function requireAuth(nextState, replace, next) {
	if(auth.loggedIn()) {
		next()
	} else {
		let targetUrl = nextState.location.pathname
		let query = nextState.location.query
		replace({
			pathname: '/login',
			state: { nextPathname: nextState.location.pathname },
			query: {...query, targetUrl}
		})
    	next()
	}
}
module.exports = (
	<Route path="/">
	   <IndexRoute component={HomePage}/>
	     </Route>
)