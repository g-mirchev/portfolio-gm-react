import { type FC, type ReactElement } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './lib/store';

import Router from './router/Router';

/**
 * The root component of the application.
 *
 * This component sets up the global context for the Redux store, Redux Persist, and React Router,
 * which are essential for state management and navigation within the application.
 * It wraps the application's router configuration with `RouterProvider` to enable
 * declarative routing throughout the app. The `Provider` component makes the Redux
 * store available to any nested components that have been wrapped in the `connect()`
 * function or use Redux hooks. The `PersistGate` component delays the rendering of the
 * app's UI until the persisted state has been retrieved and saved to redux, ensuring
 * the application has access to the latest state upon startup.
 *
 * @returns {ReactElement} The root component that provides necessary context providers for the app.
 */
const App: FC = (): ReactElement => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
};

export default App;
