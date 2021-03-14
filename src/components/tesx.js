function progressBar(context,cw,ch) {


    console.log('inside',al);
    // diff = (al / 220) * Math.PI * 1.57;
    // console.log(context);
    // context.clearRect(0, 0, 600, 500);
    // context.beginPath();
    // context.arc(cw, ch, 210, 0, 2 * Math.PI, false);

    // context.strokeStyle = "#e7f2ba";

    // context.strokeStyle = "#b3cf3c";

    // context.textAlign = "center";

    // context.lineWidth = 10;
    // context.lineCap = "round";
    // context.fillStyle = "#ffffff";
    // context.font = "30pt Verdana";

    // context.beginPath();
    // context.arc(cw, ch, 210, start, diff + start, false);
    // context.stroke();

    // context.fillText(al, cw + 2, ch + 6);
    // context.font = "10pt Verdana";
    // context.fillStyle = "#AC793B";
    // context.fillText("kmph", cw + 72, ch);

    if (al >= 220) {
      clearTimeout(bar.current);
    }

    al++;
  }

const draw = (ctx)=>{
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20, 0, 2*Math.PI)
    ctx.fill();
    console.log(al)
    ctx.font = "10pt Verdana";
    ctx.fillStyle = "#AC793B";
    ctx.fillText(al, 272, 200);
   
    setal(al++);
    console.log(al);
    
 
    
}
const fun = ()=>{
    console.log('stupid log',al);
    if(al>=10){
        clearTimeout(id);

    }
    al++;
}
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    ch.current = context.canvas.height/2; 
    cw.current = context.canvas.width/2;
    contextRef.current = context;
    console.log('width  is',cw);
   
    // setal(al++);
//    id = setInterval(draw(context), 1000);
//             return () => clearInterval(id);

    bar.current = setInterval(progressBar(contextRef.current,cw.current,ch.current),1000);

    // draw(context);    
    
  });
