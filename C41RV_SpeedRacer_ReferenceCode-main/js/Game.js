class Game{
    constructor(){
      this.input1=createInput("Enter your answer")
      this.input2=createInput("Enter your answer")
      this.input3=createInput("Enter your answer")
      this.input4=createInput("Enter your answer")
    }

    getState() {
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
    }

    update(state) {
        database.ref("/").update({
          gameState: state
        });
    }
    gameElements(){
      this.input1.class('customInput');
      this.input1.position(250,200);
      this.input2.class('customInput');
      this.input2.position(600,200);
      this.input3.class('customInput');
      this.input3.position(950,200);
      this.input4.class('customInput');
      this.input4.position(250,500);
    }


    start(){

        player = new Player();
        playerCount = player.getCount();
        
        form = new Form();
        form.display();
    }

    play(){
      this.gameElements()
      fill("white")
      textSize(20)
       text("Welcome "+player.name,50,50) 
       textSize(18)
       text("LNEETWOAMR",250,150)
       textSize(18)
       text("GBELTEVEA",600,150)
       textSize(18)
       text("LIBL ETASG",950,150)
       textSize(18)
       text("DANRLSITWZE",250,450)
    }



}