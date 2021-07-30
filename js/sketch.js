function setup() {
    console.log("setup")
    let c = createCanvas(400, 400);

    background(255, 0, 0); 

    saveCanvas(c, 'myCanvas', 'jpg');
  }
  
  function draw() {
    console.log("draw")
    background(220);
  }