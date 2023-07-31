export default class Storage {
  static save(key, data) {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  }

  static load(key) {
    const serializedData = localStorage.getItem(key);
    if (serializedData) {
      return JSON.parse(serializedData);
    }
    return null;
  }

  static remove(key) {
    localStorage.removeItem(key);
  }
}
