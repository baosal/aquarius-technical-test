export default class LocalStorageUtil {
  static setItem(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: string) {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  static removeItem(key: string) {
    window.localStorage.removeItem(key);
  }
}