class Game {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
     
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
      
    }
 
    play(){
      form.hide();
      Player.getPlayerInfo();
      background("skyblue")
      if(allPlayers !== undefined){
       var index=0
       var tool1=database.ref('players/player1');
       tool1.on("value",function(data){
        tool = data.val();
      })
      console.log(tool)
       this.o=createButton("O")
       this.x=createButton("X")

        b1=createSprite(500,300,10,400)
        b1.shapeColor="black"
        b2=createSprite(700,300,10,400)
        b2.shapeColor="black"
        b3=createSprite(600,250,400,10)
        b3.shapeColor=0
        b4=createSprite(600,400,400,10)
        b4.shapeColor=0
        console.log("it")
     // var x=0
    //  var y
        for(var plr in allPlayers){
             
      //     index=index+1
         //  x=x+200
         //  y=displayHeight=allPlayers[plr].distance
         
           if(plr==="player"+player.index){
             fill("black")
             textSize(40)
             text("Welcome    "+allPlayers[plr].name,400,80)
             this.o.position(200,200)
             this.x.position(300,200)
             this.o.mousePressed(()=>{
              player.updateTool("o")
            })
            this.x.mousePressed(()=>{
              player.updateTool("x")
            })
             if(player1.tool===player2.tool){
               fill("black")
               textSize(40)
               text("Please select different tool!!",100,200)
               console.log("Please select different tool!!")
             }
            // text("You get "+allPlayers[plr].tool+allPlayers[plr].name,400,500)
            // camera.position.x=displayWidth/2;
           // camera.position.y=cars[index-1].y
          
           }
          
      }
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.score +=1
        player.update();
      }
      drawSprites()
    }
  }
  