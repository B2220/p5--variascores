function setup() {
    createCanvas(400, 400);
    background(220);
  }
  
  function draw() {
    
    
    stroke('purple')
    fill('blue')
    
    if(mouseIsPressed){
    rect(mouseX, mouseY, 10,15);
    }
  }