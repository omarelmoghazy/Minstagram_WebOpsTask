import { combineReducers } from '@reduxjs/toolkit'

import auth from './auth/authReducer'

export default combineReducers({ auth })