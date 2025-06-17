// Password for Drei's laptop
const CORRECT_PASSWORD = "dreimypookie";

// Get elements
const splash = document.getElementById('splash');
const login = document.getElementById('login');
const loginBox = document.querySelector('.login-box');
const loading = document.getElementById('loading');
const desktop = document.getElementById('desktop');
const helloDrei = document.getElementById('hello-drei');
const loadingBar = document.getElementById('loading-bar');

// Popups
const musicPopup = document.getElementById('music-popup');
const sentencesPopup = document.getElementById('sentences-popup');
const gamesPopup = document.getElementById('games-popup');

// App icons
const musicApp = document.getElementById('music-app');
const sentencesApp = document.getElementById('sentences-app');
const gamesApp = document.getElementById('games-app');

// Popup show/hide helpers
function openPopup(popup) {
  popup.classList.remove('hidden');
}
function closePopup(popup) {
  popup.classList.add('hidden');
}

// Splash -> Login -> Loading -> Desktop
window.onload = () => {
  splash.classList.remove('hidden');
  setTimeout(() => splash.classList.add('show'), 10);

  setTimeout(() => {
    splash.classList.remove('show');
    setTimeout(() => {
      splash.classList.add('hidden');
      login.classList.remove('hidden');
      setTimeout(() => {
        loginBox.classList.add('login-fadein');
      }, 60);
    }, 1000);
  }, 4000);
};

// Login logic
document.getElementById('login-btn').onclick = () => {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value;
  const error = document.getElementById('login-error');
  error.textContent = '';

  if (!username || !password) {
    error.textContent = 'Please enter both fields.';
    return;
  }
  if (password === CORRECT_PASSWORD) {
    login.classList.remove('show');
    setTimeout(() => {
      login.classList.add('hidden');
      loading.classList.remove('hidden');
      startLoadingScreen();
    }, 1000);
  } else {
    error.textContent = 'Wrong password!';
  }
};

// Loading screen logic
function startLoadingScreen() {
  helloDrei.style.opacity = 0;
  loadingBar.textContent = "0%";
  let percent = 0;
  setTimeout(() => { helloDrei.style.opacity = 1; }, 500);
  const interval = setInterval(() => {
    percent += Math.floor(Math.random() * 6) + 2;
    if (percent > 100) percent = 100;
    loadingBar.textContent = percent + "%";
    if (percent >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loading.classList.remove('show');
        setTimeout(() => {
          loading.classList.add('hidden');
          desktop.classList.remove('hidden');
        }, 1000);
      }, 900);
    }
  }, 100);
}

// --- Music app ---
musicApp.onclick = () => openPopup(musicPopup);
document.getElementById('close-music').onclick = () => closePopup(musicPopup);

