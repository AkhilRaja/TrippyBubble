#pragma strict
import UnityEngine.UI;

var Bubbles : GameObject[];
var Bomb    : GameObject[];
var Polka   : GameObject[];
var Final_Display_Bubble : GameObject[];
 

var bubbleposarrx : float[];
var bubbleposarry : float[];


var Solid_numbers = new Array();
var Bomb_numbers  = new Array();
var Polka_numbers = new Array();
var Final_numbers = new Array();

var random_no : int;
var targetColor : int ;
var score_obj : Text;
var score_count :int = 0;

var instruction : Text;
var myTimer : float = 30.0;
var instruction_Timer :float = 1.8;
var timer_obj : Text;

var timer_running = true;

var oldHighscore :int =0;

var Total_Solid_Colors : int = 13;

var Frost 		: GameObject;


var level = "rookie";

var not_pause = true;
var Pause_Canvas  : GameObject;


var temp1 :  GameObject;
var temp2 :  GameObject;

var Destoy_Bubble : GameObject[];


var Game_Start_var = true;
var Start_Text : Text;
var start_TImer : float = 300f;


var no_Solid_Colors 	: int = 13;
var no_Bomb         	: int = 0;
var no_Polka	    	: int = 0;
var no_repeat_bubbles   : int = 3;

var GameOver_Frost      : GameObject;
var GameOver_Rookie     : GameObject;
var GameOver_Pro    	: GameObject;
var GameOver_Legendary     : GameObject;

var GameOverCanvas      : GameObject;
var best_score          : Text;
var current_score       : Text;

var dontChage_instruction = false; 

var Ai_Board : Text;
var Ai : GameObject;

var holo_rookie_obj : GameObject;
var holo_pro_obj : GameObject;
var holo_legendary_obj : GameObject;


var Instruction_Playing = true;
var Intro : GameObject;


var streak : int = 0;

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
/////////Randomising alogirthm

static function RandomizeArray(arr : Array)
{
    for (var i = arr.length - 1; i > 0; i--) {
        var r = Random.Range(0,i);
        var tmp = arr[i];
        arr[i] = arr[r];
        arr[r] = tmp;
    }
}


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
/////////Function to select the final Bubble Array that has to be displayed for level one.

