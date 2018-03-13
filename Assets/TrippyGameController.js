#pragma strict


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

var no_Solid_Colors 	: int = 12;
var no_Bomb         	: int = 0;
var no_Polka	    	: int = 0;
var no_repeat_bubbles   : int = 0;
var Total_Solid_Colors : int = 13;
  

var Destoy_Bubble : GameObject[];    
            
function Start () {
Destroy_bubbles();
Bubbles_Randomise();
}


static function RandomizeArray(arr : Array)
{
    for (var i = arr.length - 1; i > 0; i--) {
        var r = Random.Range(0,i);
        var tmp = arr[i];
        arr[i] = arr[r];
        arr[r] = tmp;
    }
}


function Bubbles_Randomise()
{
/////////Rookie Mode : level 1
///////
		
		no_Solid_Colors 	 = 12;
		no_Bomb         	 = 0;
		no_Polka	    	 = 0;
		no_repeat_bubbles    = 0;
	
	
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
		
		
		for(i = 0 ;i< 12 ;i++)
		Final_numbers[i] = i;          //////////////This array is used to randomise the final bubbles which will be displayed.
		RandomizeArray(Final_numbers);
		
		
		for(i = 0 ;i<12;i++)
		{
		   Destoy_Bubble[i] = Instantiate(Final_Display_Bubble[Final_numbers[i]],Vector3(bubbleposarrx[i],bubbleposarry[i],0),Quaternion.identity);
		   Destoy_Bubble[i].name = Final_Display_Bubble[Final_numbers[i]].name;
		}
}
function Destroy_bubbles()
{
 for(var i = 0 ;i<12;i++)
 Destroy(Destoy_Bubble[i]);
}


function Bubbles_ClockWise()
{

	for(var i = 11 ; i >=0 ; i--)
	{
		
		if(i == 11)
		{
		    var temp = Final_Display_Bubble[Final_numbers[0]];
			Final_Display_Bubble[Final_numbers[0]] = Final_Display_Bubble[Final_numbers[i]]; 
		}
		else if(i == 0)
		{
			Final_Display_Bubble[Final_numbers[i+1]] = temp;
		}
		else { 
		Final_Display_Bubble[Final_numbers[i+1]] = Final_Display_Bubble[Final_numbers[i]];
	    }
	}	

	
	 	   for(var j = 0 ; j <=11 ; j++){	 	   
	 	   Destoy_Bubble[j] = Instantiate(Final_Display_Bubble[Final_numbers[j]],Vector3(bubbleposarrx[j],bubbleposarry[j],0),Quaternion.identity);
		   Destoy_Bubble[j].name = Final_Display_Bubble[Final_numbers[j]].name;
	}
	


}


function Bubbles_AntiClockWise()
{

	for(var i = 0 ; i <=11 ; i++)
	{
		
		if(i == 0)
		{
		    var temp = Final_Display_Bubble[Final_numbers[0]];
			
		}
		else { 
		Final_Display_Bubble[Final_numbers[i-1]] = Final_Display_Bubble[Final_numbers[i]];
	    }
	}	
		Final_Display_Bubble[Final_numbers[11]] = temp;
	
	 	   for(var j = 0 ; j <=11 ; j++){	 	   
	 	   Destoy_Bubble[j] = Instantiate(Final_Display_Bubble[Final_numbers[j]],Vector3(bubbleposarrx[j],bubbleposarry[j],0),Quaternion.identity);
		   Destoy_Bubble[j].name = Final_Display_Bubble[Final_numbers[j]].name;
	}
	


}

function Update () {

}