import AsyncStorage from "@react-native-async-storage/async-storage";
import { IStorage } from "./interface";


const keep = async (key: string, data: object | string): Promise<void> => {
  try {
    const value = typeof data === "object" ? JSON.stringify(data) : data;
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.error("Error storing data:", error);
  }
};

const fetch = async (key: string): Promise<string | null> => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? data : null;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

const getJSON = async (key: string): Promise<any | null> => {
  try {
    const data = await fetch(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null;
  }
};

const exists = async (key: string): Promise<boolean> => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null;
  } catch (error) {
    console.error("Error checking existence of key:", error);
    return false;
  }
};

const update = async (key: string, newData: object | string): Promise<void> => {
  try {
    const existingData = await fetch(key);
    if (existingData) {
      const parsedData = typeof existingData === "string" ? await getJSON(existingData) : existingData;
      const updatedData = typeof newData === "object" ? { ...parsedData, ...newData } : newData;
      await keep(key, updatedData);
    } else {
      console.warn(`Key "${key}" does not exist. Use keep() to create it.`);
    }
  } catch (error) {
    console.error("Error updating data:", error);
  }
};

const merge = async (key: string, newData: object): Promise<void> => {
  try {
    const existingData = await getJSON(key);
    if (existingData) {
      const mergedData = { ...existingData, ...newData };
      await keep(key, mergedData);
    } else {
      console.warn(`Key "${key}" does not exist. Use keep() to create it.`);
    }
  } catch (error) {
    console.error("Error merging data:", error);
  }
};


const remove = async (key: string): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error("Error removing data:", error);
  }
};

const clearAll = async (): Promise<void> => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.error("Error clearing AsyncStorage:", error);
  }
};

const multiKeep = async (items: { key: string; data: object | string }[]): Promise<void> => {
  try {
    const storeItems: [string, string][] = items.map(({ key, data }) => [
      key,
      typeof data === "object" ? JSON.stringify(data) : data,
    ]);
    await AsyncStorage.multiSet(storeItems);
  } catch (error) {
    console.error("Error storing multiple items:", error);
  }
};

const multiFetch = async (keys: string[]): Promise<{ [key: string]: any | null }> => {
  try {
    const result = await AsyncStorage.multiGet(keys);
    return Object.fromEntries(result.map(([key, value]) => [key, value ? JSON.parse(value) : null]));
  } catch (error) {
    console.error("Error fetching multiple items:", error);
    return {};
  }
};

const multiRemove = async (keys: string[]): Promise<void> => {
  try {
    await AsyncStorage.multiRemove(keys);
  } catch (error) {
    console.error("Error removing multiple items:", error);
  }
};

const Storage: IStorage = {
  keepData: keep,
  fetchData: fetch,
  getJSON,
  exists,
  updateData: update,
  mergeData: merge,
  removeData: remove,
  clearAll,
  multiKeep,
  multiFetch,
  multiRemove,
};

export default Storage;
