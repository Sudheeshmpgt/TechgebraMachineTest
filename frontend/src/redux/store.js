import {configureStore} from '@reduxjs/toolkit'
import productReducer from '../redux/productData'
import storage from 'redux-persist/lib/storage'
import {persistReducer} from 'redux-persist'
import {combineReducers} from 'redux'

const persistConfig = {
  key: 'root',
  storage,
}

const reducer = combineReducers({
  productData: productReducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer,
})

export default store; 