// --- Sentences app with 100 sentences ---
const sentences = [
  "I'm here for you, no matter what.",
  "You're not alone in this.",
  "It's okay to not be okay.",
  "You are stronger than you think.",
  "Take your time to heal — there's no rush.",
  "I believe in you.",
  "You’ve made it through tough times before, and you will again.",
  "You are loved more than you realize.",
  "I’m proud of how far you’ve come.",
  "You don’t have to carry everything by yourself.",
  "You’re allowed to feel however you feel.",
  "I’m just a text or call away.",
  "You’re doing the best you can, and that’s enough.",
  "It’s okay to rest.",
  "Your feelings are valid.",
  "You are not a burden.",
  "There’s nothing wrong with needing support.",
  "I care about you deeply.",
  "You matter.",
  "You make a difference in the lives of others.",
  "You’ve got a kind heart, and that matters.",
  "It’s okay to let go of what hurts you.",
  "You are capable of amazing things.",
  "This won’t last forever.",
  "You deserve peace and happiness.",
  "I'm so lucky to know you.",
  "You’re not weak for needing help.",
  "There’s no shame in taking time for yourself.",
  "You light up rooms without even trying.",
  "You’ve impacted my life in a beautiful way.",
  "Better days are ahead.",
  "You are not defined by this moment.",
  "Your strength inspires me.",
  "I admire your honesty and courage.",
  "It’s okay to cry — it’s part of healing.",
  "You've done hard things before; you can do this too.",
  "I see your pain, and I care.",
  "You have every right to feel what you feel.",
  "I respect your journey, even when it's hard.",
  "Your story isn't over yet.",
  "You’re allowed to take a break from everything.",
  "I’m proud to be your friend.",
  "You are irreplaceable.",
  "You make life better just by being in it.",
  "You’re not alone in feeling this way.",
  "I’ll stand by you through anything.",
  "Your courage is beautiful.",
  "You’ve got so much to offer.",
  "Please don’t give up.",
  "I’m not going anywhere.",
  "You don’t have to do this all on your own.",
  "I admire your resilience.",
  "You’re doing better than you think.",
  "I’ll help you carry the weight when it feels too heavy.",
  "There’s so much good ahead for you.",
  "Even when things feel dark, you are a light.",
  "You’re worth every bit of love and kindness.",
  "I’m grateful you’re in my life.",
  "Your presence is a gift.",
  "I see the good in you, even when you can't.",
  "You have nothing to prove to anyone.",
  "You’re doing your best, and that’s enough.",
  "It's okay to take one step at a time.",
  "I’ll always listen without judgment.",
  "You’re allowed to set boundaries.",
  "You’re human — it’s okay to have rough days.",
  "You’ve survived 100% of your hardest days so far.",
  "Your heart is worth protecting.",
  "You’ve got people who care — like me.",
  "This pain won't last forever.",
  "You're doing a brave thing by just being here.",
  "There’s no weakness in being vulnerable.",
  "I trust in your strength.",
  "You're not broken — you're healing.",
  "I admire your kindness, even when you’re hurting.",
  "You can always start again.",
  "You’re allowed to change your mind and your path.",
  "You're more than your worst day.",
  "I believe things will get better for you.",
  "You’re not a failure — you’re growing.",
  "You don’t have to be perfect to be loved.",
  "Your best is enough.",
  "You bring joy to more people than you know.",
  "You are worthy of good things.",
  "You’re not behind — you’re on your own timeline.",
  "I see so much potential in you.",
  "It’s okay to ask for what you need.",
  "You don’t need to apologize for being human.",
  "You’re learning, and that’s something to be proud of.",
  "I admire your ability to keep going.",
  "You bring light even on your dim days.",
  "I’m not just here for the good times.",
  "You deserve to be treated with care and respect.",
  "You are more than your mistakes.",
  "You’ve helped others — let others help you too.",
  "You are a good person, even when things feel messy.",
  "You’re not stuck — you’re growing through something.",
  "There’s hope, even if it’s hard to see right now.",
  "The world is better with you in it.",
  "I’ve got your back, always."
];
sentencesApp.onclick = () => {
  openPopup(sentencesPopup);
  const container = document.querySelector("#sentences-content .letter");
  container.innerHTML = sentences.map((line, i) => `<p style="margin:0 0 1.1em 0;"><b>${i + 1}.</b> ${line}</p>`).join("");
};
document.getElementById('close-sentences').onclick = () => closePopup(sentencesPopup);

// --- Games app with duo/single modes ---
const gameSelect = document.getElementById('game-select');
const gameFrameContainer = document.getElementById('game-frame-container');
const modeSelectContainer = document.getElementById('mode-select-container');
const modeSelect = document.getElementById('mode-select');

gamesApp.onclick = () => {
  openPopup(gamesPopup);
  gameSelect.value = "tictactoe";
  updateGameDisplay();
};

gameSelect.onchange = updateGameDisplay;
modeSelect.onchange = updateGameDisplay;

function updateGameDisplay() {
  const selected = gameSelect.value;
  if (selected === "tictactoe") {
    modeSelectContainer.style.display = '';
    renderTicTacToe(modeSelect.value || "bot");
  } else if (selected === "snake") {
    modeSelectContainer.style.display = 'none';
    gameFrameContainer.innerHTML = `<div id="snake-container" style="width:320px;height:320px;margin:auto;display:flex;align-items:center;justify-content:center;"></div>`;
    window.startSnake && window.startSnake(document.getElementById('snake-container'));
  } else if (selected === "2048") {
    modeSelectContainer.style.display = 'none';
    gameFrameContainer.innerHTML = `<div id="game-2048-container" style="width:320px;height:400px;margin:auto;display:flex;align-items:center;justify-content:center;"></div>`;
    window.start2048 && window.start2048(document.getElementById('game-2048-container'));
  } else {
    modeSelectContainer.style.display = 'none';
    let frames = {
      flappy: `<iframe src="https://flappybird.io/" width="320" height="400"></iframe>`,
      sudoku: `<iframe src="https://sudoku.com/" width="320" height="400"></iframe>`,
      minesweeper: `<iframe src="https://minesweeperonline.com/" width="320" height="400"></iframe>`
    };
    gameFrameContainer.innerHTML = frames[selected] || "";
  }
}
document.getElementById('close-games').onclick = () => closePopup(gamesPopup);

