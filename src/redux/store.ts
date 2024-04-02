import { combineReducers, configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./slices/settingsSlice";
import recentlyReadReducer from "./slices/recentlyReadSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  settingsReducer,
  recentlyReadReducer,
});

const presistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: presistedReducer,
  devTools: import.meta.env.VITE_NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistot = persistStore(store);
