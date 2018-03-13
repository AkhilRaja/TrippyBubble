#pragma strict

function Start () {

}

function Update () {

	if(Input.touchCount>0) 
	 	var hit : RaycastHit2D = Physics2D.Raycast(Camera.main.ScreenToWorldPoint(Input.mousePosition), Vector2.zero);

	if(hit.collider != null && hit.collider.gameObject.name=="Bubble")
	{
	     Application.LoadLevel("Mode_Classic");
	}

}