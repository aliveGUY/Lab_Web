const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const scaleX = 50;
const scaleY = 50;

const xAxis = Math.round(width / scaleX / 2) * scaleX;
const yAxis = Math.round(height / scaleX / 2) * scaleY;



ctx.fillStyle = 'green'
ctx.strokeStyle = '#FF00FF';
ctx.lineWidth = 2

ctx.beginPath()
for(let i =0; i <= width; i = i+scaleX){

    for(let j=0; j<= height; j = j+scaleY){

        const dy = ((i - xAxis)/scaleX) - ((yAxis - j)/scaleY)
        ctx.fillText(dy,i-10,j)

        ctx.moveTo(i, j);
        ctx.lineTo(i + 10, j - dy * 10);

    }

}
ctx.stroke()
ctx.closePath()
