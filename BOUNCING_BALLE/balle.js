var canvas;
var ctx;
var gravity = 0.5;
var bounceFactor = 0.7;
var xFriction = 0.1;

var balls = [];

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.radius = (Math.random() * (30 - 5)) + 5;
    this.color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    this.vx = Math.ceil(Math.random() * 5) * (Math.round(Math.random()) ? 1 : -1);
    this.vy = (Math.random() * -15) + -5;
}

Ball.prototype = {
    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    },

    update: function () {
        this.x += this.vx;
        this.y += this.vy;
        this.vy += gravity;

        //If either wall is hit, change direction on x axis
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.vx *= -1;
        }

        // Ball hits the floor
        if (this.y + this.radius > canvas.height) {
            // Re-positioning on the base
            this.y = canvas.height - this.radius;
            //bounce the ball
            this.vy *= -bounceFactor;
            //do this otherwise, ball never stops bouncing
            if (this.vy < 0 && this.vy > -2.1)
                this.vy = 0;
            //do this otherwise ball never stops on xaxis
            if (Math.abs(this.vx) < 1.1)
                this.vx = 0;

            //velocity    
            if (this.vx > 0)
                this.vx = this.vx - xFriction;
            if (this.vx < 0)
                this.vx = this.vx + xFriction;
        }

    }
};

function init() {
    canvas = document.getElementById("balleCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth - 40;
    canvas.height = window.innerHeight - 150;

    canvas.addEventListener('click', function (event) {
        var rect = this.getBoundingClientRect(),  // adjust mouse position
            x = event.clientX - rect.left,
            y = event.clientY - rect.top;
        balls.push(new Ball(x, y));
        if (balls.length > 100) {
            balls.shift();
            console.log("trop de balles > 100");
        }
        console.log(balls.length);
    });

    update();
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(update);
    for (var i = 0, ball; ball = balls[i]; i++) {
        ball.draw();
        ball.update();
    }
}
