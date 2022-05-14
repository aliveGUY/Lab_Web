const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const scaleX = 50;
const scaleY = 50;

const xAxis = Math.round(width / scaleX / 2) * scaleX;
const yAxis = Math.round(height / scaleX / 2) * scaleY;



//Graph
ctx.beginPath()
ctx.fillStyle = '#DC143C';
for(let i =0; i <= width; i++){
    const x = (i - xAxis) /scaleX;
    const y = Math.sin(3*x)/x;

    ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4)
}
ctx.closePath()