        const btn = document.getElementById('btn');
        const container = document.getElementById('container');
        let height = container.clientHeight;
        let width = container.clientWidth;
        console.log(width,height);
        let color = ['red','blue','green','black','purple', 'pink', 'gray', 'iceblue', 'yellow'];

        container.onclick = function(e){
        let ball = document.createElement('div');
        ball.classList.add('newBall');
        ball.style.backgroundColor = color[Math.floor(Math.random() * color.length)];
        ball.style.left = Math.random() * ( width-21) + 'px';
        ball.style.top  = Math.random() *  (height-21) + 'px';
        console.log(ball.style.left, ball.style.top);
        let i = 0;
        ball.id = i;
        container.appendChild(ball);
        
        // ball move
        let direction = 1;
        let ballMovement;
        function ballMove(){
            ballMovement= setInterval(() => {
             let currentTop = ball.style.top;
             console.log(currentTop);
             let newTop = parseInt(currentTop) + 5 * direction ;
             ball.style.top = newTop + 'px';

            console.log(newTop);
            if( newTop >= (height - 20) || (newTop) <=0)  {
               direction *= -1 ;
            } 
        }, 1000/60);
        }
          
        container.appendChild(ball);
        ballMove();
i++;
        }

