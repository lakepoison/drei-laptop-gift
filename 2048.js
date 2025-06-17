window.start2048 = function (container) {
  // Simple 2048 implementation, no animations for brevity
  let size = 4, grid = [], score = 0;
  function randomEmpty() {
    let empty = [];
    for (let r=0;r<size;++r) for (let c=0;c<size;++c) if (!grid[r][c]) empty.push([r,c]);
    return empty.length ? empty[Math.floor(Math.random()*empty.length)] : null;
  }
  function addTile() {
    let pos = randomEmpty();
    if (!pos) return;
    grid[pos[0]][pos[1]] = Math.random()<0.9?2:4;
  }
  function draw() {
    let html = `<div style="margin-bottom:8px;color:#fff;text-align:center;">score: ${score}</div>
      <div style="display:grid;grid-template-columns:repeat(${size},60px);grid-gap:6px;">`;
    for (let r=0;r<size;++r)
      for (let c=0;c<size;++c) {
        let val = grid[r][c]||'';
        html += `<div style="background:${val?'#f4e09a':'#222'};width:60px;height:60px;display:flex;align-items:center;justify-content:center;font-family:sans-serif;font-size:1.4em;font-weight:bold;border-radius:10px;color:#222;">${val}</div>`;
      }
    html += "</div>";
    if (isGameOver()) html += `<div style="margin-top:12px;color:#fff;">Game Over! Press R to restart.</div>`;
    container.innerHTML = html;
  }
  function move(dir) {
    let moved = false, addScore=0;
    function slide(row) {
      let arr = row.filter(x=>x), out=[];
      for(let i=0;i<arr.length;i++) {
        if(arr[i]&&arr[i]===arr[i+1]) { out.push(arr[i]*2); addScore+=arr[i]*2; i++; }
        else out.push(arr[i]);
      }
      while(out.length<size) out.push(0);
      return out;
    }
    for(let i=0;i<size;i++) {
      let row = [];
      for(let j=0;j<size;j++) row.push(
        dir===0?grid[i][j] : dir===1?grid[j][i] : dir===2?grid[i][size-1-j] : grid[size-1-j][i]
      );
      let slided = slide(row);
      for(let j=0;j<size;j++) {
        let v = dir===0?grid[i][j]:dir===1?grid[j][i]:dir===2?grid[i][size-1-j]:grid[size-1-j][i];
        if(v!==slided[j]) moved=true;
        if(dir===0) grid[i][j]=slided[j];
        else if(dir===1) grid[j][i]=slided[j];
        else if(dir===2) grid[i][size-1-j]=slided[j];
        else grid[size-1-j][i]=slided[j];
      }
    }
    if(moved){ score+=addScore; addTile(); draw(); }
  }
  function isGameOver() {
    for(let r=0;r<size;++r) for(let c=0;c<size;++c)
      if(!grid[r][c]) return false;
    for(let r=0;r<size;++r) for(let c=0;c<size;++c) {
      let v=grid[r][c];
      if(r>0 && grid[r-1][c]===v) return false;
      if(c>0 && grid[r][c-1]===v) return false;
    }
    return true;
  }
  function key(e) {
    if(isGameOver() && e.key.toLowerCase()==="r") return start();
    if(e.key==="ArrowUp") move(1);
    else if(e.key==="ArrowDown") move(3);
    else if(e.key==="ArrowLeft") move(0);
    else if(e.key==="ArrowRight") move(2);
  }
  function start() {
    grid = Array(size).fill(0).map(()=>Array(size).fill(0));
    score=0;
    addTile(); addTile();
    draw();
  }
  document.addEventListener("keydown", key);
  start();
  container.game2048Cleanup = () => document.removeEventListener("keydown", key);
};