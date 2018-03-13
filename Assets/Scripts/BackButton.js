#pragma strict

function Start () {

}
function back_Button()
{
if (Input.GetKey(KeyCode.Escape))
            {
               Application.LoadLevel(2);
            }
 
}
function Update () {
	back_Button();
}