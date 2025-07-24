import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import chatReducer from "./chatSlice";
import authReducer from "./authSlice";
import aiReducer from "./aiSlice";

// dummy storage object that does nothing on the server
const createNoopStorage = () => {
  return {
    getItem(_key: string) {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: any) {
      return Promise.resolve(value);
    },
    removeItem(_key: string) {
      return Promise.resolve();
    },
  };
};

//if we're on the browser or the server
const storageToUse =
  typeof window !== "undefined"
    ? storage // If on browser, use real storage
    : createNoopStorage();

const persistConfig = {
  key: "root",
  version: 1,
  storage : storageToUse,
  whitelist: ["chat", "auth", "ai"],
};

const rootReducer = combineReducers({
  chat: chatReducer,
  auth: authReducer,
  ai: aiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