// --- Modern, working Tic Tac Toe ---
function renderTicTacToe(mode) {
  gameFrameContainer.innerHTML = `
    <div id="ttt-board" style="display:grid;grid-template-columns:repeat(3,90px);grid-gap:8px;justify-content:center;margin-bottom:12px;"></div>
    <div id="ttt-message" style="margin-bottom:10px;text-align:center;font-size:1.1em;color:#fff;"></div>
    <button id="ttt-reset" style="margin:auto;display:block;background:#181818;color:#fff;border:1px solid #fff;border-radius:7px;padding:0.4em 1em;font-size:1em;cursor:pointer;transition:background .2s;">Restart</button>
  `;
  const boardDiv = document.getElementById('ttt-board');
  const messageDiv = document.getElementById('ttt-message');
  const resetBtn = document.getElementById('ttt-reset');
  let board = Array(9).fill(null);
  let turn = 'X';
  let running = true;

  function renderBoard() {
    boardDiv.innerHTML = '';
    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.style.width = '90px';
      cell.style.height = '90px';
      cell.style.background = '#111';
      cell.style.display = 'flex';
      cell.style.alignItems = 'center';
      cell.style.justifyContent = 'center';
      cell.style.fontSize = '2.6em';
      cell.style.cursor = board[i] || !running ? 'default' : 'pointer';
      cell.style.border = '2px solid #fff';
      cell.style.borderRadius = '16px';
      cell.style.transition = 'background 0.25s';
      cell.textContent = board[i] || '';
      cell.onclick = () => makeMove(i);
      boardDiv.appendChild(cell);
    }
  }
  function makeMove(i) {
    if (!running || board[i]) return;
    board[i] = turn;
    renderBoard();
    if (checkWin(turn)) {
      running = false;
      messageDiv.textContent = turn + ' wins!';
      return;
    } else if (board.every(x => x)) {
      running = false;
      messageDiv.textContent = "Draw!";
      return;
    }
    if (mode === 'bot') {
      turn = (turn === 'X' ? 'O' : 'X');
      if (turn === 'O') {
        setTimeout(botMove, 400);
      }
    } else {
      turn = (turn === 'X' ? 'O' : 'X');
      messageDiv.textContent = "Turn: " + turn;
    }
  }
  function botMove() {
    if (!running) return;
    let move = findBestMove('O') || findBestMove('X');
    if (move === null) {
      let empty = board.map((v,i)=>v?null:i).filter(v=>v!==null);
      move = empty[Math.floor(Math.random()*empty.length)];
    }
    board[move] = 'O';
    renderBoard();
    if (checkWin('O')) {
      running = false;
      messageDiv.textContent = 'O (bot) wins!';
      return;
    } else if (board.every(x => x)) {
      running = false;
      messageDiv.textContent = "Draw!";
      return;
    }
    turn = 'X';
    messageDiv.textContent = "Turn: X";
  }
  function findBestMove(p) {
    const lines = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];
    for (let line of lines) {
      const vals = line.map(idx=>board[idx]);
      if (vals.filter(v=>v===p).length===2 && vals.includes(null))
        return line[vals.indexOf(null)];
    }
    return null;
  }
  function checkWin(p) {
    return [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ].some(line => line.every(idx => board[idx] === p));
  }
  resetBtn.onclick = ()=>{
    board = Array(9).fill(null);
    turn = 'X';
    running = true;
    messageDiv.textContent = mode === 'bot' ? "Turn: X" : "Turn: X";
    renderBoard();
  };
  messageDiv.textContent = mode === 'bot' ? "Turn: X" : "Turn: X";
  renderBoard();
}