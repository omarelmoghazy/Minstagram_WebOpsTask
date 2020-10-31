import createSagaMiddleware from 'redux-saga'
import {createStore, applyMiddleware} from '@reduxjs/toolkit'

import rootReducer from './rootReducer'
import rootSaga from './rootSaga'


const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store