function Bubbles_Select()
{
/////////Rookie Mode : level 1
///////
	if(level == "rookie")
	{
		no_Solid_Colors 	 = 11;
		no_Bomb         	 = 0;
		no_Polka	    	 = 0;
		no_repeat_bubbles    = 5;
	}
	else if (level == "pro"){
		 no_Solid_Colors     = 9;
		 no_Bomb         	 = 0;
		 no_Polka	    	 = 0;
		 no_repeat_bubbles   = 7;
		
	}	
	else if (level == "legendary" )
	{
		 no_Solid_Colors     = 9;
		 no_Bomb         	 = 5;
		 no_Polka	    	 = 0;
		 no_repeat_bubbles   = 2;

	}
	
		for(var i = 0; i < Total_Solid_Colors ;i++)
		Solid_numbers[i]=i;
		
		RandomizeArray(Solid_numbers);
		
		for(i = 0; i< no_Solid_Colors; i++)
		{
			Final_Display_Bubble[i] = Bubbles[Solid_numbers[i]];
			
		}
		
		for(i = 0 ; i< no_Solid_Colors ;i++)
		Bomb_numbers[i] = Solid_numbers[i]; ///////Selecting the solid colors and then randomising them
		RandomizeArray(Bomb_numbers);
		
		var j = no_Solid_Colors;
		for( i = 0 ; i < no_Bomb; )
		{
			Final_Display_Bubble[j++] = Bomb[Bomb_numbers[i++]];  //// Picking bombs of the randomized solid colors.
		
		}
		
		RandomizeArray(Bomb_numbers);
		
		for( i = 0 ; i < no_Polka; )
		{
		    Final_Display_Bubble[j++] = Polka[Bomb_numbers[i++]]; //// Picking Polka of the randomized solid colors.
		}
		RandomizeArray(Bomb_numbers);
		
		for( i = 0 ; i < no_repeat_bubbles; )
		{
		    Final_Display_Bubble[j++] = Bubbles[Bomb_numbers[i++]]; //// Picking Polka of the randomized solid colors.
		}
		
		
		for(i = 0 ;i< 16 ;i++)
		Final_numbers[i] = i;          //////////////This array is used to randomise the final bubbles which will be displayed.
		RandomizeArray(Final_numbers);
		
		
		for(i = 0 ;i<16;i++)
		{
		   Destoy_Bubble[i] = Instantiate(Final_Display_Bubble[Final_numbers[i]],Vector3(bubbleposarrx[i],bubbleposarry[i],0),Quaternion.identity);
		   Destoy_Bubble[i].name = Final_Display_Bubble[Final_numbers[i]].name;
		}
		RandomizeArray(Final_Display_Bubble);
}
function Destroy_bubbles()
{
 for(var i = 0 ;i<16;i++)
 Destroy(Destoy_Bubble[i]);
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
////////////Unity Start

function Start () {
	
	Bubbles_Select();
	Start_Text.text = "3";
	instructions_Screen();
	myTimer=60.0;
	instruction_Timer = 1.8;
	score_count = 0;
	
	temp1 = Instantiate(Frost);
	temp1.name = Frost.name;
	temp2 = Instantiate(Pause_Canvas);
	temp2.name= Pause_Canvas.name;
	
	temp1.SetActive(false);
	temp2.SetActive(false);
	
	
	
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
////////Function to print the score to the screen
function score()
{
  score_obj.text = score_count.ToString();	
}

///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
////////Function to print the instruction to screen

function instructions_Screen(){
	
   if(dontChage_instruction == false )
   {
		RandomizeArray(Bomb_numbers);
		random_no = Bomb_numbers[0];
		


	 if(Bubbles[random_no].name == "bubble_flat_orange"){
		
			instruction.text = "Orange";   
			
		}
		
		else if(Bubbles[random_no].name == "bubble_flat_brown"){
		
			instruction.text = "Brown";   
			
		}
		else if(Bubbles[random_no].name == "bubble_flat_mustard"){
		
			instruction.text = "Mustard";   
			
		}
		
		else if(Bubbles[random_no].name == "bubble_flat_pink"){
		
			instruction.text = "Pink";   
		}
		
		else if(Bubbles[random_no].name == "bubble_flat_grey"){
		
			instruction.text 	= "Grey";   
		}
	   else if(Bubbles[random_no].name == "bubble_flat_red"){
		
			instruction.text = "Red";   
			
		}
		else if(Bubbles[random_no].name == "bubble_flat_green"){
		
			instruction.text = "Green";   
			
		}
		
		else if(Bubbles[random_no].name == "bubble_flat_white"){
		
			instruction.text = "White";   
		
		}
		else if(Bubbles[random_no].name == "bubble_flat_yellow"){
		
			instruction.text = "Yellow";   
			
		}
		else if(Bubbles[random_no].name == "bubble_flat_violet"){
		
			instruction.text = "Violet";   
		
		}
		
		else if(Bubbles[random_no].name == "bubble_flat_black"){
		
			instruction.text = "Black";   
			
		}
		else if(Bubbles[random_no].name == "bubble_flat_blue"){
		
			instruction.text = "Blue";   
			
		}
		else if(Bubbles[random_no].name == "bubble_flat_skin"){
		
			instruction.text = "Skin";   
			
		}
	targetColor = random_no;	
  }         
}


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////Function to store the high score into unity playerprefs:
function StoreHighscore()
 {
     oldHighscore = PlayerPrefs.GetInt("highscore", 0);    
     if(score_count > oldHighscore){
         PlayerPrefs.SetInt("highscore", score_count);
         oldHighscore = score_count;
          Ai_Board.text = "New High Score!";
 	}
 }
 
 function Game_Over()
 {
  		
  		if(level == "rookie")
  		{
  		Instantiate(GameOver_Rookie);
  		}
  		
  		else if(level == "pro")
  		{
  		Instantiate(GameOver_Pro);
  		
  		}
  		
  		else if(level == "legendary")
  		{
  		Instantiate(GameOver_Legendary);
  		}
  		
  		Instantiate(GameOver_Frost);	
	  	GameOverCanvas.SetActive(true);  
	  	best_score.text = oldHighscore.ToString();
	  	current_score.text = score_count.ToString();
 }
 
function timer()
{

	var int_timer : int;

    instruction_Timer -= Time.deltaTime;
  
	  if(instruction_Timer <= 0)
	  {
	  	  if(level == "legendary")
	  	  {
	  	  	Destroy_bubbles();	
			Bubbles_Select();
	  	  }
	  	  instructions_Screen();
		  
		  if(level == "pro")
		  instruction_Timer = 1.4;
		  if(level == "legendary")
		  instruction_Timer = 1.2;
	 	  if(level == "rookie")
	 	  instruction_Timer = 1.8;	
	   }
	  if(myTimer / 10 < 1){		
	 // 	timer_obj.transform.position.x = -5.06;
	 // 	timer_obj.GetComponent(TextMesh).color = Color.red;
	  	timer_obj.text = int_timer.ToString();
	  	}
	  
	  if(myTimer > 1)
	  {
		  myTimer -= Time.deltaTime;
		  int_timer = Mathf.FloorToInt(myTimer); 
		  timer_obj.text = int_timer.ToString();
	  }
	  if(myTimer <= 1)
	  {
	  	  timer_running =false;	
	      StoreHighscore(); /////////////Here the GameEnds.So, HighScore Function is called.
	      ////////////////Gameover Instantiation has to happen here.
	  	  Game_Over();
	  }
}


function Game_Start()
{	
if(Game_Start_var)
	{
		Intro.SetActive(true);
		Destroy_bubbles();
	    Bubbles_Select();
			
	
		Start_Timer_CountDown();
		if(start_TImer == 2)
		{
		
		Game_Start_var = false;
		Destroy(GameObject.Find("Start_Frost"));
		Destroy(GameObject.Find("Intro"));
		instructions_Screen();
		Ai.SetActive(true);
 		}
	}
}
function Start_Timer_CountDown()
{
if(start_TImer == 100f)
Start_Text.text = "1";

if(start_TImer == 200f )
Start_Text.text = "2";

start_TImer-=2;
yield;

}

function Pro_Wrong_Touch_animation()
{
		 Destroy_bubbles();
		 Bubbles_Select();
		 
		 if(level == "pro" || level == "legendary")
		 dontChage_instruction = false;
		 
		 instructions_Screen();
		 
		 if(level == "pro")
		 instruction_Timer = 1.4;
		 if(level == "legendary")
		 instruction_Timer = 1.2;	
		 
}


//4. Turned Pro. GO on.
//5. Bang Bang! Legendary Mode on.


///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////
////////////Unity Update

function Update()
 {
 
 
 if(!Instruction_Playing){
 
     Game_Start(); 
  } 
	if(score_count == 15 ) 
	{
	  level = "pro"; 
      Ai_Board.text = "- Pro -";
      holo_rookie_obj.SetActive(false);
      holo_pro_obj.SetActive(true);
    }  
       	 	
    
	if(score_count >= 35)
	{
	  level = "legendary"; 
      Ai_Board.text = "- Legendary -";
      holo_pro_obj.SetActive(false);
      holo_legendary_obj.SetActive(true);
    }  
    
    
    
	if(timer_running && not_pause && !Game_Start_var)
	{
		timer();
	    score();

			if(Input.touchCount>0)
			{ 
			 	var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		    	var touch = Input.GetTouch(0);	
		    	 	
				if(hit.collider != null && hit.collider.name == "pause_button"&& touch.phase == TouchPhase.Began)
				{
				    
				    temp1.SetActive(true);
				    temp2.SetActive(true);
				    	
				    not_pause = false;
				}
				
				if(hit.collider != null && hit.collider.gameObject.tag == "Bomb"&& touch.phase == TouchPhase.Began)
				{
				 streak = 0;
				 timer_running = false;	
	     		 StoreHighscore(); 
	      		 Game_Over();
	      		 Ai_Board.text = "!!Bombed!!";
				
				}
			
				if(hit.collider != null && hit.collider.name == Bubbles[targetColor].name&& touch.phase == TouchPhase.Began)
				{
					
					 if(level == "pro" || level == "legendary")
					 {
					    Destroy_bubbles();	
						Bubbles_Select();
						 
						dontChage_instruction = false;
					 } 
				
				     
				     score_count+=1;
				     
				     streak+= 1;
				     if(streak == 3)
				      Ai_Board.text = "Streak x3";
				     
				     else if (streak == 5)
				      Ai_Board.text = "Streak x5";
				     
				     else if (streak == 9)  
					  Ai_Board.text = "Keep Popping!!";	
					  				     
				     else if ((streak % 3 == 0) && streak > 9)
				      Ai_Board.text = String.Concat("Streak x",streak.ToString());
				        
				        
					 score();
					 instructions_Screen();
					 if(level == "rookie")
					 instruction_Timer = 1.8;
					 if(level == "pro")
					 instruction_Timer = 1.4;
					 if(level == "legendary")
					 instruction_Timer = 1.2;
								
				     
				}
			
			   else if(touch.phase == TouchPhase.Began && (hit.collider.name != Bubbles[targetColor].name))
				{
					streak = 0;
					 Ai_Board.text = level;
					 					     
					if(score_count>0)
					 score_count-=1;
					
					 Handheld.Vibrate();
					 
					 if(level == "pro" || level == "legendary")
					 dontChage_instruction = true;
					 
					 score();
				}
				
		   }
		
 	 }
 }

