import {routerReducer} from 'react-router-redux'

export default {
  reducer: function (state, action) {
    const routing = routerReducer(state.routing, action)
    return {...state, routing}
  }
}
