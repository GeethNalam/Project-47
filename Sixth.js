class Sixth{
    constructor(){
        this.button4 = createButton("Statistics")
        this.button4.style('background', 'lightgrey');
      
        this.button5 = createButton("Geometry")
        this.button5.style('background', 'lightgrey');
       
        this.button6 = createButton("Numbers")
        this.button6.style('background', 'lightgrey');
        
        this.greeting = createElement('h1');


        
       
        
    
    }

    hide(){
  this.button4.hide();
  this.button5.hide();
  this.button6.hide();
  this.greeting.hide();
    }

    display(){
        this.greeting.html("Please Select the Subject");
        this.greeting.position(displayWidth/2 - 100, 200);

        
        this.button4.position(displayWidth/2,displayHeight/2);
        this.button5.position(displayWidth/2-100,displayHeight/2);
        this.button6.position(displayWidth/2+100,displayHeight/2);
    }
}