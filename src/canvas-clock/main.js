/**
 * Created by Clara on 2017/5/27.
 */
var windowWidth, windowHeight, circleRadius, circleTop, circleLeft;
var curTimeSec = 0;


var balls = [];
//var colors = ["#364f6b","#baaf92","#303a52","#887575","#ac4c5e"];
//var colors = ["#9D3978","#C75696","#FFAAA5","#FFD3B6"];
var colors = ["#9d9d9d","#8a7238","#fbe9a0"];

window.onload = function() {

    //屏幕大小自适应
    windowWidth = document.body.clientWidth;
    windowHeight = document.body.clientHeight;
    circleLeft = Math.round(windowWidth /7);
    circleRadius = Math.round(windowWidth * 4 / 5 / 108)-3;
    circleTop = Math.round(windowWidth /6);


    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    canvas.width = windowWidth;
    canvas.height = windowHeight;

    curTimeSec = getCurrentTimeSec();

    // 设置动画
    setInterval(function() {
        render(context);
        update();
    }, 50);

    //使用context进行绘制
};

function getCurrentTimeSec() {
    var curTime = new Date();
    var result = curTime.getHours() * 3600 + curTime.getMinutes() * 60 + curTime.getSeconds();
    return result;
}


function update() {
    var nextTimeSec = getCurrentTimeSec();
    var nextHours = parseInt(nextTimeSec / 3600);
    var nextMinutes = parseInt((nextTimeSec - nextHours * 3600) / 60);
    var nextSeconds = nextTimeSec % 60;

    var curHours = parseInt(curTimeSec / 3600);
    var curMinutes = parseInt((curTimeSec - curHours * 3600) / 60);
    var curSeconds = curTimeSec % 60;

    if (nextSeconds != curSeconds) {
        if(parseInt(curHours/10) != parseInt(nextHours/10)){
            addBalls(circleLeft, circleTop, parseInt(curHours/10));
        }
        if(parseInt(curHours%10) != parseInt(nextHours%10)){
            addBalls(circleLeft + 15 * (circleRadius + 1), circleTop, parseInt(curHours%10));
        }
        if(parseInt(curMinutes/10) != parseInt(nextMinutes/10)){
            addBalls(circleLeft + 39 * (circleRadius + 1), circleTop, parseInt(curMinutes/10));
        }
        if(parseInt(curMinutes%10) != parseInt(nextMinutes%10)){
            addBalls(circleLeft + 54 * (circleRadius + 1), circleTop, parseInt(curMinutes%10));
        }
        if(parseInt(curSeconds/10) != parseInt(nextSeconds/10)){
            addBalls(circleLeft + 78 * (circleRadius + 1), circleTop, parseInt(curMinutes/10));
        }
        if(parseInt(curSeconds%10) != parseInt(nextSeconds%10)){
            addBalls(circleLeft + 93 * (circleRadius + 1), circleTop, parseInt(curMinutes%10));
        }
        curTimeSec = nextTimeSec;
    }
    updateBalls();
}

function updateBalls(){
    for(var i = 0; i < balls.length; i++){
        balls[i].x += balls[i].vx;
        balls[i].y += balls[i].vy;
        balls[i].vy += balls[i].g;
        //碰撞检测
        if(balls[i].y >= windowHeight - circleRadius){
            balls[i].y = windowHeight - circleRadius;
            balls[i].vy = - balls[i].vy * 0.65;
        }
    }

    //动画性能优化，让跳出画布的小球不耗能
    var cnt = 0;
    for(var i = 0; i < balls.length; i++)
        if(balls[i].x + circleRadius > 0 && balls[i].x - circleRadius < windowWidth)
            balls[cnt++] = balls[i];

    while(balls.length > Math.min(300,cnt)){
        balls.pop();
    }
    console.log(balls.length);
}

function addBalls(x, y, num){

    for(var i = 0; i < digit[num].length; i++)
        for(j = 0; j < digit[num][i].length; j++)
             //小球运动轨迹
            if(digit[num][i][j] == 1){
                var aBall = {
                    x: x + j * 2 * (circleRadius + 1) + (circleRadius + 1),
                    y: y + i * 2 * (circleRadius + 1) + (circleRadius + 1),
                    g: 1.5 * Math.random(),
                    vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                    vy: -4,
                    color: colors[Math.floor(Math.random() * colors.length)]
                };
                balls.push(aBall);
            }
}



function render(context) {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    var hours = parseInt(curTimeSec / 3600);
    var minutes = parseInt((curTimeSec - hours * 3600) / 60);
    var seconds = curTimeSec % 60;

    renderDigit(circleLeft, circleTop, parseInt(hours / 10), context);
    renderDigit(
        circleLeft + 15 * (circleRadius + 1),
        circleTop,
        parseInt(hours % 10),
        context
    );
    renderDigit(circleLeft + 30 * (circleRadius + 1), circleTop, 10, context);
    renderDigit(
        circleLeft + 39 * (circleRadius + 1),
        circleTop,
        parseInt(minutes / 10),
        context
    );
    renderDigit(
        circleLeft + 54 * (circleRadius + 1),
        circleTop,
        parseInt(minutes % 10),
        context
    );
    renderDigit(circleLeft + 69 * (circleRadius + 1), circleTop, 10, context);
    renderDigit(
        circleLeft + 78 * (circleRadius + 1),
        circleTop,
        parseInt(seconds / 10),
        context
    );
    renderDigit(
        circleLeft + 93 * (circleRadius + 1),
        circleTop,
        parseInt(seconds % 10),
        context
    );
    //绘制运动小球
    for(var i = 0; i < balls.length; i++ ){
        context.fillStyle = balls[i].color;

        context.beginPath();
        context.arc(balls[i].x ,balls[i].y, circleRadius - 1.5, 0, 2 * Math.PI);
        context.closePath();

        context.fill();
    }

}

//绘制时钟
function renderDigit(x, y, num, context) {
    context.fillStyle = "#ffc801";

    for (var i = 0; i < digit[num].length; i++)
        for (j = 0; j < digit[num][i].length; j++)
            if (digit[num][i][j] == 1) {
                context.beginPath();
                context.arc(
                    x + j * 2 * (circleRadius + 1) + (circleRadius + 1),
                    y + i * 2 * (circleRadius + 1) + (circleRadius + 1),
                    circleRadius,
                    0,
                    2 * Math.PI
                );
                context.closePath();
                context.fill();
            }
}
