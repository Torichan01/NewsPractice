import React from 'react'
import AppNavigator from './navigation/AppNavigator'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import store, { persister } from './store'

export default function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persister}>
                <AppNavigator />
            </PersistGate>
        </Provider>
    )
}
