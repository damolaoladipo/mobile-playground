export interface IStorage {
  keepData: (key: string, data: object | string) => Promise<void>;
  fetchData: (key: string) => Promise<string | null>;
  getJSON: (key: string) => Promise<any | null>;
  exists: (key: string) => Promise<boolean>;
  updateData: (key: string, newData: object | string) => Promise<void>;
  mergeData: (key: string, newData: object) => Promise<void>;
  removeData: (key: string) => Promise<void>;
  clearAll: () => Promise<void>;
  multiKeep: (items: { key: string; data: object | string }[]) => Promise<void>;
  multiFetch: (keys: string[]) => Promise<{ [key: string]: any | null }>;
  multiRemove: (keys: string[]) => Promise<void>;
}
