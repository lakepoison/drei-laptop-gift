window.startSnake = function (container) {
  container.innerHTML = `<canvas id="snake-canvas" width="320" height="320" style="background:#191919;border-radius:10px;box-shadow:0 2px 12px #0005"></canvas>`;
  const canvas = document.getElementById('snake-canvas');
  const ctx = canvas.getContext('2d');
  const size = 20, count = 16;
  let snake = [{x:8, y:8}], direction = {x:0,y:0}, food = {x:4,y:4}, dead = false, score = 0;

  function draw() {
    ctx.fillStyle = "#191919";
    ctx.fillRect(0,0,320,320);
    ctx.fillStyle = "#bada55";
    snake.forEach(s=>ctx.fillRect(s.x*size,s.y*size,size-2,size-2));
    ctx.fillStyle = "#f33";
    ctx.fillRect(food.x*size, food.y*size, size-2, size-2);
    if (dead) {
      ctx.fillStyle = "#fff";
      ctx.font = "28px sans-serif";
      ctx.fillText("Game Over", 80,160);
      ctx.font = "18px sans-serif";
      ctx.fillText("Score: "+score, 120,190);
      ctx.fillText("Press R to restart", 86,220);
    }
  }
  function update() {
    if (dead) return;
    const head = {...snake[0]};
    head.x += direction.x; head.y += direction.y;
    if (head.x<0||head.x>=count||head.y<0||head.y>=count||snake.some(s=>s.x===head.x&&s.y===head.y)) {
      dead = true; draw(); return;
    }
    snake.unshift(head);
    if (head.x===food.x&&head.y===food.y) {
      score++;
      food = {x:Math.floor(Math.random()*count),y:Math.floor(Math.random()*count)};
      while (snake.some(s=>s.x===food.x&&s.y===food.y)) {
        food = {x:Math.floor(Math.random()*count),y:Math.floor(Math.random()*count)};
      }
    } else snake.pop();
    draw();
  }
  function key(e) {
    if (dead && e.key.toLowerCase()==="r") {
      snake = [{x:8, y:8}]; direction={x:0,y:0}; food={x:4,y:4}; score=0; dead=false; draw();
      return;
    }
    let d = direction;
    if (e.key==="ArrowLeft" && d.x===0) direction={x:-1,y:0};
    else if (e.key==="ArrowUp" && d.y===0) direction={x:0,y:-1};
    else if (e.key==="ArrowRight" && d.x===0) direction={x:1,y:0};
    else if (e.key==="ArrowDown" && d.y===0) direction={x:0,y:1};
  }
  document.addEventListener("keydown", key);
  draw();
  let interval = setInterval(()=>{update()}, 110);
  container.snakeCleanup = () => {
    document.removeEventListener("keydown", key);
    clearInterval(interval);
  };
};