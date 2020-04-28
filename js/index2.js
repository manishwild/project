//getting html elements
window.onload = ()=>{
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let status = 'flying'
    
    //CREATING IMAGE
    let bird = new Image()
    bird.src = './img/bird-s.png'
    bird.onload=function (e) {
    //creating some variables
    let frames = 0

       
        setInterval(() => {
            ctx.clearRect(0,0,600,200)
            if (status == 'flying') {
                 ctx.drawImage(bird,frames,0,110,101,left,top,60,60)
                 frames += 110
                 if (frames == 550) {
                     frames = 0
                 }
                 if (status == 'flying') {
                     ctx.drawImage(bird,550,0,110,101,left,top,60,60)
                 }
            }
        }, 200);


    }
    let left = 0
    let top = 0
    window.onkeydown = function(e){
        console.log(e);
        if(e.key == 'ArrowUp'){
            top -=10
        }
        if(e.key == 'ArrowDown'){
            top +=10
        }
        if(e.key == 'ArrowRight'){
            left +=10
        }
        if(e.key == 'ArrowLeft'){
            left -=10
        }
        
    } 
}