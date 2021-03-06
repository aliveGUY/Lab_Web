const canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const scaleX = 50;
const scaleY = 50;

const xAxis = Math.round(width / scaleX / 2) * scaleX;
const yAxis = Math.round(height / scaleX / 2) * scaleY;



ctx.fillStyle = '#000'
ctx.lineWidth = 3

for(let i =0; i <= width; i = i+scaleX){

    for(let j=0; j<= height; j = j+scaleY){

        const x = (i - xAxis)/scaleX;
        const y = (yAxis - j)/scaleY

        //Main equation
        const dy = -x/y

        //visualisation
        const length = Math.sqrt(Math.pow(((i+10) - i),2) + Math.pow(((j-dy*10)-j),2))
        ctx.fillText(Math.round(length*10/14)/10,i-10,j)
        console.log(Math.round(dy))
        
        
        if(dy > 0){
            ctx.strokeStyle = '#F0F000';
        }
        if(dy > 1){
            ctx.strokeStyle = '#E27B1B';
        }
        if(dy > 2){
            ctx.strokeStyle = '#E32B2B';
        }
        if(dy < 0){
            ctx.strokeStyle = '#BECA39';
        }
        if(dy < -1){
            ctx.strokeStyle = '#816D9C';
        }
        if(dy < -2){
            ctx.strokeStyle = '#562BE3';
        }

        //Drawing
        ctx.beginPath()
        ctx.moveTo(i, j);
        ctx.lineTo(i + (200/length), j - (dy/length) * 200);
        ctx.stroke()
        ctx.closePath()
    }

}

