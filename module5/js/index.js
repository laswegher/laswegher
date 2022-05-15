let player1TotalScore = 0
let player2TotalScore = 0
let player1Turn = true
let player1winning = 0
let player2winning = 0


const player1History = document.getElementById("player1History")
const player2History = document.getElementById("player2History")
// Buttons
const startBtn = document.getElementById("start")
const rollBtn = document.getElementById("roll")
const nextBtn = document.getElementById("next")
const endBtn = document.getElementById("end")

// Fine
const player1Fine = document.getElementById("player1Fine")
const player2Fine = document.getElementById("player2Fine")

const player1Score = document.getElementById("player1Score")
const player2Score =document.getElementById("player2Score")

const player1ScoreBoard = document.getElementById("player1ScoreBoard")
const player2ScoreBoard = document.getElementById("player2ScoreBoard")

const player1 =document.getElementById("player1")
const player2 =document.getElementById("player2")

const winnerAnnounce = document.getElementById("winnerAnnounce")

// START BUTTON
startBtn.addEventListener("click", function(){
    startBtn.style.display = "none"
    rollBtn.style.display = "block"
})

// ROLL BUTTON
rollBtn.addEventListener("click", function(){
    
    if(player1Turn){ 
        const random = randomNumber()
        if(random === 1){
            player1TotalScore -= 10

            player1Fine.innerHTML = `
            <ul>
                <li>-${10}</li>
            </ul>`
        }else if(random === 6){
            player1TotalScore += 10
            player1Fine.innerHTML = `
            <ul>
                <li>+${10}</li>
            </ul>`
        }else{
            player1TotalScore += random
        }
            player1Score.innerText = random
            player1ScoreBoard.innerText = player1TotalScore
            player2.classList.add("animation")
            player1.classList.remove("animation")
            winnerAnnounce.innerText = "Player 2 Turn"
        
        
    }else{
        const random = randomNumber()

        if(random === 1){
            player2TotalScore -= 10
            player2Fine.innerHTML = `
            <ul>
                <li>-${10}</li>
            </ul>`

        }else if(random === 6){
            player2TotalScore += 10
            player2Fine.innerHTML = `
            <ul>
                <li>+${10}</li>
            </ul>`
        }else{
            player2TotalScore += random
        }
        player2Score.innerText = random
        player2ScoreBoard.innerText = player2TotalScore
        player2.classList.remove("animation")
        player1.classList.add("animation")
        winnerAnnounce.innerText = "Player 1 Turn"
        
    }

    if(player1TotalScore >= 20){
        player1winning++
        if(player1winning===3){
            winnerAnnounce.innerText = "Player 1 has Won The GAME"
            nextBtn.style.display = "none"
            endBtn.style.display = "block"
            startBtn.style.display = "none"
            rollBtn.style.display = "none"
        }else{
            winnerAnnounce.innerHTML = `Player 1 has Won <span> Round ${player1winning+player2winning}</span>`
            winner(player1History,player1TotalScore)
        }
        
    }else if(player2TotalScore >= 20){
        player2winning++
        if(player2winning===3){
            winnerAnnounce.innerText = "Player 2 has Won The GAME"
            nextBtn.style.display = "none"
            startBtn.style.display = "none"
            endBtn.style.display = "block"
            rollBtn.style.display = "none"
        }else{
            winnerAnnounce.innerHTML = `Player 2 has Won <span>Round ${player1winning+player2winning}</span>`
            winner(player2History,player2TotalScore)
        }
    }
    
    player1Turn = !player1Turn
})

// NEXT BUTTON 
nextBtn.addEventListener("click", function(){
    player1TotalScore = 0
    player2TotalScore = 0
    player1Turn = true
    player1ScoreBoard.innerText = 0
    player2ScoreBoard.innerText = 0
    player1Score.innerText = 0
    player2Score.innerText = 0
    winnerAnnounce.innerText = "Player 1 turn"
    player1.classList.add("animation")
    player2.classList.remove("animation")

    nextBtn.style.display = "none"
    rollBtn.style.display = "block"
})

// END BUTTON

endBtn.addEventListener("click", function(){
    player1TotalScore = 0
    player2TotalScore = 0
    player1Turn = true
    player1ScoreBoard.innerText = 0
    player2ScoreBoard.innerText = 0
    player1Score.innerText = 0
    player2Score.innerText = 0
    winnerAnnounce.innerText = "Player 1 turn"
    player1.classList.add("animation")
    player2.classList.remove("animation")

    nextBtn.style.display = "none"
    rollBtn.style.display = "none"
    startBtn.style.display = "block"
    endBtn.style.display = "none"

    player1History.innerHTML = ``
    player2History.innerHTML = ``

    player1winning = 0
    player2winning = 0
})


// WINNER FUNCTION
function winner(x,y){
    rollBtn.style.display = "none"
    nextBtn.style.display = "block"
    x.innerHTML += `
        <ul>
            <li>${y}</li>
        </ul>`
}

// RANDOM NUMBER GENERATOR
function randomNumber() {
    return Math.floor(Math.random()*6) + 1
}
