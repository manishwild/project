//get html element
const canvas = document.querySelector('#canvas')
const ctx = canvas.getContext('2d')
// game variable
let frames = 0
//load img
const img = new Image()
img.src = './img/sprite.png'
//game state
const state = {
    current:0,
    getReady:0,
    game:1,
    over:2
}
//Control the game
canvas.addEventListener('click',(evt)=>{
    switch (state.current) {
        case state.getReady:
            state.current = state.game
            break;
        case state.game:
            bird.flap()
            break;
        case state.over:
            state.current = state.getReady
            break;    
    }
})

//background image
const bg = {
    sX: 0,
    sY : 0,
    w: 275,
    h: 226,
    x: 0,
    y:canvas.height-226,
    draw:  ()=> {
        ctx.drawImage(img,sX,sY,w,h,x,y,w,h)
        ctx.drawImage(img,sX,sY,w,h,x,y,w,h)
    }
}
//foreground
const fg = {
    sX: 276,
    sY : 0,
    w: 224,
    h: 112,
    x: 0,
    y:canvas.height-112,
    draw:  ()=> {
        ctx.drawImage(img,sX,sY,w,h,x,y,w,h)
        ctx.drawImage(img,sX,sY,w,h,x,y,w,h)
    }
}
//bird object
const bird ={
    animation : [
        {sX:276,sY:112},
        {sX:276,sY:139},
        {sX:276,sY:164},
        {sX:276,sY:139}

    ],
    x:50,
    y:150,
    w:34,
    h:26,
    frame:0,
    draw:()=>{
        let bird = animation[frame]
        ctx.drawImage(img,bird.sX,bird.sY,w,h,x-w/2,y-h/2,w,h)
    },
    flap : function () {
        
    }
}
//getready message
const getReady = {
    sX: 0,
    sY : 228,
    w: 173,
    h: 152,
    x: canvas.width/2 -173/2,
    y:80,
    draw:  ()=> {
        if (state.current == state.getReady) {
            ctx.drawImage(img,sX,sY,w,h,x,y,w,h)
            
        
    }
}
}
//game over massage
const gameOver = {
    sX: 175,
    sY : 228,
    w: 225,
    h: 202,
    x: canvas.width/2 -225/2,
    y:90,
    draw:  ()=> {
        if (state.current == state.over) {
            ctx.drawImage(img,sX,sY,w,h,x,y,w,h)
            ctx.drawImage(img,sX,sY,w,h,x,y,w,h)
        }
        
        
    }
}

const name = {
    sX: 276,
    sY : 112,
    w: 34 ,
    h: 26,
    x: 0,
    y:0,
    draw:  ()=> {
        ctx.drawImage(img,sX,sY,w,h,x,y,w,h)
    }
}

//ctx.drawImage(img,sX,sY,sWidth,sHeight,dX,dY,dWidth,dHeight)
//draw function
function draw() {
    name.draw()
    ctx.fillStyle = '#70c5ce'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    bg.draw()
    fg.draw()
    bird.draw()
    getReady.draw()
    gameOver.draw()
}
//update function
function update() {
    
}
//loop function
function loop() {
    update()
    draw()
    frames++
    requestAnimationFrame(loop)
}
loop()
