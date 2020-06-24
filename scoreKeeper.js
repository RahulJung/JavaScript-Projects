    let p1btn = document.querySelector("#p1");
    let p2btn = document.getElementById("p2");
    let p3btn = document.getElementById("reset")
    let h1 = document.querySelector("#sp1");
    let h2 = document.querySelector("#sp2");
    let num = document.querySelector("input")
    let span = document.querySelector("p span");
    let score1 = 0; 
    let score2 = 0; 
    let gameOver = false;
    let winScore = 5;



    p1btn.addEventListener("click", function(){
    	if(!gameOver){
    		score1++;
    		if(score1 === winScore){
    			h1.classList.add("winner");
    			gameOver = true;
    		}
    			h1.textContent = score1;
    	}
     	
    	
    });
       p2btn.addEventListener("click", function(){
       if(!gameOver){
    		score2++;
    		if(score2 === winScore){
    			h2.classList.add("winner");
    			gameOver = true;
    		}
    		   	h2.textContent = score2;
    	}
  
    	
   	 });
    	p3btn.addEventListener("click", function(){
    		score2 = 0;
    		score1 = 0;
    		h1.textContent = 0;
    		h2.textContent = 0;
    		h1.classList.remove("winner")
    		h2.classList.remove("winner")
    		gameOver = false;
    })

   num.addEventListener("change", function(){
   	span.textContent = num.value;
   	winScore = Number(num.value);
   });
