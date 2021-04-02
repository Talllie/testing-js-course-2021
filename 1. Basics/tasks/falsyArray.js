class FalsyArray {
    constructor(array) {
      this.array = array;
    }
  
    removeFalsyValues() {      
      return this.array.filter(Boolean);
    }

    isArray(){
      return Array.isArray(this.array);
    }
  }
  
  export default FalsyArray;
  