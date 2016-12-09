import { createStore } from 'redux'
import { update } from 'yo-yo'
import Router from 'sheet-router'
import reducer from './reducer'
import Login from './components'
import SignUp from './components/signUp'
import Play from './components/play'
import MyMap from './components/mymap'
import The404 from './components/404'
import showmap from './components/showmap'

// window.GoogleMapsLoader = require('google-maps')
// GoogleMapsLoader.KEY = 'AIzaSyDNqZpfY5wCQjq78QqttpZJ05714XxQTuI'
//
//
//   GoogleMapsLoader.load(function(google) {
//       new google.maps.Map(document.querySelector('main'), {
//              zoom: 1,
//              center: {lat: 34, lng: -40.605}
//            })
//       console.log(google.maps)
//   })


const initView = document.createElement('div')
document.querySelector('main').appendChild(initView)

const initState = {
  title: 'Quickstart',
  route: '/',
  lastRoute: 'lemon',
  loginDetails: {},
  newUserDetails: {}
}

showmap()

const { getState, dispatch, subscribe } = createStore(reducer, initState)

const route = Router({ default: '/404' }, [
  ['/', (params) => Login],
  ['/signUp', (params) => SignUp],
  ['/play', (params) => Play],
  ['/mymap', (params) => MyMap],
  ['/404', (params) => The404]
])

subscribe(() => {
  const state = getState()
  const newView = route(state.route)(state, dispatch)
  update(initView, newView)
})

dispatch({type: 'lemon'})
