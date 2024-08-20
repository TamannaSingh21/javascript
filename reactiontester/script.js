
	var start=new Date().getTime();
	function getRandomColor() {
			var letters = '0123456789ABCDEF';
			var color = '#';
			for (var i = 0; i < 6; i++) {
				color += letters[Math.floor(Math.random() * 16)]; //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
			}
			return color;
		}
		function move()
		{
			var top;
			var left;
			var wh;
			left=Math.random()*300;
			top = Math.random() * 300;
			wh = Math.random() * 500;
			document.getElementById("shape").style.left=left;
			document.getElementById("shape").style.top = top;
			document.getElementById("shape").style.width = wh + "px";
			document.getElementById("shape").style.height = wh + "px";

			document.getElementById("shape").style.display="block";
			
			document.getElementById("shape").style.backgroundColor=getRandomColor();
			start=new Date().getTime();

		}
		move();
        document.getElementById("shape").onclick=function(){
            document.getElementById("shape").style.display="none";
		var end= new Date().getTime();
		var timeTaken=(end-start);
		alert(timeTaken);
		move();

        }
