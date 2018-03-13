#pragma strict
var Animate_var = false;

var Main_Camera : GameObject;

function Start () {
   Main_Camera = GameObject.Find("Main Camera");
}
function Animate()
{
	
		if(transform.localScale.x >=0 || transform.localScale.y >=0)
		  {
		  	transform.localScale.x-=0.01;
		  	transform.localScale.y-=0.01;
		  } 
		  else 
		  
		  {
		  
		   Animate_var = false;
		   Main_Camera.GetComponent(MainScript).Pro_Wrong_Touch_animation();
		  
		  }
}

function Update () {
 

		if(Input.touchCount>0)
		{ 
		 	var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
	    	var touch = Input.GetTouch(0);	
	    	 	
			if(hit.collider != null && hit.collider.name == this.gameObject.name && touch.phase == TouchPhase.Began)
			{
			    if(Main_Camera.GetComponent(MainScript).level == "pro" || Main_Camera.GetComponent(MainScript).level == "legendary")
			    Animate_var = true;
			    
			}
			

	    }
	    if(Animate_var)
	     Animate();

}