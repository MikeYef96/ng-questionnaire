import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getItem<T>(key: string): T | null {
    const value = localStorage.getItem(key) as string;
    return JSON.parse(value);
  }

  /**
   * Get item by key
   *
   * @param key
   */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Set item
   *
   * @param key
   *
   * @param item
   *
   * @param skipStringify
   */
  setItem<T>(key: string, item: NonNullable<T>, skipStringify?: boolean): void {
    const value = skipStringify ? String(item) : JSON.stringify(item);
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      // error notification here
      console.log(error)
    }
  }
}
