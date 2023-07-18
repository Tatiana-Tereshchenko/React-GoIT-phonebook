import { configureStore } from "@reduxjs/toolkit";
import {filtersReducer}   from "./filterSlice";
import { contactsReducer } from './contactsSlice';
import  authReducer  from "./auth/authSlice";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

export const store = configureStore({
    reducer: {
        auth:authReducer,
        contacts: contactsReducer,
        filter: filtersReducer
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store)