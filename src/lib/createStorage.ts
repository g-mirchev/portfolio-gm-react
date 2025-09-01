import createWebStorage from 'redux-persist/lib/storage/createWebStorage';

/**
 * Creates a no-op (no operation) storage that resolves all operations with null or undefined.
 * This storage is used as a fallback when running in environments where `window` is not defined,
 * such as server-side rendering (SSR) environments.
 *
 * The no-op storage API mimics the `localStorage` and `sessionStorage` APIs but does not actually store data.
 *
 * @returns An object with no-op implementations of `getItem`, `setItem`, and `removeItem` methods.
 */
const _createNoopStorage = () => {
  return {
    getItem(): Promise<null> {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: number): Promise<number> {
      return Promise.resolve(value);
    },
    removeItem(): Promise<null> {
      return Promise.resolve(null);
    },
  };
};

/**
 * Creates a storage object for use with redux-persist. It abstracts the storage mechanism
 * allowing for use in both browser and server-side environments. In the browser, it defaults
 * to using localStorage. In server-side environments or any environment where `window` is undefined,
 * it falls back to a no-op storage that performs no actual storage operations but maintains the API shape.
 *
 * This allows for seamless use of redux-persist in universal (isomorphic) applications without needing
 * to worry about runtime errors in environments lacking a `window` object.
 *
 * @returns {ReturnType<typeof createWebStorage> | ReturnType<typeof _createNoopStorage>} A storage object compatible with redux-persist.
 */
const createStorage = () => {
  if (typeof window !== 'undefined') {
    return createWebStorage('local');
  } else {
    return _createNoopStorage();
  }
};

export default createStorage;
