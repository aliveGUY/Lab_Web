const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const width = canvas.clientWidth;
const height = canvas.clientHeight;

const scaleX = 50;
const scaleY = 50;

ctx.beginPath()
ctx.strokeStyle = '#f5f0e8';

for(let i = 0; i <= width; i = i+scaleX){
    ctx.moveTo(i, 0);
    ctx.lineTo(i, height)
}
ctx.stroke()