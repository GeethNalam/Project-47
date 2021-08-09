class Form{

    constructor(){
  this.button1 = createButton("7th Grade")
  this.button1.style('background', 'lightgrey');

  this.button2 = createButton("6th Grade")
  this.button2.style('background', 'lightgrey');
 
  this.button3 = createButton("8th Grade")
  this.button3.style('background', 'lightgrey');

  this.title = createElement('h1');
  this.greeting = createElement('h1');

  
    }

    hide(){
this.button1.hide();
this.button2.hide();
this.button3.hide();
this.title.hide();
//sixth.hide();
//seventh.hide();
//eight.hide();
this.greeting.hide();
    }



    display(){
        this.title.html("Please Select Your Grade");
        this.title.position(displayWidth/2 -100, 200);

        this.button1.position(displayWidth/2,displayHeight/2);
        this.button2.position(displayWidth/2-100,displayHeight/2);
        this.button3.position(displayWidth/2+100,displayHeight/2);

        this.button1.mousePressed(()=>{
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          this.title.hide();
          seventh = new Seventh();
          seventh.display();
          this.greeting.html("Please Select the Subject");
          this.greeting.position(displayWidth/2 - 100, 200);
          //eigth.hide();
         // sixth.hide();
        })
        this.button2.mousePressed(()=>{
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          this.title.hide();
          sixth = new Sixth();
          sixth.display();
          this.greeting.html("Please Select the Subject");
          this.greeting.position(displayWidth/2 - 100, 200);
         // eigth.hide();
          //seventh.hide();
        })
        this.button3.mousePressed(()=>{
          this.button1.hide();
          this.button2.hide();
          this.button3.hide();
          this.title.hide();
          eight = new Eight();
          eight.display();
          this.greeting.html("Please Select the Subject");
          this.greeting.position(displayWidth/2 - 100, 200);
         // seventh.hide();
         // sixth.hide();
        })

    }

 
}