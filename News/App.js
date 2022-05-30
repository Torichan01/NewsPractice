import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { Provider } from 'react-redux'
import store from './screens/store'

export default App = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    )
}
