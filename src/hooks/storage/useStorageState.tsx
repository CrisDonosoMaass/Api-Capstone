import * as React from 'react';

import { storage } from '../../utils/storage';

type UseStateHook<T> = [[boolean, T | null], (value: T | null) => void];

function useAsyncState<T>(
  initialValue: [boolean, T | null] = [true, null],
): UseStateHook<T> {
  return React.useReducer(
    (
      _state: [boolean, T | null],
      action: T | null = null,
    ): [boolean, T | null] => [false, action],
    initialValue,
  ) as UseStateHook<T>;
}

export async function setStorageItemAsync(key: string, value: string | null) {
  if (storage.type === 'sync') {
    if (value === null) {
      storage.removeItemSync(key);
    } else {
      storage.setItemSync(key, value);
    }
  } else {
    if (value === null) {
      storage.removeItemAsync(key);
    } else {
      storage.setItemAsync(key, value);
    }
  }
}

export function useAsyncStorageState(key: string): UseStateHook<string> {
  // Public
  const [state, setState] = useAsyncState<string>();

  // Get
  React.useEffect(() => {
    if (storage.type === 'sync') {
      setState(storage.getItemSync(key));
    } else {
      storage.getItemAsync(key).then((value) => {
        setState(value);
      });
    }
  }, [key]);

  // Set
  const setValue = React.useCallback(
    (value: string | null) => {
      setState(value);
      setStorageItemAsync(key, value);
    },
    [key],
  );

  return [state, setValue];
}
