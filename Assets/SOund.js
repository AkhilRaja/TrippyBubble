#pragma strict

 static var AudioBegin    : boolean = false;
 var Audio_Loop    : AudioClip;
 
      
 function Awake()
 {
 	
 
     if (!AudioBegin)
     {
         GetComponent.<AudioSource>().Play();
         DontDestroyOnLoad(gameObject);
         AudioBegin = true;
     }
 }


function Start () {

}

function Update () {

	if(!GetComponent.<AudioSource>().isPlaying)
	{
			GetComponent.<AudioSource>().clip = Audio_Loop;
			GetComponent.<AudioSource>().Play();

	}


}