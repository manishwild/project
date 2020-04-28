//getting html elements
window.onload = ()=>{
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let status = 'flying'
    
    //CREATING IMAGE
    let bird = new Image()
    bird.src = './img/1.png'
    bird.onload=function (e) {
    //creating some variables
    let frames = 0

       
        setInterval(() => {
            ctx.clearRect(0,0,423,170)
            if (status == 'flying') {
                 ctx.drawImage(bird,0,frames,423,150,0,0,180,180)
                 frames += 150
                 if (frames == 600) {
                     frames = 0
                 }
                 if (status == 'flying') {
                     ctx.drawImage(bird,0,600,423,150,0,-30,80,80)
                 }
            }
        }, 100);


    }
}