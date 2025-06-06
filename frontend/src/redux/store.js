import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice.js";
import { persistReducer, persistStore } from "redux-persist";
import  storage  from "redux-persist/lib/storage";
//import persistStore from "redux-persist/es/persistStore";

const rootReducer = combineReducers({
  user: userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedState = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
