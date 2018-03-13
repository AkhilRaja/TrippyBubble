#pragma strict

var Arrow : GameObject;
var Go    : GameObject;

function Start () {

}

function Update () {

  
    if(Input.touchCount>0) {
	 	var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
	 	var touch = Input.GetTouch(0);
	 	
	}
	if(hit.collider != null && hit.collider.name == "go_button_classic" && touch.phase == TouchPhase.Ended)
	{
	      Application.LoadLevel("Classic");
	}
	
	if(hit.collider != null && hit.collider.name == "Arrow" &&touch.phase == TouchPhase.Ended)
	{
	    Application.LoadLevel("Modes_Memory");
		   
	}
}