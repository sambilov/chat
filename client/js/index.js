import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import { socket } from './socket'

const store = configureStore()
socket.on('initial state', (state) => {
    store.dispatch({
        type: 'INITIAL_STATE',
        payload: state
    })
})

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)