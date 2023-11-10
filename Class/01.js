class Box {
    constructor(width, length, height) {
      this.width = width;
      this.length = length;
      this.height = height;
    }
  
    volumeOfBox() {
      return this.width * this.length * this.height;
    }
  }
  
  // Creating instances of the Box class
  let vol = new Box(2, 5, 1);
  let vol1 = new Box(4, 2, 2);
  let vol2 = new Box(2, 3, 5);
  
  // Accessing the volume using the method
  console.log(vol.volumeOfBox());
  console.log(vol1.volumeOfBox());
  console.log(vol2.volumeOfBox());
  