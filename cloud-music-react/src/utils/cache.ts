/**
 * localStorage/sessionStorage 缓存封装
 * @author junpu
 * @date 2023-02-17
 */
class LocalCache {
  storage: Storage;

  constructor(isLocal: boolean = true) {
    this.storage = isLocal ? localStorage : sessionStorage;
  }

  setCache(key: string, value: any) {
    if (!value) return;
    this.storage.setItem(key, JSON.stringify(value));
  }

  getCache<T = string>(key: string): T | undefined {
    const value = this.storage.getItem(key);
    if (value) {
      return JSON.parse(value) as T;
    }
  }

  removeCache(key: string) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }
}

const cache = new LocalCache();

export default cache;
