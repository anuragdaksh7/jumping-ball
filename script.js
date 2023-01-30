document.getElementById("ball").style.left = String(window.innerWidth*0.5)+"px";
document.getElementById("ball").style.top = "100px";
grav = 0.2;
vely = 0;
ar = 0;
e_ = 0;
var h = window.innerHeight;


setInterval(function updateBall(){
	
	ball = document.getElementById("ball");
	air = document.getElementById("air").value;
	grv = document.getElementById("grav").value;
	e = document.getElementById("e").value;
	if (air != ""){
		ar = Number(air)/10;
	}
	if (grv != ""){
		grav = Number(grv)/10;
	}
	if (e != ""){
		e_ = Number(e)/10
	}
	r = ball.style.width.slice(0,-2);
	r = Number(r);
	l = (ball.style.top).slice(0,-2);
	l = Number(l);
	if (l>400){
		vely *= -1;
		console.log(l,vely);
		vely+=grav;
		vely = (1-e_)*vely;
	}
	if (vely>0){
		vely -= ar;
	} else if(vely<0){
		vely += ar;
	}
	l+=vely;
	vely += grav;
	

	console.log("hmm");
	ball.style.top = String(l)+"px";
	//ball.style.left = String(k)+"px";
},Number(1000/120));

document.addEventListener("keydown",(e)=>{
	ball = document.getElementById("ball");
	k = (ball.style.left).slice(0,-2);
	k = Number(k);
	l = (ball.style.top).slice(0,-2);
	l = Number(l);
	key = e.key;
	
	if (key == "w"){
		l-=5;
	}
	if (key == "s"){
		l+=5;
	}
	if (key == "a"){
		k-=5;
	}
	if (key == "d"){
		k+=5;
	}
	
	//console.log(k,l);
	ball.style.top = String(l)+"px";
	ball.style.left = String(k)+"px";

});