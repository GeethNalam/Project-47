class Seventh{
    constructor(){
        this.button4 = createButton("Statistics")
        this.button4.style('background', 'lightgrey');
      
        this.button5 = createButton("Geometry")
        this.button5.style('background', 'lightgrey');
       
        this.button6 = createButton("Numbers")
        this.button6.style('background', 'lightgrey');
        
        
       
        
    
    }

    hide(){
  this.button4.hide();
  this.button5.hide();
  this.button6.hide();
  this.title.hide();
    }

    display(){
        this.button4.position(displayWidth/2,displayHeight/2);
        this.button5.position(displayWidth/2-100,displayHeight/2);
        this.button6.position(displayWidth/2+100,displayHeight/2);
    }
}