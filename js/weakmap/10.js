class mySingleton {
  static getInstance() {
      if (!mySingleton.instance) {
          mySingleton.instance = new mySingleton();
      }
      return mySingleton.instance;
  }
  publicMethod() {
      console.log("The public can see me!");
  }
}
var cache = mySingleton.getInstance();
