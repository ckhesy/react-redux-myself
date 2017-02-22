/*
* @Author: kaikai
* @Date:   2017-02-21 22:43:47
* @Last Modified by:   kaikai
* @Last Modified time: 2017-02-22 22:17:56
*/

import React from "react"
import { render } from 'react-dom'
import { Router, Route, hashHistory} from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import {configureStore} from './stores/ConfigureStore'
import {detectAndInjectToken} from './utils/auth'
import routes from './containers/routes'

//use redux store to manage state of application
const store = configureStore()
//combine 
const history = syncHistoryWithStore(hashHistory, store)

detectAndInjectToken && detectAndInjectToken()

render(
	<Provider store={store}>
		<Router routes={routes} history={history}/>
	</Provider>, 
	document.getElementById("content"))