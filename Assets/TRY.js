#pragma strict

var Red : GameObject;
var Blue: GameObject;
var temp : int = 1;
function Start () {

}

function Update () {
	if(Input.GetMouseButtonDown(0))
		Debug.Log("Pressed left click.");
		
	if(temp == 1 ){
	Instantiate(Blue, Vector3(0,0,0), Quaternion.identity);
	Blue.GetComponent.<Renderer>().sortingOrder = 4;
	temp++;
	}
	if(Red.transform.localScale.x >=0){
		Red.transform.localScale.x -= 0.015;
		Red.transform.localScale.y -= 0.015;
	}
	else{
	 Blue.GetComponent.<Renderer>().sortingOrder = 5;
     Destroy(Red);
	}
}
