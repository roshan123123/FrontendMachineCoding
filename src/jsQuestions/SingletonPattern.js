class Singleton {
  static instance = null;

  static data = 'I am the singleton instance';

  static getInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton(); // Create instance if not already created
    }
    return Singleton.instance;
  }

  static getData() {
    return Singleton.data;
  }

  static setData(newData) {
    Singleton.data = newData;
  }

  // Private constructor to prevent direct instantiation
  constructor() {
    if (Singleton.instance) {
      throw new Error(
        'Cannot instantiate Singleton class directly. Use Singleton.getInstance()'
      );
    }
  }
}

// Usage
const instance1 = Singleton.getInstance();
console.log(Singleton.getData()); // Output: I am the singleton instance

Singleton.setData('Updated Singleton Data');
console.log(Singleton.getData()); // Output: Updated Singleton Data

const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // Output: true
