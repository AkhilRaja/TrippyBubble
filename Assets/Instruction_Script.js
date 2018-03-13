#pragma strict

var Camera_Main_ref : GameObject;
var i1 : GameObject;
var i2 : GameObject;
var i3 : GameObject;
var i4 : GameObject;
var i5 : GameObject;
var ie : GameObject;
var ttc : GameObject;	
var intro : GameObject;

//Instruction_Playing

function Start () {
 
 Camera_Main_ref = GameObject.FindWithTag("MainCamera");

}

function set_Intro_Active()
{
	intro.SetActive(true);
}


function Update () {
 

if(Input.touchCount>0)
			{ 
			 	var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
		    	var touch = Input.GetTouch(0);	
		    	 	
				if(hit.collider != null && hit.collider.name == i1.name && touch.phase == TouchPhase.Ended)
				{
				    i1.SetActive(false);
				    i2.SetActive(true);
				}
				
				if(hit.collider != null && hit.collider.name == i2.name && touch.phase == TouchPhase.Ended)
				{
				    i2.SetActive(false);
				    i3.SetActive(true);
				}
				
				if(hit.collider != null && hit.collider.name == i3.name && touch.phase == TouchPhase.Ended)
				{
				    i3.SetActive(false);
					i4.SetActive(true);
				}
				
				if(hit.collider != null && hit.collider.name == i4.name && touch.phase == TouchPhase.Ended)
				{
				    i4.SetActive(false);
				    i5.SetActive(true);
				}
				
				if(hit.collider != null && hit.collider.name == i5.name && touch.phase == TouchPhase.Ended)
				{
					i5.SetActive(false);
				    ie.SetActive(true);
				    
				}
				
				if(hit.collider != null && hit.collider.name == ie.name && touch.phase == TouchPhase.Ended)
				{
				   ie.SetActive(false);
                   Camera_Main_ref.GetComponent(MainScript).Instruction_Playing = false;
                   Camera_Main_ref.GetComponent(MainScript).Game_Start_var = true;
                   Camera_Main_ref.GetComponent(MainScript).timer_running = true;
				   GameObject.Find("Instructions").SetActive(false);
				   	
				}
				

			}
			
}