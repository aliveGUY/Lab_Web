const canvas = document.getElementById('canvas');
const height = canvas.height/4;
const width = canvas.width/4;
let ctx = canvas.getContext('2d');
ctx.scale(2,2)
ctx.translate(width, height)
ctx.rotate(-Math.PI/2);

export default function showAxes() {
    ctx.beginPath();
    ctx.lineWidth = 1;

    // === X axis ===
    ctx.moveTo(0, -width)
    ctx.lineTo(0, width)
    // X arrow
    ctx.moveTo(0, width)
    ctx.lineTo(2.5, width-5)
    ctx.moveTo(0, width)
    ctx.lineTo(-2.5, width-5)
    // X tick
    for(let i = -width; i < width; i += 5){
        ctx.moveTo(2, i)
        ctx.lineTo(-2, i)
    }

    // === Y axis ===
    ctx.moveTo(-height,0)
    ctx.lineTo(height, 0)
    // Y arrow
    ctx.moveTo(height,0)
    ctx.lineTo(height-5, 2.5)
    ctx.moveTo(height,0)
    ctx.lineTo(height-5, -2.5)
    // X tick
    for(let i = -height; i < height; i += 5){
    ctx.moveTo(i, 2)
    ctx.lineTo(i, -2)
    }



    let first = true;
    for (let x = -width; x <= width; x += 1) {
        let y = Math.pow(x,2);

        if(first){
            ctx.moveTo(y, x);
            first= false

        }else{
            ctx.lineTo(y, x);
        }
    }
    ctx.stroke()
}