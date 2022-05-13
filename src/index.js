import './index.css'


const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const scaleX = 50;
const scaleY = 50;
const tickShift = 5;
const shiftAxesName = 20

const xAxis = Math.round(width / scaleX / 2) * scaleX;
const yAxis = Math.round(height / scaleX / 2) * scaleY;

ctx.font = `${Math.round(scaleX/3)}px Arial`;
ctx.textAlign = 'left';
ctx.textBaseline = 'top';

//grid
ctx.beginPath()
ctx.strokeStyle = '#f5f0e8';

for(let i = 0; i <= width; i = i+scaleX){
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height)

    ctx.fillText((i - xAxis) / scaleX, i + tickShift, yAxis + tickShift)
}

for(let i = 0; i <= height; i = i+scaleY){
    ctx.moveTo(0, i);
    ctx.lineTo(width, i)

    ctx.fillText((yAxis - i) / scaleY, xAxis + tickShift, i + tickShift)
}
ctx.stroke()
ctx.closePath()

//draw axes
ctx.beginPath()
ctx.strokeStyle = '#000';
ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, height)
ctx.fillText('y', xAxis - shiftAxesName, 0)

ctx.moveTo(0, yAxis);
ctx.lineTo(width, yAxis);
ctx.fillText('x', width - shiftAxesName, yAxis - shiftAxesName )

ctx.stroke()
ctx.closePath()

//Graph
ctx.beginPath()
ctx.fillStyle = '#DC143C';
for(let i =0; i <= width; i++){
    const x = (i - xAxis) / scaleX;
    const y = Math.exp(x);

    ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4)
}
