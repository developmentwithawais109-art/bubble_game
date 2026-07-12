let timer = 0;
score = 0;

// make bubbles start
function makeBubble(){
    let bubble = "";

    for(let i = 1; i<=180; i++){
        let random_number = Math.floor(Math.random()*10);
        bubble += `<div class="bubble">${random_number}</div>`;
    }
    document.querySelector("#game-screen-bottom").innerHTML
    = bubble;
}
// make bubbles end
//-----------------//
// timer function start
function run_timer(){
    let timeinterval = setInterval(() => {
        if(timer<=59){
        timer++;
        document.querySelector("#timervalue").textContent=timer;
        }else{
            clearInterval(timeinterval);
            document.querySelector("#game-screen-bottom")
            .textContent= `Game Over Score: ${score}`;
        }
    }, 1000);
}

// timer function end
//----------------//
//hit function start
let ran_hit_value = 0;
function Hiting_Value(){
    ran_hit_value = Math.floor(Math.random()*10);
    document.querySelector("#hitvalue").textContent =
    ran_hit_value;
}
//hit function end
// -------------//
//score function start
function total_Score(){
    score += 10;
    document.querySelector("#scorevalue").textContent =
    score;
}
//score function end

Hiting_Value();
run_timer();
makeBubble();

//main hiting function start
let bubble_clicking =document.querySelector("#game-screen-bottom");
bubble_clicking.addEventListener("click", (bub_detail)=>{
    let clicked_bubble = Number(bub_detail.target.textContent);
    if(clicked_bubble === ran_hit_value){
        total_Score();
        Hiting_Value();
        makeBubble();
    }
});
//main hiting function end