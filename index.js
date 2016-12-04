import { createStore } from 'redux'
import { update } from 'yo-yo'
import Router from 'sheet-router'

import reducer from './reducer'

import Home from './components'
import Info from './components/info'
import The404 from './components/404'

const initView = document.createElement('div')
document.querySelector('main').appendChild(initView)

const initState = {
  title: 'Quickstart',
  route: '/',
  lastRoute: 'lemon'
}

const { getState, dispatch, subscribe } = createStore(reducer, initState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Home],
  ['/info', (params) => Info],
  ['/404', (params) => The404]
])

subscribe(() => {
  const state = getState()
  const newView = route(state.route)(state, dispatch)
  update(initView, newView)
})

dispatch({type: 'lemon'})
