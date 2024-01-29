let input   = document.querySelector('.input'),
    btn     = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    gameBlock = document.querySelector('.game__block'),
    score = 0,
    gameTime = 0,
    interval = 0;
    
btn.addEventListener('click', () => {
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
        clearInterval(interval)
        score = 0
        start()
    }
})


gameBlock.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createBall()
    }
})


function start() {
    timeOut.innerHTML = gameTime
    interval = setInterval(() => decrease(), 1000)
    createBall()
}

function decrease() {
    if(gameTime == 0) {
        end()
    }else {
        let currentTime = --gameTime
        timeOut.innerHTML = currentTime
    }
}

function end() {
    gameBlock.innerHTML = `<h2 class="result">Вы набрали ${score} баллов</h2>`
}


function createBall() {
    let ball = document.createElement('div')
    ball.classList.add('ball')
    
    let size = random(20,100);
    
    let { width, height } = gameBlock.getBoundingClientRect()
    
    let leftValue = random(0, width - size)
    let topValue  = random(0, height - size)
    
    let color = ['red','green','yellow','purple','white']

    let shape = random(1,4)
    if(shape == 1){
        ball.style.borderRadius = 'none'
        ball.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
    }else if(shape == 2){
        ball.style.borderRadius = 'none'
        ball.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'
    }else if(shape == 3){
        ball.style.borderRadius = 'none'
        ball.style.clipPath = 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
    }else{
        ball.style.borderRadius = '50%'
    }

    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.left = leftValue + 'px'
    ball.style.top = topValue + 'px'
    ball.style.background = color[random(0,4)]
    
    gameBlock.append(ball)
    
}


function random(min,max) {
    return Math.floor( Math.random() * (max + 1 - min) + min )
}