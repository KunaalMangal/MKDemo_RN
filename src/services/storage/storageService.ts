import { createMMKV } from 'react-native-mmkv';

export const storage = createMMKV({
  id: 'secure-storage',
  encryptionKey: 'secure-storage-key',
});

type SupportedTypes = string | number | boolean | object | ArrayBuffer | null;

type StoredWithType<T extends SupportedTypes> = {
  __type: 'string' | 'number' | 'boolean' | 'object' | 'buffer' | 'null';
  value: T;
};

export const appStorage = {
  setItem: <T extends SupportedTypes>(key: string, value: T): boolean => {
    try {
      if (value === null) {
        storage.remove(key);
        return true;
      }

      let type: StoredWithType<T>['__type'];
      let storedValue: string | ArrayBuffer;

      if (typeof value === 'string') {
        type = 'string';
        storedValue = value;
      } else if (typeof value === 'number') {
        type = 'number';
        storedValue = value.toString();
      } else if (typeof value === 'boolean') {
        type = 'boolean';
        storedValue = value.toString();
      } else if (value instanceof ArrayBuffer) {
        type = 'buffer';
        storage.set(`${key}:__type`, type);
        storage.set(key, value);
        return true;
      } else if (typeof value === 'object') {
        type = 'object';
        storedValue = JSON.stringify(value);
      } else {
        throw new Error(`Unsupported type for key: ${key}`);
      }

      const payload = JSON.stringify({ __type: type, value: storedValue });
      storage.set(key, payload);
      return true;
    } catch (error) {
      console.error(`Storage Error [setItem]: ${key}`, error);
      return false;
    }
  },

  getItem: <T extends SupportedTypes = any>(key: string): T | null => {
    try {
      // Check if it's a binary buffer
      const buffer = storage.getBuffer(key);
      if (buffer) {
        const type = storage.getString(`${key}:__type`);
        if (type === 'buffer') {
          return buffer as T;
        }
      }

      const raw = storage.getString(key);
      if (!raw) {
        return null;
      }

      const parsed = JSON.parse(raw) as StoredWithType<any>;

      switch (parsed.__type) {
        case 'string':
          return parsed.value as T;

        case 'number':
          return Number(parsed.value) as T;

        case 'boolean':
          return (parsed.value === 'true') as T;

        case 'object':
          if (typeof parsed.value === 'string') {
            return JSON.parse(parsed.value) as T;
          }
          return parsed.value as T;

        default:
          return parsed.value as T;
      }
    } catch (error) {
      console.error(`Storage Error [getItem]: ${key}`, error);
      return null;
    }
  },

  removeItem: (key: string): boolean => {
    try {
      storage.remove(key);
      storage.remove(`${key}:__type`);
      return true;
    } catch (error) {
      console.error(`Storage Error [removeItem]: ${key}`, error);
      return false;
    }
  },

  hasItem: (key: string): boolean => {
    try {
      return storage.contains(key);
    } catch (error) {
      console.error(`Storage Error [hasItem]: ${key}`, error);
      return false;
    }
  },

  getAllKeys: (): string[] => {
    try {
      return storage.getAllKeys();
    } catch (error) {
      console.error('Storage Error [getAllKeys]', error);
      return [];
    }
  },

  clearAll: (): void => {
    try {
      storage.clearAll();
    } catch (error) {
      console.error('Storage Error [clearAll]', error);
    }
  },
};
