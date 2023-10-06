

alert("Match the bubble number with 'Hit'" )

var score=0 
var hit

function makebubble(){
            var clutter =""
            for( var i = 1 ; i<=168  ; i++)
            {      
                       var num= Math.floor(Math.random()*10)
                        clutter+=` <div class="bubble">${num}</div>`
                      
            }
            document.querySelector(".panel2").innerHTML = clutter
}
makebubble()

function hitnumber(){
          hit = Math.floor(Math.random()*10)
            document.querySelector("#hit").textContent = hit
}
hitnumber()
var timer =60
function runtimer(){
          var timmerend =  setInterval(function(){
                        if(timer>0)
                        {
                        timer--
                        document.querySelector("#timer").textContent = timer

                        }
                        else{
                                    clearInterval(timmerend)
                                    document.querySelector(".panel2").innerHTML =`<h2 class ="h" >Game Over</h2>`
                        }
            },1000)
}
runtimer()

function increasescore(){
                        score+=10
                        document.querySelector("#score").textContent = score
}
function increasescorenot(){
                        score-=5
                        document.querySelector("#score").textContent = score
}

document.querySelector(".panel2").addEventListener("click",function(dets ){

          var match =Number(dets.target.textContent) 
            if(match ==  hit)
            {
                        increasescore();
                        makebubble();
                        hitnumber();
            }
            else
            {
                        increasescorenot();
                        makebubble();
            }
})

