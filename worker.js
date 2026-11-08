const PAGE = String.raw`<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#07131f">
<meta name="description" content="KING FOOTBALL ARENA — futebol 3D no navegador. Entre em campo e marque gols.">
<title>KING FOOTBALL ARENA</title>
<style>
:root{color-scheme:dark;--bg:#07131f;--panel:#0d1d2b;--panel2:#13283a;--line:#244057;--text:#f3f8fb;--muted:#9fb3c3;--blue:#38a9ff;--blue2:#126ed0;--red:#ff625f;--gold:#f4c76a;--green:#42d98b}
*{box-sizing:border-box}
html,body{margin:0;min-height:100%;background:radial-gradient(ellipse at 50% -20%,#173b55 0,#07131f 55%);color:var(--text);font:15px/1.45 Inter,system-ui,Arial,sans-serif}
button{font:inherit;color:inherit;cursor:pointer}
button:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.app{max-width:1450px;margin:0 auto;padding:0 22px 26px}
.topbar{height:78px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #ffffff12;gap:18px}
.brand{display:flex;align-items:center;gap:12px;min-width:0}
.brandmark{width:42px;height:42px;border-radius:13px;background:linear-gradient(145deg,#55c8ff,#0966cb);display:grid;place-items:center;box-shadow:0 8px 28px #1687d544;font-size:23px}
.brand h1{font-size:19px;line-height:1;margin:0;font-weight:950;letter-spacing:1.5px}
.brand h1 span{color:#55c8ff}
.brand small{display:block;color:var(--muted);font-size:9px;letter-spacing:2.4px;margin-top:6px}
.top-actions{display:flex;align-items:center;gap:10px}
.pill{border:1px solid var(--line);background:#0b1d2a;border-radius:30px;padding:8px 12px;color:var(--muted);font-size:12px}
.pill strong{color:var(--green);font-weight:800}
.icon-btn{width:40px;height:40px;border:1px solid var(--line);border-radius:12px;background:var(--panel);font-size:17px}
.layout{display:grid;grid-template-columns:minmax(0,1fr) 285px;gap:18px;margin:20px auto 0;max-width:1370px}
.panel{background:linear-gradient(160deg,#102638,#0b1b29);border:1px solid #28465d;border-radius:20px;box-shadow:0 18px 48px #0003;min-width:0}
.arena{padding:15px}
.match-top{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}
.match-title{display:flex;align-items:center;gap:9px;font-size:12px;color:var(--muted);letter-spacing:1.6px;font-weight:800}
.live-dot{width:8px;height:8px;border-radius:50%;background:var(--green);box-shadow:0 0 12px #42d98b}
.match-actions{display:flex;gap:8px;align-items:center}
.small-btn{background:#173149;border:1px solid #31536b;border-radius:10px;padding:8px 11px;font-size:11px;color:#d9e9f2}
.scoreboard{display:grid;grid-template-columns:1fr auto 1fr;align-items:center;gap:12px;padding:12px 15px;background:#06121d;border:1px solid #28445b;border-radius:15px;margin-bottom:12px}
.team-label{display:flex;align-items:center;gap:9px;font-size:12px;font-weight:900;letter-spacing:1px}
.team-label.away{justify-content:flex-end;text-align:right}
.crest{width:30px;height:30px;border-radius:9px;display:grid;place-items:center;font-weight:950;color:white}
.crest.home{background:linear-gradient(145deg,#50c5ff,#0a62c5)}
.crest.away{background:linear-gradient(145deg,#ff8981,#b9253b)}
.score-center{display:flex;align-items:center;gap:12px}
.score{font-size:29px;font-weight:950;letter-spacing:2px;font-variant-numeric:tabular-nums}
.clock{min-width:54px;text-align:center;color:var(--gold);font-size:12px;font-weight:900;background:#292617;border:1px solid #5f5127;border-radius:8px;padding:6px 8px}
.stage{position:relative;width:100%;aspect-ratio:16/10;min-height:275px;border-radius:15px;overflow:hidden;background:linear-gradient(#a6d8ef,#d2e9ea 42%,#31744b 42%);border:1px solid #31516a}
#gameCanvas{width:100%;height:100%;display:block;touch-action:none}
.overlay{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;padding:18px;background:linear-gradient(120deg,#04111ddf,#071a2bd9);backdrop-filter:blur(5px);z-index:4}
.overlay.hidden{display:none}
.menu-card{width:min(510px,96%);padding:28px;border:1px solid #3d6782;border-radius:20px;background:linear-gradient(145deg,#14344b,#0b1d2c);text-align:center;box-shadow:0 24px 75px #0008}
.menu-eyebrow{font-size:10px;letter-spacing:3px;color:#7dd3fc;font-weight:900}
.menu-card h2{font-size:clamp(30px,5vw,46px);line-height:1;margin:13px 0 10px;letter-spacing:-1.6px}
.menu-card h2 span{color:#55c8ff}
.menu-card p{margin:0 auto 18px;color:#b9cad5;max-width:410px;font-size:13px}
.diff-row{display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin:17px 0}
.diff{border:1px solid #3b5e73;border-radius:10px;background:#0a1c2a;padding:9px 13px;font-size:11px;color:#b8cbd7;font-weight:800}
.diff.active{border-color:#55c8ff;background:#12395b;color:#fff;box-shadow:inset 0 0 0 1px #55c8ff55}
.primary{border:0;border-radius:12px;padding:14px 20px;background:linear-gradient(100deg,#56caff,#1979d7);color:#04111d;font-weight:950;letter-spacing:1px;box-shadow:0 9px 25px #147ed044;width:100%}
.primary:disabled{opacity:.55;cursor:wait}
.loading{display:flex;flex-direction:column;gap:10px;align-items:center;color:#d8e7f0;font-size:12px}
.spinner{width:32px;height:32px;border:3px solid #ffffff28;border-top-color:#55c8ff;border-radius:50%;animation:spin .8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.goal-flash{position:absolute;inset:0;display:grid;place-items:center;pointer-events:none;opacity:0;transition:opacity .2s;background:#07131f88;z-index:3}
.goal-flash strong{font-size:clamp(42px,9vw,90px);font-weight:1000;letter-spacing:3px;color:#fff;text-shadow:0 5px 25px #000,0 0 35px #4ac8ff}
.controlbar{display:grid;grid-template-columns:1fr auto;align-items:center;gap:16px;margin-top:14px}
.control-note{color:var(--muted);font-size:11px;line-height:1.6}
.control-note b{color:#eaf6ff}
.touch-controls{display:flex;gap:9px;align-items:center}
.stick-base{width:105px;height:78px;border-radius:18px;background:#071925;border:1px solid #31536a;position:relative;display:grid;place-items:center;touch-action:none;user-select:none}
.stick-base:before{content:"";width:53px;height:53px;border:1px dashed #47677d;border-radius:50%;position:absolute}
.stick-label{position:absolute;top:3px;left:0;right:0;text-align:center;font-size:8px;color:#6f8fa4;letter-spacing:1.6px;font-weight:900}
.stick-knob{width:35px;height:35px;border-radius:50%;background:linear-gradient(145deg,#61d3ff,#1675cb);border:2px solid #b6e9ff;box-shadow:0 4px 13px #0008;z-index:1;transform:translate(0,0);pointer-events:none}
.action-btn{min-width:70px;height:74px;border:1px solid #31536a;border-radius:16px;background:#102a3c;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:4px;font-size:9px;letter-spacing:1px;font-weight:900;color:#c9dce8;touch-action:none;user-select:none}
.action-btn span{font-size:22px;line-height:1}
.action-btn.shoot{background:linear-gradient(145deg,#1f8de0,#0e559b);border-color:#61c5ff;color:#fff;min-width:80px}
.action-btn.pass{background:#183b39;border-color:#317c68}
.action-btn.pressed{filter:brightness(1.3);transform:scale(.97)}
.charge{height:3px;width:70%;border-radius:3px;background:#ffffff35;overflow:hidden}
.charge i{display:block;width:0;height:100%;background:#f9d36b}
.sidebar{display:grid;align-content:start;gap:13px}
.side-card{padding:17px}
.side-title{font-size:11px;letter-spacing:2px;color:#7eabc5;font-weight:900;margin-bottom:13px}
.info-row{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:9px 0;border-bottom:1px solid #ffffff10;font-size:12px}
.info-row:last-child{border-bottom:0}
.info-row span{color:var(--muted)}
.info-row strong{font-weight:900}
.how{display:grid;gap:10px}
.how-item{display:flex;gap:10px;align-items:center;font-size:12px;color:#c2d3df}
.key{min-width:30px;height:27px;display:grid;place-items:center;border-radius:7px;background:#071722;border:1px solid #34566c;color:#f5fbff;font-size:11px;font-weight:900}
.tip{padding:12px;border-radius:12px;background:#0a1d2b;border:1px solid #234258;color:#a9c0cf;font-size:11px;line-height:1.6}
.tip b{color:#f3f8fb}
.record{display:flex;align-items:center;justify-content:space-between;gap:10px}
.record strong{font-size:23px}
.record span{font-size:10px;color:var(--muted);letter-spacing:1px}
.footer{max-width:1370px;margin:15px auto 0;display:flex;justify-content:space-between;gap:12px;color:#6f899d;font-size:10px;letter-spacing:.5px}
@media(max-width:980px){.layout{grid-template-columns:1fr}.sidebar{grid-template-columns:repeat(2,minmax(0,1fr))}.side-card:last-child{grid-column:1/-1}}
@media(max-width:620px){.app{padding:0 10px 18px}.topbar{height:65px}.brandmark{width:36px;height:36px}.brand h1{font-size:16px}.brand small{font-size:8px}.pill{display:none}.layout{margin-top:10px;gap:10px}.arena{padding:9px;border-radius:15px}.match-top{margin-bottom:8px}.scoreboard{padding:9px 8px;gap:5px}.team-label{font-size:9px;gap:5px;letter-spacing:.4px}.crest{width:25px;height:25px;border-radius:7px}.score{font-size:23px}.score-center{gap:7px}.clock{font-size:10px;min-width:45px;padding:5px}.stage{min-height:250px;aspect-ratio:1.23}.controlbar{grid-template-columns:1fr;gap:9px}.control-note{font-size:10px}.touch-controls{justify-content:space-between}.stick-base{width:100px;height:72px}.action-btn{height:68px;min-width:66px}.action-btn.shoot{min-width:76px}.sidebar{grid-template-columns:1fr 1fr;gap:8px}.side-card{padding:12px}.side-card:last-child{grid-column:1/-1}.footer{font-size:9px;flex-direction:column;gap:4px}.menu-card{padding:20px}.menu-card h2{font-size:34px}}
@media(hover:hover) and (pointer:fine){.touch-controls{opacity:.92}}
</style>
<script type="importmap">
{"imports":{"three":"https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js","three/addons/":"https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/"}}
</script>
</head>
<body>
<div class="app">
<header class="topbar">
  <div class="brand"><div class="brandmark">⚽</div><div><h1>KING <span>FOOTBALL</span></h1><small>ARENA 3D · MOBILE EDITION</small></div></div>
  <div class="top-actions"><div class="pill">STATUS <strong>● ONLINE</strong></div><button class="icon-btn" id="fullscreenBtn" aria-label="Tela cheia">⛶</button></div>
</header>
<main class="layout">
<section class="panel arena">
  <div class="match-top"><div class="match-title"><i class="live-dot"></i> KING ARENA <span>·</span> PARTIDA RÁPIDA</div><div class="match-actions"><button class="small-btn" id="pauseBtn">Ⅱ PAUSAR</button></div></div>
  <div class="scoreboard">
    <div class="team-label"><div class="crest home">K</div><span>KING FC</span></div>
    <div class="score-center"><strong class="score" id="homeScore">0</strong><div class="clock" id="clock">02:00</div><strong class="score" id="awayScore">0</strong></div>
    <div class="team-label away"><span>RIVAL FC</span><div class="crest away">R</div></div>
  </div>
  <div class="stage" id="stage">
    <canvas id="gameCanvas" aria-label="Campo de futebol 3D"></canvas>
    <div class="loading overlay" id="loading"><div class="spinner"></div><b>Preparando o estádio...</b><span id="loadingText">Carregando modelo 3D dos jogadores</span></div>
    <div class="overlay" id="menu">
      <div class="menu-card">
        <div class="menu-eyebrow">BEM-VINDO À KING ARENA</div>
        <h2 id="menuTitle">KING <span>FOOTBALL</span></h2>
        <p id="menuText">Entre em campo, controle seu jogador, faça passes e marque gols. Você contra o time rival.</p>
        <div class="diff-row" id="difficultyRow">
          <button class="diff" data-diff="easy">INICIANTE</button>
          <button class="diff active" data-diff="normal">NORMAL</button>
          <button class="diff" data-diff="hard">DIFÍCIL</button>
        </div>
        <button class="primary" id="startBtn" disabled>CARREGANDO MODELOS...</button>
      </div>
    </div>
    <div class="goal-flash" id="goalFlash"><strong>GOOOOL!</strong></div>
  </div>
  <div class="controlbar">
    <div class="control-note"><b>CONTROLES:</b> WASD ou setas para mover · Espaço para chutar · E para passe · Shift para correr.</div>
    <div class="touch-controls">
      <div class="stick-base" id="stickBase"><span class="stick-label">MOVER</span><div class="stick-knob" id="stickKnob"></div></div>
      <button class="action-btn pass" id="passBtn"><span>⇢</span>PASSE</button>
      <button class="action-btn shoot" id="shootBtn"><span>⚽</span>CHUTE<div class="charge"><i id="chargeFill"></i></div></button>
      <button class="action-btn" id="sprintBtn"><span>⚡</span>CORRER</button>
    </div>
  </div>
</section>
<aside class="sidebar">
  <div class="panel side-card">
    <div class="side-title">INFORMAÇÕES DA PARTIDA</div>
    <div class="info-row"><span>Formato</span><strong>4 contra 4</strong></div>
    <div class="info-row"><span>Duração</span><strong>2 minutos</strong></div>
    <div class="info-row"><span>Estádio</span><strong>King Arena</strong></div>
    <div class="info-row"><span>Modo</span><strong>Solo vs IA</strong></div>
    <div class="info-row"><span>Jogador</span><strong>Você · Nº 10</strong></div>
  </div>
  <div class="panel side-card">
    <div class="side-title">COMO JOGAR</div>
    <div class="how">
      <div class="how-item"><span class="key">WASD</span><span>Movimentar o jogador</span></div>
      <div class="how-item"><span class="key">E</span><span>Passar para o companheiro</span></div>
      <div class="how-item"><span class="key">ESPAÇO</span><span>Segure para carregar o chute</span></div>
      <div class="how-item"><span class="key">SHIFT</span><span>Correr mais rápido</span></div>
    </div>
  </div>
  <div class="panel side-card">
    <div class="side-title">SEU HISTÓRICO NESTE DISPOSITIVO</div>
    <div class="record"><div><strong id="wins">0</strong><br><span>VITÓRIAS</span></div><div><strong id="matches">0</strong><br><span>PARTIDAS</span></div><div><strong id="bestScore">0</strong><br><span>GOLS</span></div></div>
  </div>
  <div class="tip"><b>DICA:</b> aproxime-se da bola antes de chutar. Segure o botão de chute para aumentar a força e use o direcional para mudar a direção do jogador.</div>
</aside>
</main>
<footer class="footer"><span>KING FOOTBALL ARENA · JOGO 3D DE NAVEGADOR</span><span>Modelo de jogador Quaternius · CC0 · Three.js</span></footer>
</div>
<script type="module">
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

const $ = id => document.getElementById(id);
const canvas = $('gameCanvas');
const stage = $('stage');
const menu = $('menu');
const loading = $('loading');
const startBtn = $('startBtn');
const keys = Object.create(null);
const players = [];
const score = {home:0,away:0};
let scene, camera, renderer, playerAsset = null, modelBounds = null;
let ball = null, controlled = null, clockLeft = 120, matchRunning = false, paused = false;
let difficulty = 'normal', aiSpeed = 1, ownerTime = 0, goalPause = false, lastFrame = 0;
let shotHeld = false, shotStart = 0, sprintHeld = false;
let joy = {x:0,z:0,active:false};
let matchCount = Number(localStorage.getItem('kf_matches') || 0);
let winCount = Number(localStorage.getItem('kf_wins') || 0);
let bestGoals = Number(localStorage.getItem('kf_best') || 0);
$('wins').textContent = winCount;
$('matches').textContent = matchCount;
$('bestScore').textContent = bestGoals;

function clamp(v,min,max){return Math.max(min,Math.min(max,v));}
function fmtTime(value){const t=Math.max(0,Math.ceil(value));return String(Math.floor(t/60)).padStart(2,'0')+':'+String(t%60).padStart(2,'0');}
function say(message){$('menuText').textContent=message;}
function updateScoreboard(){
  $('homeScore').textContent=score.home;
  $('awayScore').textContent=score.away;
  $('clock').textContent=fmtTime(clockLeft);
}
function saveRecord(){
  matchCount++;
  if(score.home>score.away)winCount++;
  bestGoals=Math.max(bestGoals,score.home);
  localStorage.setItem('kf_matches',String(matchCount));
  localStorage.setItem('kf_wins',String(winCount));
  localStorage.setItem('kf_best',String(bestGoals));
  $('wins').textContent=winCount;
  $('matches').textContent=matchCount;
  $('bestScore').textContent=bestGoals;
}
function setMenu(mode){
  menu.classList.remove('hidden');
  if(mode==='pause'){
    $('menuTitle').innerHTML='PAUSA';
    $('menuText').textContent='A partida está pausada. Retome para continuar jogando.';
    $('difficultyRow').style.display='none';
    startBtn.textContent='VOLTAR À PARTIDA';
  }else if(mode==='end'){
    $('menuTitle').innerHTML=score.home>score.away?'VOCÊ <span>VENCEU!</span>':score.home<score.away?'FIM DE JOGO':'EMPATE';
    $('menuText').textContent='Placar final: KING FC '+score.home+' × '+score.away+' RIVAL FC. Jogue novamente para tentar melhorar seu resultado.';
    $('difficultyRow').style.display='none';
    startBtn.textContent='JOGAR NOVAMENTE';
  }else{
    $('menuTitle').innerHTML='KING <span>FOOTBALL</span>';
    $('menuText').textContent='Entre em campo, controle seu jogador, faça passes e marque gols. Você contra o time rival.';
    $('difficultyRow').style.display='flex';
    startBtn.textContent='INICIAR PARTIDA';
  }
}
function createScene(){
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x9ccfe4);
  scene.fog = new THREE.Fog(0x9ccfe4,55,110);
  camera = new THREE.PerspectiveCamera(43,1,0.1,150);
  camera.position.set(0,27,31);
  camera.lookAt(0,0,0);
  renderer = new THREE.WebGLRenderer({canvas:canvas,antialias:true,alpha:false,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  scene.add(new THREE.HemisphereLight(0xe9f8ff,0x315b3c,2.0));
  const sun = new THREE.DirectionalLight(0xfff4df,2.3);
  sun.position.set(-12,25,14);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024,1024);
  sun.shadow.camera.left=-30;sun.shadow.camera.right=30;sun.shadow.camera.top=28;sun.shadow.camera.bottom=-28;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0x7ec9ff,0.65);
  fill.position.set(14,12,-18);
  scene.add(fill);
  buildStadium();
  buildBall();
  resize();
}
function addBox(w,h,d,x,y,z,material,cast=false){
  const mesh = new THREE.Mesh(new THREE.BoxGeometry(w,h,d),material);
  mesh.position.set(x,y,z);
  mesh.castShadow=cast;
  mesh.receiveShadow=true;
  scene.add(mesh);
  return mesh;
}
function buildStadium(){
  const dirt = new THREE.MeshStandardMaterial({color:0x344756,roughness:1});
  const concrete = new THREE.MeshStandardMaterial({color:0x526b7a,roughness:0.95});
  const dark = new THREE.MeshStandardMaterial({color:0x183044,roughness:0.9});
  addBox(58,0.8,42,0,-1.1,0,dirt);
  addBox(52,0.8,4,0,1.2,-16.2,concrete);
  addBox(52,0.8,4,0,1.2,16.2,concrete);
  for(let side of [-1,1]){
    for(let row=0;row<5;row++){
      addBox(50,0.42,0.8,0,2.0+row*0.62,side*(17.3+row*0.72),dark);
      const rail = addBox(50,0.07,0.08,0,2.2+row*0.62,side*(17.8+row*0.72),concrete);
      rail.castShadow=false;
    }
  }
  const roofMat = new THREE.MeshStandardMaterial({color:0x28465b,metalness:0.35,roughness:0.7});
  for(let side of [-1,1]){
    const roof=addBox(52,0.5,5,0,6.1,side*21.0,roofMat);
    roof.rotation.x=side*0.035;
  }
  const grass = new THREE.Mesh(new THREE.PlaneGeometry(44,28),new THREE.MeshStandardMaterial({color:0x167d48,roughness:1}));
  grass.rotation.x=-Math.PI/2;grass.position.y=-0.02;grass.receiveShadow=true;scene.add(grass);
  const stripeMat1 = new THREE.MeshStandardMaterial({color:0x16834b,roughness:1});
  const stripeMat2 = new THREE.MeshStandardMaterial({color:0x1b8a50,roughness:1});
  for(let i=0;i<8;i++){
    const stripe = new THREE.Mesh(new THREE.PlaneGeometry(5.5,28),i%2?stripeMat1:stripeMat2);
    stripe.rotation.x=-Math.PI/2;
    stripe.position.set(-19.25+i*5.5,0.006,0);
    scene.add(stripe);
  }
  const white = new THREE.LineBasicMaterial({color:0xf3fff4,transparent:true,opacity:0.95});
  function line(points,material=white){
    const geo = new THREE.BufferGeometry().setFromPoints(points.map(p=>new THREE.Vector3(p[0],0.035,p[1])));
    const l = new THREE.Line(geo,material);scene.add(l);return l;
  }
  function rect(x1,x2,z1,z2){
    line([[x1,z1],[x2,z1],[x2,z2],[x1,z2],[x1,z1]]);
  }
  line([[-22,-14],[22,-14],[22,14],[-22,14],[-22,-14]]);
  line([[0,-14],[0,14]]);
  const circlePts=[];
  for(let i=0;i<=64;i++){const a=i/64*Math.PI*2;circlePts.push([Math.cos(a)*4.6,Math.sin(a)*4.6]);}
  line(circlePts);
  rect(-22,-15.5,-7,7);rect(15.5,22,-7,7);
  rect(-22,-19,-3.5,3.5);rect(19,22,-3.5,3.5);
  const dotMat=new THREE.MeshBasicMaterial({color:0xffffff});
  const dot=new THREE.Mesh(new THREE.CircleGeometry(0.13,16),dotMat);
  dot.rotation.x=-Math.PI/2;dot.position.set(0,0.04,0);scene.add(dot);
  for(let sign of [-1,1]){
    const postMat=new THREE.MeshStandardMaterial({color:0xffffff,metalness:0.25,roughness:0.38});
    const x=sign*22.15;
    for(let z of [-3.2,3.2]){
      const post=new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.12,2.35,12),postMat);
      post.position.set(x,1.18,z);post.castShadow=true;scene.add(post);
    }
    const bar=new THREE.Mesh(new THREE.CylinderGeometry(0.12,0.12,6.5,12),postMat);
    bar.rotation.x=Math.PI/2;bar.position.set(x,2.35,0);bar.castShadow=true;scene.add(bar);
    const netMat=new THREE.LineBasicMaterial({color:0xe7f5f6,transparent:true,opacity:0.35});
    const backX=sign*24.0;
    for(let z=-3.2;z<=3.21;z+=0.8){
      line([[x, z],[backX,z]],netMat);
    }
    for(let y=0.3;y<=2.4;y+=0.5){
      const pts=[[x,-3.2],[backX,-3.2],[backX,3.2],[x,3.2],[x,-3.2]];
      const geo=new THREE.BufferGeometry().setFromPoints(pts.map(p=>new THREE.Vector3(p[0],y,p[1])));
      scene.add(new THREE.Line(geo,netMat));
    }
  }
  const boardMat=new THREE.MeshStandardMaterial({color:0x0b2636,emissive:0x052b45,emissiveIntensity:0.8});
  addBox(18,0.7,0.25,0,0.75,-14.35,boardMat);
  addBox(18,0.7,0.25,0,0.75,14.35,boardMat);
  addCrowd();
}
function addCrowd(){
  const bodyGeo=new THREE.BoxGeometry(0.36,0.62,0.34);
  const headGeo=new THREE.SphereGeometry(0.14,7,6);
  const bodyMat=new THREE.MeshStandardMaterial({color:0xffffff,roughness:0.9});
  const headMat=new THREE.MeshStandardMaterial({color:0xe2b995,roughness:0.9});
  const bodies=new THREE.InstancedMesh(bodyGeo,bodyMat,560);
  const heads=new THREE.InstancedMesh(headGeo,headMat,560);
  const dummy=new THREE.Object3D();
  const palette=[0x3ca4db,0xe4e9ee,0xe5b84f,0xdf6863,0x67bd8a,0x8f86db,0x233d58];
  let index=0;
  for(let side of [-1,1]){
    for(let row=0;row<5;row++){
      for(let i=0;i<56;i++){
        const x=-23.5+i*0.85+(Math.random()-.5)*0.22;
        const z=side*(17.5+row*0.72);
        const y=2.45+row*0.62;
        dummy.position.set(x,y,z);dummy.rotation.y=(Math.random()-.5)*0.2;dummy.scale.set(1,0.8+Math.random()*0.45,1);dummy.updateMatrix();
        bodies.setMatrixAt(index,dummy.matrix);
        bodies.setColorAt(index,new THREE.Color(palette[Math.floor(Math.random()*palette.length)]));
        dummy.position.set(x,y+0.42,z);dummy.scale.set(1,1,1);dummy.updateMatrix();
        heads.setMatrixAt(index,dummy.matrix);
        index++;
      }
    }
  }
  bodies.count=index;heads.count=index;scene.add(bodies,heads);
}
function buildBall(){
  const group=new THREE.Group();
  const sphere=new THREE.Mesh(new THREE.SphereGeometry(0.43,20,16),new THREE.MeshStandardMaterial({color:0xf6f8f8,roughness:0.42}));
  sphere.castShadow=true;sphere.receiveShadow=true;group.add(sphere);
  const patchMat=new THREE.MeshStandardMaterial({color:0x142333,roughness:0.7});
  const dirs=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]];
  dirs.forEach(d=>{
    const patch=new THREE.Mesh(new THREE.DodecahedronGeometry(0.13,0),patchMat);
    patch.position.set(d[0]*0.39,d[1]*0.39,d[2]*0.39);
    patch.scale.set(1,0.32,1);patch.lookAt(d[0]*2,d[1]*2,d[2]*2);group.add(patch);
  });
  scene.add(group);
  ball={mesh:group,pos:new THREE.Vector3(0,0.43,0),velocity:new THREE.Vector3(),owner:null,pickupLock:0,lastKicker:null};
  group.position.copy(ball.pos);
}
function makeProceduralPlayer(p){
  const group=new THREE.Group();
  const jersey=p.team==='home'?0x178fe0:0xdc394b;
  const shirt=new THREE.MeshStandardMaterial({color:jersey,roughness:0.78});
  const shorts=new THREE.MeshStandardMaterial({color:0x142435,roughness:0.9});
  const skin=new THREE.MeshStandardMaterial({color:0xc98e65,roughness:0.9});
  const sock=new THREE.MeshStandardMaterial({color:0xf0f4f4,roughness:0.8});
  const torso=new THREE.Mesh(new THREE.CylinderGeometry(0.28,0.34,0.78,9),shirt);torso.position.y=1.15;torso.castShadow=true;group.add(torso);
  const shortsMesh=new THREE.Mesh(new THREE.CylinderGeometry(0.27,0.3,0.33,9),shorts);shortsMesh.position.y=0.63;group.add(shortsMesh);
  const head=new THREE.Mesh(new THREE.SphereGeometry(0.22,12,10),skin);head.position.y=1.78;head.castShadow=true;group.add(head);
  const limbGeo=new THREE.CapsuleGeometry(0.085,0.42,3,7);
  const legs=[];
  for(let s of [-1,1]){
    const leg=new THREE.Mesh(limbGeo,sock);leg.position.set(s*0.15,0.29,0);leg.castShadow=true;group.add(leg);legs.push(leg);
    const arm=new THREE.Mesh(new THREE.CapsuleGeometry(0.075,0.38,3,7),skin);arm.position.set(s*0.36,1.12,0);arm.rotation.z=s*0.18;group.add(arm);
  }
  const badge=new THREE.Mesh(new THREE.BoxGeometry(0.08,0.1,0.02),new THREE.MeshStandardMaterial({color:0xf3f7fb}));
  badge.position.set(0,1.2,0.31);group.add(badge);
  p.group.add(group);p.fallbackLegs=legs;
}
function addModel(p){
  if(!playerAsset){makeProceduralPlayer(p);return;}
  const model=SkeletonUtils.clone(playerAsset.scene);
  model.traverse(obj=>{
    if(obj.isMesh){
      obj.castShadow=true;obj.receiveShadow=true;
      const color=p.isKeeper?(p.team==='home'?0xf3cb36:0x272f3b):(p.team==='home'?0x168de1:0xd8324b);
      const edit=mat=>{
        const m=mat.clone();
        if((m.name||'').toLowerCase().includes('shirt'))m.color.setHex(color);
        if((m.name||'').toLowerCase().includes('pants'))m.color.setHex(0x17263a);
        if((m.name||'').toLowerCase().includes('socks'))m.color.setHex(p.team==='home'?0xe8f5ff:0xffe8e8);
        return m;
      };
      obj.material=Array.isArray(obj.material)?obj.material.map(edit):edit(obj.material);
    }
  });
  const height=modelBounds.max.y-modelBounds.min.y;
  const scale=1.68/Math.max(height,0.1);
  model.scale.setScalar(scale);
  model.position.y=-modelBounds.min.y*scale;
  p.group.add(model);
  p.visual=model;
  p.mixer=new THREE.AnimationMixer(model);
  const idle=playerAsset.animations.find(a=>a.name.toLowerCase().includes('man_idle'))||playerAsset.animations[0];
  const run=playerAsset.animations.find(a=>a.name.toLowerCase().includes('man_run'))||idle;
  p.actions={idle:p.mixer.clipAction(idle),run:p.mixer.clipAction(run)};
  p.actions.idle.play();p.activeAction=p.actions.idle;
}
function makePlayer(team,index,isKeeper,x,z,isUser){
  const group=new THREE.Group();
  scene.add(group);
  const p={team,index,isKeeper,pos:new THREE.Vector3(x,0,z),home:new THREE.Vector3(x,0,z),group,velocity:new THREE.Vector3(),isUser:!!isUser,mixer:null,actions:null,activeAction:null,visual:null,fallbackLegs:null,animClock:Math.random()*3};
  group.rotation.y=team==='home'?Math.PI/2:-Math.PI/2;
  addModel(p);
  players.push(p);
  if(isUser)controlled=p;
  return p;
}
function buildTeams(){
  players.forEach(p=>scene.remove(p.group));
  players.length=0;
  makePlayer('home',1,true,-20.2,0,false);
  makePlayer('home',4,false,-13,-6,false);
  makePlayer('home',7,false,-13,6,false);
  makePlayer('home',10,false,-6,0,true);
  makePlayer('away',1,true,20.2,0,false);
  makePlayer('away',3,false,13,-6,false);
  makePlayer('away',5,false,13,6,false);
  makePlayer('away',9,false,6,0,false);
  resetPositions();
}
function nearestChaser(team){
  let best=null,bestD=Infinity;
  players.forEach(p=>{
    if(p.team!==team||p.isKeeper||p.isUser)return;
    const d=Math.hypot(p.pos.x-ball.pos.x,p.pos.z-ball.pos.z);
    if(d<bestD){bestD=d;best=p;}
  });
  return best;
}
function setAnim(p,name){
  if(!p.actions||!p.actions[name]||p.activeAction===p.actions[name])return;
  const next=p.actions[name];
  if(p.activeAction)p.activeAction.fadeOut(0.16);
  next.reset().fadeIn(0.16).play();
  p.activeAction=next;
}
function moveTo(p,tx,tz,dt,speed){
  const dx=tx-p.pos.x,dz=tz-p.pos.z;
  const dist=Math.hypot(dx,dz);
  let moving=false;
  if(dist>0.12){
    const step=Math.min(dist,speed*dt);
    p.pos.x+=dx/dist*step;p.pos.z+=dz/dist*step;
    p.group.rotation.y=Math.atan2(dx,dz);
    moving=true;
  }
  p.pos.x=clamp(p.pos.x,-20.6,20.6);
  p.pos.z=clamp(p.pos.z,-12.5,12.5);
  p.group.position.set(p.pos.x,0,p.pos.z);
  if(p.mixer)setAnim(p,moving?'run':'idle');
  if(p.fallbackLegs){
    p.animClock+=dt*(moving?10:2);
    p.fallbackLegs.forEach((leg,i)=>{leg.rotation.x=moving?Math.sin(p.animClock+i*Math.PI)*0.55:0;});
  }
  p.velocity.set(dx/dist||0,0,dz/dist||0);
}
function resetPositions(){
  players.forEach(p=>{
    p.pos.copy(p.home);p.group.position.set(p.pos.x,0,p.pos.z);
    p.group.rotation.y=p.team==='home'?Math.PI/2:-Math.PI/2;
    p.velocity.set(0,0,0);
    if(p.mixer)setAnim(p,'idle');
  });
  ball.owner=null;ball.pos.set(0,0.43,0);ball.velocity.set(0,0,0);ball.pickupLock=0;ball.lastKicker=null;ball.mesh.position.copy(ball.pos);
  ownerTime=0;goalPause=false;
}
function updatePlayers(dt){
  const homeChaser=nearestChaser('home'),awayChaser=nearestChaser('away');
  let ix=0,iz=0;
  if(keys.KeyA||keys.ArrowLeft)ix-=1;
  if(keys.KeyD||keys.ArrowRight)ix+=1;
  if(keys.KeyW||keys.ArrowUp)iz-=1;
  if(keys.KeyS||keys.ArrowDown)iz+=1;
  ix+=joy.x;iz+=joy.z;
  const mag=Math.hypot(ix,iz);if(mag>1){ix/=mag;iz/=mag;}
  const sprint=sprintHeld||keys.ShiftLeft||keys.ShiftRight;
  players.forEach(p=>{
    if(p.isUser){
      const speed=(sprint?7.7:5.8);
      const targetX=p.pos.x+ix*speed*dt;
      const targetZ=p.pos.z+iz*speed*dt;
      moveTo(p,targetX,targetZ,dt,Math.max(0.01,speed));
      if(Math.hypot(ix,iz)<0.08)setAnim(p,'idle');
      return;
    }
    if(p.isKeeper){
      const gx=p.team==='home'?-20:20;
      const tz=clamp(ball.pos.z*0.72,-3.3,3.3);
      moveTo(p,gx,tz,dt,4.2*aiSpeed);
      return;
    }
    if(ball.owner===p){
      const goalX=p.team==='home'?17:-17;
      const goalZ=clamp(ball.pos.z*0.3,-5.2,5.2);
      moveTo(p,goalX,goalZ,dt,4.8*aiSpeed);
      return;
    }
    const chasing=p.team==='home'?homeChaser:awayChaser;
    let tx=p.home.x,tz=p.home.z;
    if(!ball.owner||ball.owner.team!==p.team){
      if(p===chasing){tx=ball.pos.x+(p.team==='home'?-0.6:0.6);tz=ball.pos.z;}
      else{tx=p.home.x+(p.team==='home'?1:-1)*clamp(ball.pos.x*0.16,-2.8,2.8);tz=p.home.z+ball.pos.z*0.15;}
    }else{
      tx=p.home.x+(p.team==='home'?3.3:-3.3);
      tz=p.home.z*0.75+ball.pos.z*0.23;
    }
    moveTo(p,tx,tz,dt,4.5*aiSpeed);
  });
  if(ball.owner){
    ownerTime+=dt;
    const p=ball.owner;
    const forward=p.team==='home'?1:-1;
    const dirZ=clamp((p.velocity.z||0)*0.32,-0.45,0.45);
    ball.pos.set(p.pos.x+forward*0.92,0.43,p.pos.z+dirZ);
    ball.mesh.position.copy(ball.pos);
    if(p!==controlled&&ownerTime>1.1){
      const target=new THREE.Vector3(p.team==='home'?22:-22,0,clamp((Math.random()-.5)*3+ball.pos.z*0.15,-2.7,2.7));
      const dir=target.sub(ball.pos).normalize();
      ball.velocity.set(dir.x*12,0,dir.z*12);
      ball.owner=null;ball.pickupLock=0.28;ball.lastKicker=p;ownerTime=0;
    }
  }else{
    ball.pickupLock=Math.max(0,ball.pickupLock-dt);
    if(ball.pickupLock<=0){
      let nearest=null,nearD=1.25;
      players.forEach(p=>{
        if(ball.lastKicker===p&&nearD>0.8)return;
        const d=Math.hypot(p.pos.x-ball.pos.x,p.pos.z-ball.pos.z);
        if(d<nearD){nearest=p;nearD=d;}
      });
      if(nearest){ball.owner=nearest;ownerTime=0;ball.velocity.multiplyScalar(0.12);}
    }
  }
}
function updateBall(dt){
  if(!ball.owner){
    ball.pos.addScaledVector(ball.velocity,dt);
    ball.velocity.multiplyScalar(Math.pow(0.986,dt*60));
    ball.pos.y=0.43;
    if(Math.abs(ball.pos.z)>13.2){ball.pos.z=Math.sign(ball.pos.z)*13.2;ball.velocity.z*=-0.65;}
    if(ball.pos.x>22.5){
      if(Math.abs(ball.pos.z)<3.0){goal('home');return;}
      ball.pos.x=22.5;ball.velocity.x*=-0.68;
    }
    if(ball.pos.x< -22.5){
      if(Math.abs(ball.pos.z)<3.0){goal('away');return;}
      ball.pos.x=-22.5;ball.velocity.x*=-0.68;
    }
    ball.mesh.position.copy(ball.pos);
    ball.mesh.rotation.z+=ball.velocity.x*dt*0.7;
    ball.mesh.rotation.x+=ball.velocity.z*dt*0.7;
    if(ball.velocity.length()<0.06)ball.velocity.set(0,0,0);
  }
}
function kick(power,passing){
  if(!matchRunning||paused||goalPause)return;
  const p=controlled;
  const d=Math.hypot(ball.pos.x-p.pos.x,ball.pos.z-p.pos.z);
  if(ball.owner!==p&&d>2.35){say('Chegue mais perto da bola para chutar.');return;}
  let dx=1,dz=clamp(joy.z*0.65,-0.55,0.55);
  if(passing){
    const mate=players.filter(x=>x.team==='home'&&!x.isUser&&!x.isKeeper).sort((a,b)=>Math.hypot(a.pos.x-p.pos.x,a.pos.z-p.pos.z)-Math.hypot(b.pos.x-p.pos.x,b.pos.z-p.pos.z))[0];
    if(mate){dx=mate.pos.x-ball.pos.x;dz=mate.pos.z-ball.pos.z;}
  }else{
    const targetZ=clamp(ball.pos.z+joy.z*4.8,-2.4,2.4);
    dx=22.5-ball.pos.x;dz=targetZ-ball.pos.z;
  }
  const len=Math.hypot(dx,dz)||1;dx/=len;dz/=len;
  ball.owner=null;ball.lastKicker=p;ball.pickupLock=passing?0.22:0.35;ownerTime=0;
  const speed=passing?10.8:12.5+power*10.5;
  ball.pos.set(p.pos.x+dx*0.9,0.43,p.pos.z+dz*0.9);
  ball.velocity.set(dx*speed,0,dz*speed);
  say(passing?'Passe enviado!':'Chute!');
}
function goal(team){
  if(goalPause)return;
  goalPause=true;
  if(team==='home')score.home++;else score.away++;
  updateScoreboard();
  $('goalFlash').style.opacity='1';
  $('goalFlash').querySelector('strong').textContent=team==='home'?'GOOOOL!':'GOL DO RIVAL!';
  setTimeout(()=>{$('goalFlash').style.opacity='0';},1100);
  setTimeout(()=>{
    if(matchRunning&&!paused)resetPositions();
    else goalPause=false;
  },1450);
}
function finishMatch(){
  matchRunning=false;paused=false;saveRecord();setMenu('end');
  updateScoreboard();menu.classList.remove('hidden');
}
function startMatch(){
  if(!playerAssetReady)return;
  if(matchRunning&&paused){paused=false;menu.classList.add('hidden');return;}
  score.home=0;score.away=0;clockLeft=120;matchRunning=true;paused=false;goalPause=false;
  resetPositions();updateScoreboard();menu.classList.add('hidden');say('A partida começou. Boa sorte!');
}
function startShot(){
  if(!matchRunning||paused||shotHeld)return;
  shotHeld=true;shotStart=performance.now();$('shootBtn').classList.add('pressed');
}
function releaseShot(){
  if(!shotHeld)return;
  shotHeld=false;$('shootBtn').classList.remove('pressed');
  const power=clamp((performance.now()-shotStart)/1050,0,1);
  $('chargeFill').style.width='0%';
  kick(power,false);
}
function passBall(){if(matchRunning&&!paused)kick(0,true);}
function resize(){
  if(!renderer||!stage)return;
  const w=Math.max(1,stage.clientWidth),h=Math.max(1,stage.clientHeight);
  renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();
}
const stickBase=$('stickBase'),stickKnob=$('stickKnob');
function updateStick(e){
  const r=stickBase.getBoundingClientRect(),cx=r.left+r.width/2,cy=r.top+r.height/2;
  const radius=Math.min(r.width,r.height)*0.34;
  let x=(e.clientX-cx)/radius,z=(e.clientY-cy)/radius;
  const m=Math.hypot(x,z);if(m>1){x/=m;z/=m;}
  joy.x=x;joy.z=z;
  stickKnob.style.transform='translate('+Math.round(x*radius*0.72)+'px,'+Math.round(z*radius*0.72)+'px)';
}
stickBase.addEventListener('pointerdown',e=>{joy.active=true;stickBase.setPointerCapture(e.pointerId);updateStick(e);});
stickBase.addEventListener('pointermove',e=>{if(joy.active)updateStick(e);});
function resetJoy(){joy.active=false;joy.x=0;joy.z=0;stickKnob.style.transform='translate(0,0)';}
stickBase.addEventListener('pointerup',resetJoy);stickBase.addEventListener('pointercancel',resetJoy);
$('shootBtn').addEventListener('pointerdown',e=>{e.preventDefault();startShot();});
window.addEventListener('pointerup',releaseShot);
$('passBtn').addEventListener('click',passBall);
$('sprintBtn').addEventListener('pointerdown',e=>{e.preventDefault();sprintHeld=true;$('sprintBtn').classList.add('pressed');});
window.addEventListener('pointerup',()=>{sprintHeld=false;$('sprintBtn').classList.remove('pressed');});
document.addEventListener('keydown',e=>{
  if(e.target&&['INPUT','TEXTAREA'].includes(e.target.tagName))return;
  if(['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','Space'].includes(e.code))e.preventDefault();
  if(e.code==='Space'&&!e.repeat)startShot();
  if(e.code==='KeyE'&&!e.repeat)passBall();
  keys[e.code]=true;
});
document.addEventListener('keyup',e=>{
  keys[e.code]=false;
  if(e.code==='Space')releaseShot();
});
document.querySelectorAll('[data-diff]').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('[data-diff]').forEach(x=>x.classList.toggle('active',x===btn));
  difficulty=btn.dataset.diff;
  aiSpeed=difficulty==='easy'?0.78:difficulty==='hard'?1.2:1;
}));
startBtn.addEventListener('click',()=>{
  if(paused&&matchRunning){startMatch();return;}
  startMatch();
});
$('pauseBtn').addEventListener('click',()=>{
  if(!matchRunning)return;
  paused=!paused;
  if(paused){setMenu('pause');}
  else{menu.classList.add('hidden');}
});
$('fullscreenBtn').addEventListener('click',()=>{
  if(!document.fullscreenElement){document.documentElement.requestFullscreen?.().catch(()=>{});}
  else{document.exitFullscreen?.();}
});
window.addEventListener('resize',resize);

let playerAssetReady=false;
async function loadPlayer(){
  const loader=new GLTFLoader();
  try{
    const gltf=await loader.loadAsync('/assets/player.glb');
    gltf.scene.updateMatrixWorld(true);
    modelBounds=new THREE.Box3().setFromObject(gltf.scene);
    playerAsset=gltf;
    $('loadingText').textContent='Modelo 3D carregado';
    buildTeams();
    playerAssetReady=true;
  }catch(err){
    $('loadingText').textContent='Usando jogadores 3D alternativos';
    buildTeams();
    playerAssetReady=true;
  }
  loading.classList.add('hidden');
  startBtn.disabled=false;
  startBtn.textContent='INICIAR PARTIDA';
  updateScoreboard();
}
function animate(now){
  requestAnimationFrame(animate);
  const dt=Math.min(0.04,(now-lastFrame)/1000||0.016);lastFrame=now;
  if(matchRunning&&!paused){
    if(!goalPause){
      clockLeft=Math.max(0,clockLeft-dt);
      updatePlayers(dt);updateBall(dt);
      if(clockLeft<=0)finishMatch();
    }
    if(shotHeld){const v=clamp((performance.now()-shotStart)/1050,0,1);$('chargeFill').style.width=Math.round(v*100)+'%';}
  }
  players.forEach(p=>{if(p.mixer)p.mixer.update(dt);});
  if(renderer&&scene&&camera)renderer.render(scene,camera);
}
try{
  createScene();
  loadPlayer();
  requestAnimationFrame(animate);
}catch(err){
  loading.classList.remove('hidden');
  $('loadingText').textContent='Não foi possível iniciar o 3D neste navegador. Tente abrir no Chrome atualizado.';
  startBtn.disabled=true;
}
</script>
</body>
</html>`;
const JSON_HEADERS = {"content-type":"application/json; charset=utf-8","cache-control":"no-store","x-content-type-options":"nosniff"};
const PLAYER_SOURCE = "https://raw.githubusercontent.com/zezeanima7-create/KING-IA/main/assets/player.glb";
function json(data,status=200){return new Response(JSON.stringify(data),{status,headers:JSON_HEADERS});}
export default {
  async fetch(request,env,ctx){
    const url=new URL(request.url);
    if(request.method==="GET"&&url.pathname==="/api/health"){
      return json({app:"KING FOOTBALL ARENA",status:"online",version:"1.0.0",mode:"3D football"});
    }
    if(request.method==="GET"&&url.pathname==="/assets/player.glb"){
      try{
        const asset=await fetch(PLAYER_SOURCE);
        if(!asset.ok)return new Response("Modelo 3D indisponível",{status:502});
        return new Response(asset.body,{headers:{
          "content-type":"model/gltf-binary",
          "cache-control":"public, max-age=86400",
          "x-content-type-options":"nosniff"
        }});
      }catch(e){return new Response("Falha ao carregar modelo 3D",{status:503});}
    }
    if(request.method==="GET"&&(url.pathname==="/"||url.pathname==="/index.html")){
      return new Response(PAGE,{headers:{
        "content-type":"text/html; charset=utf-8",
        "cache-control":"no-store",
        "x-content-type-options":"nosniff",
        "referrer-policy":"strict-origin-when-cross-origin",
        "content-security-policy":"default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; connect-src 'self' https://cdn.jsdelivr.net; object-src 'none'; base-uri 'self'; frame-ancestors 'none'"
      }});
    }
    return json({error:"Rota não encontrada",app:"KING FOOTBALL ARENA"},404);
  }
};
