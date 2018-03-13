#pragma strict
var resume : GameObject;
var mainCam : GameObject;
var frost : GameObject;


function Start () {
		mainCam = GameObject.FindGameObjectWithTag("MainCamera");
		
}


function Update () {
if(Input.touchCount>0)
	{ 
	 	var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
    	var touch = Input.GetTouch(0);	 
    	
	if(hit.collider != null && hit.collider.name == "Resume" && touch.phase == TouchPhase.Began)
	{
	    resume.SetActive(false);
	    frost = GameObject.Find("Frost");
	    frost.SetActive(false);
	    mainCam.GetComponent(MainScript).not_pause = true;
	}
  }
}