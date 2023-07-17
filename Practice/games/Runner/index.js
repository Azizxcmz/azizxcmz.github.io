


let loc = document.querySelectorAll('.board div')
let man = 26; //the main character
let downer = 24 ; //the block that you should slide from
let upper = 44; //the block that you should jump from
let act = 0;
let score = 0;
let start = document.getElementById('start');
let lose = 0;
let speed = 0;
loc[man].classList.add("man");
document.addEventListener('keydown', move);


//start onclick
start.onclick = () => {
    setInterval(scoring, 500)
    setInterval(speeding, 5000)
    chose()
    start.style.display = "none";
}



function speeding(){
    if(lose == 0){
    speed += 5; 
}}


//score
function scoring(){
    if(lose == 0){
    score ++; 
    document.getElementById("score").innerHTML = "score : " + score;
    }
    else if(lose == 1){
        document.getElementById('two').innerHTML = "Hah Loser!";
       }
}





//moving
function move(e) {
    if(lose == 0){
    loc[man].classList.remove("man");
     
    switch(e.key){
    /*case 'ArrowLeft':
        if(man%20 !== 0 )
        {
        man -=1
        }
    break;
    case 'ArrowRight':
        if((man+1)%20 !== 0){    
        man +=1
        }
    break;*/
    case 'ArrowUp':
        if(man > 16 && act < 2){
            act += 1
            setTimeout(jump, 500);
        man -=20
        }
    break;
    case 'ArrowDown':
        if(man < 36 && act < 2){
            act += 1
            setTimeout(slide, 500)
        man +=20
        }
    break;
    };
    loc[man].classList.add("man"); 
}
};



//returning after actions
jump = function(){ 
    loc[man].classList.remove("man");
     if(man < 26){man += 20 ;}
     else{clearInterval(jump);}
     loc[man].classList.add("man"); 
     act -= 1
     clearInterval(jump);
}
slide = function(){ 
    loc[man].classList.remove("man");
    if(man > 36){man -= 20;}
    else{clearInterval(slide);}
    loc[man].classList.add("man"); 
    act -= 1
    clearInterval(slide);
}





//blocks coming
function comingUp(){

    loc[upper].classList.remove("up")
    loc[upper+20].classList.remove("up")
    upper -=1;
    if(upper < 24){
        upper = 44
        chose()
        }
    else{
        loc[upper].classList.add("up")
        loc[upper+20].classList.add("up")
        if(loc[man] == loc[upper] || loc[man] == loc[upper+20]){
            lose = 1
            }
        else{
        setTimeout(comingUp,100-speed)
        }  
    }
    }



    function comingDown(){

        loc[downer].classList.remove("down")
        loc[downer+20].classList.remove("down")
        downer -=1;
        if(downer < 4){
            downer = 24 
            chose()
            }
        else{
            loc[downer].classList.add("down")
            loc[downer+20].classList.add("down")
            if(loc[man] == loc[downer] || loc[man] == loc[downer+20]){
             lose = 1
            }
            else{
              setTimeout(comingDown,100-speed)
            }  
        }
     }



//block chosing
function chose(){
    let b = Math.floor(Math.random()*10)
console.log(b);

let i = Math.floor(Math.random()*2000)
console.log(i);

if(b >= 5){
    setTimeout(comingUp,i- (40*speed))
    }
else{
    setTimeout(comingDown,i)
    }
}


