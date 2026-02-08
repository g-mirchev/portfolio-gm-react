import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createStorage from './createStorage';
import { rootReducer } from './config';

/**
 * Custom storage instance for Redux Persist.
 */
const storage = createStorage();

/**
 * Configuration for persisting the Redux store.
 * - `key`: The key used for storing the state in the storage.
 * - `storage`: The storage layer used for persisting the state.
 * - `whitelist`: Array of reducer names to include in persistence.
 * - `throttle`: Throttling time for persisting the state changes.
 */
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'profile', 'theme'],
  throttle: 1000,
  // transforms: [encryptor], // Add the encryptor transform here if using encryption
};

/**
 * A wrapper around the rootReducer to enable persistence.
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Creates and configures the Redux store with persistence and middleware.
 * Includes special handling for persistence actions to bypass serializable checks.
 *
 * @returns {AppStore} The configured Redux store.
 */
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
};

/**
 * The main Redux store instance for the application.
 */
export const store = makeStore();

/**
 * The persistor for the Redux store, responsible for managing persistence operations.
 */
export const persistor = persistStore(store);

/**
 * Type definition for the configured Redux store.
 */
export type AppStore = ReturnType<typeof makeStore>;

/**
 * Type definition for the root state of the Redux store.
 */
export type RootState = ReturnType<typeof persistedReducer>;

/**
 * Type definition for the Redux dispatch function, with app-specific typings.
 */
export type AppDispatch = AppStore['dispatch'];
