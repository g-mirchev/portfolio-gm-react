import { combineSlices } from '@reduxjs/toolkit';

/** Reducers */
import { themeReducer } from 'modules/theme';
/**
 * Combines multiple reducer functions into a single reducing function that can be passed
 * to the Redux store.
 *
 * @returns {Reducer<CombinedState<unknown>, AnyAction>} A reducer that invokes every reducer
 * inside the passed object, and constructs a state object with the same shape.
 */
export const rootReducer = combineSlices({
  // Regular slice reducers
  theme: themeReducer,
});
