import { useDispatch, useSelector, useStore } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch, AppStore } from './store';

/**
 * A custom hook that wraps `useDispatch` from React Redux with the type of the App's dispatch function.
 * It is used to dispatch actions in the application with TypeScript support for the dispatch function type.
 *
 * @returns {AppDispatch} The dispatch function for the Redux store, typed with the App-specific dispatch type.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * A custom hook that wraps `useSelector` from React Redux with typing for the RootState.
 * It allows selecting parts of the state from the Redux store with TypeScript support for the state shape.
 *
 * @template TSelected The type of the selected slice of state.
 * @param { (state: RootState) => TSelected } selector A selector function to extract a part of the state.
 * @param { EqualityFn<TSelected> } [equalityFn] An optional function to compare the selected state to its previous value.
 * @returns {TSelected} The selected state.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * A custom hook that wraps `useStore` from React Redux, providing access to the Redux store with TypeScript support for the store type.
 * This hook is useful for accessing the store directly, although direct access is typically not necessary and should be used sparingly.
 *
 * @returns {AppStore} The Redux store, typed with the App-specific store type.
 */
export const useAppStore: () => AppStore = useStore;
