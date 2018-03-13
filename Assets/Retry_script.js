#pragma strict

function Start () {

}

function Update () {
   
     if(Input.touchCount>0) {
	 	var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);
	 	var touch = Input.GetTouch(0);
	 	
	
	if(hit.collider != null && hit.collider.name == this.gameObject.name && touch.phase == TouchPhase.Ended)
	{
	      Application.LoadLevel("Classic");
	}
  }	
}