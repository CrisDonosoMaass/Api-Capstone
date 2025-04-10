import { Platform } from 'react-native';
import { MMKV } from 'react-native-mmkv';
import { isRunningInExpoGo } from 'expo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';

interface SyncStorageInterface {
  type: 'sync';
  getItemSync(key: string): string | null;
  setItemSync(key: string, value: string): void;
  removeItemSync(key: string): void;
}

interface AsyncStorageInterface {
  type: 'async';
  getItemAsync(key: string): Promise<string | null>;
  setItemAsync(key: string, value: string): Promise<void>;
  removeItemAsync(key: string): Promise<void>;
}

type Storage = SyncStorageInterface | AsyncStorageInterface;

export class MMKVStorage implements SyncStorageInterface {
  public readonly type = 'sync';
  public readonly mmkvInstance: MMKV;
  constructor() {
    this.mmkvInstance = new MMKV();
  }
  getItemSync(key: string) {
    return this.mmkvInstance.getString(key) ?? null;
  }
  setItemSync(key: string, value: string) {
    this.mmkvInstance.set(key, value);
  }
  removeItemSync(key: string) {
    this.mmkvInstance.delete(key);
  }
}

class LocalStorage implements SyncStorageInterface {
  public readonly type = 'sync';
  getItemSync(key: string) {
    return localStorage.getItem(key);
  }
  setItemSync(key: string, value: string) {
    localStorage.setItem(key, value);
  }
  removeItemSync(key: string) {
    localStorage.removeItem(key);
  }
}

class AsyncStorageWrapper implements AsyncStorageInterface {
  public readonly type = 'async';
  async getItemAsync(key: string) {
    return await AsyncStorage.getItem(key);
  }
  async setItemAsync(key: string, value: string) {
    await AsyncStorage.setItem(key, value);
  }
  async removeItemAsync(key: string) {
    await AsyncStorage.removeItem(key);
  }
}

export const storage: Storage =
  Platform.OS === 'web'
    ? new LocalStorage()
    : isRunningInExpoGo()
      ? new AsyncStorageWrapper()
      : new MMKVStorage();

const clientSyncStorage =
  storage.type === 'sync'
    ? {
        getItem: (key: string) => {
          return storage.getItemSync(key);
        },
        setItem: (key: string, value: string) => {
          storage.setItemSync(key, value);
        },
        removeItem: (key: string) => {
          storage.removeItemSync(key);
        },
      }
    : null;

export const clientPersister = createSyncStoragePersister({
  storage: clientSyncStorage,
});
