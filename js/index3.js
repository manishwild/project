//getting html elements
window.onload = ()=>{
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let status = 'flying'
    
    //CREATING IMAGE
    let bird = new Image()
    bird.src = './img/helicopter-spritesheet.png'
    bird.onload=function (e) {
    //creating some variables
    let frames = 0

       
        setInterval(() => {
            ctx.clearRect(0,0,423,170,left,top,180,180)
            if (status == 'flying') {
                 ctx.drawImage(bird,0,frames,423,150,left,top,180,180)
                 frames += 150
                 if (frames == 600) {
                     frames = 0
                 }
                 if (status == 'flying') {
                     ctx.drawImage(bird,0,600,423,150,left,top,180,180)
                 }
            }
        }, 100);
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
}