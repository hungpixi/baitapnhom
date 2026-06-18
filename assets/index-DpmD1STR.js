// Global Error Diagnostic Box
window.onerror = function(message, source, lineno, colno, error) {
  let errDiv = document.getElementById('debug-err-box');
  if (!errDiv) {
    errDiv = document.createElement('div');
    errDiv.id = 'debug-err-box';
    errDiv.style.position = 'fixed';
    errDiv.style.bottom = '10px';
    errDiv.style.left = '10px';
    errDiv.style.background = 'rgba(255,0,0,0.95)';
    errDiv.style.color = 'white';
    errDiv.style.padding = '15px';
    errDiv.style.zIndex = '99999';
    errDiv.style.fontFamily = 'monospace';
    errDiv.style.fontSize = '12px';
    errDiv.style.maxWidth = '90%';
    errDiv.style.wordBreak = 'break-all';
    errDiv.style.border = '2px solid white';
    errDiv.style.borderRadius = '5px';
    document.body.appendChild(errDiv);
  }
  errDiv.innerHTML = '<b>JS RUNTIME ERROR:</b><br>' + message + '<br>File: ' + source + '<br>Line: ' + lineno + ' Col: ' + colno + '<br>' + (error ? error.stack.replace(/\n/g, '<br>') : '');
  return false;
};

// Polyfill for modulepreload
(function(){
  let e=document.createElement(`link`).relList;
  if(e&&e.supports&&e.supports(`modulepreload`)) return;
  for(let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver(e=>{
    for(let t of e)
      if(t.type===`childList`)
        for(let e of t.addedNodes)
          e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)
  }).observe(document,{childList:!0,subtree:!0});
  function t(e){
    let t={};
    return e.integrity&&(t.integrity=e.integrity),
           e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),
           e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,
           t
  }
  function n(e){
    if(e.ep) return;
    e.ep=!0;
    let n=t(e);
    fetch(e.href,n)
  }
})();

// Data of 13 members with cyberpunk roles
var members = [
  {id:1,name:`Đào Chung Anh`,year:1999,current:`Tài xế công nghệ Xanh SM bike`,goal:`Học để nâng cao cơ hội nghề nghiệp trong lĩnh vực công nghệ`,dream:`Làm freelancer trong ngành công nghệ`,bio:`Quyết tâm chuyển ngành, nâng cao cơ hội nghề nghiệp.`,video:`assets/videos/1_chunganh.mp4`,role:`NODE_01 // GREEN_RIDER`},
  {id:2,name:`Lê Tấn Anh`,year:1999,current:`Tài xế công nghệ Grab bike`,goal:`Nắm vững kiến thức nền tảng về CNTT và lập trình`,dream:`Sẽ làm việc một công ty về ngành IT trong tương lai`,bio:`Chạy xe công nghệ để nuôi dưỡng ước mơ lập trình.`,video:`assets/videos/2_tananh.mp4`,role:`NODE_02 // GRAB_INTERCEPTOR`},
  {id:3,name:`Đặng Lâm Hải Đăng`,year:1992,current:`Lao động tự do`,goal:`Ứng dụng CNTT vào công việc và thực tế`,dream:`Làm việc từ xa trong lĩnh vực IT`,bio:`Tự học, tự lập, ứng dụng CNTT linh hoạt vào cuộc sống.`,video:`assets/videos/3_haidang.mp4`,role:`NODE_03 // WILD_OPERATOR`},
  {id:4,name:`Lê Kiều Diễm`,year:2005,current:`Sinh viên`,goal:`Có thêm kiến thức về CNTT`,dream:`Phát triển bản thân`,bio:`Nỗ lực học hỏi mỗi ngày để hoàn thiện bản thân.`,video:`assets/videos/4_kieudiem.mov`,role:`NODE_04 // APPRENTICE_DECRYPTOR`},
  {id:5,name:`Vũ Công Đức`,year:1997,current:`Software Developer`,goal:`Phục vụ cho công việc và nâng cao kiến thức`,dream:`Develop software`,bio:`Software Developer thực chiến - Liên tục nâng cấp trình độ.`,video:`assets/videos/5_congduc.mov`,role:`NODE_05 // CODE_SYNTHESIZER`},
  {id:6,name:`Lê Huỳnh Giảng`,year:1999,current:`Lao động tự do`,goal:`Phát triển bản thân, nâng cao cơ hội nghề nghiệp`,dream:`Có công việc ổn định trong ngành CNTT`,bio:`Kiên trì tìm kiếm và nắm bắt cơ hội trong ngành CNTT.`,video:`assets/videos/6_huynhgiang.mp4`,role:`NODE_06 // NET_SCOUT`},
  {id:7,name:`Huỳnh Phạm Hân`,year:1997,current:`Nhân viên MKT, freelancer wordpress`,goal:`Học để xây dựng nền tảng cho việc lập trình sau này`,dream:`Làm freelancer trong ngành công nghệ`,bio:`Kết hợp Marketing và Lập trình để tạo lợi thế khác biệt.`,video:`assets/videos/7_phamhan.mov`,role:`NODE_07 // WP_INTRUDER`},
  {id:8,name:`Phạm Phú Nguyễn Hưng`,year:2002,current:`Freelancer, Trader, MMO, Phụ hồ er`,goal:`Học lập trình để bổ trợ công việc và startup`,dream:`Startup triệu đô, tự do tài chén tuổi 25`,bio:`Phụ hồ er chuyển nghề coder - Hướng tới tự do tài chính tuổi 25.`,video:`assets/videos/8_nguyenhung.mp4`,role:`NODE_08 // SYN_FOUNDER`},
  {id:9,name:`Vũ Duy Khánh`,year:1990,current:`IT Support, Tài xế công nghệ Shopee`,goal:`Nắm vững kiến thức nền tảng về CNTT và lập trình`,dream:`Làm Giáo viên`,bio:`Từ IT Support & Driver đến ước mơ đứng trên bục giảng.`,video:`assets/videos/9_duykhanh.mp4`,role:`NODE_09 // SYS_GUARDIAN`},
  {id:10,name:`Đặng Đức Tín`,year:2001,current:`Sinh viên CNTT`,goal:`Nắm vững kiến thức nền tảng về CNTT và lập trình`,dream:`Làm việc trong môi trường công nghệ chuyên nghiệp`,bio:`Kiến tạo giải pháp công nghệ hiệu quả.`,video:`assets/videos/10_ductin.mp4`,role:`NODE_10 // LOGIC_GATEWAY`},
  {id:11,name:`Đào Thị Huyền Trân`,year:1999,current:`Lĩnh Vực F&B , Phiên Dịch Tiếng Nhật`,goal:`Tìm hiểu sâu về lập trình và phát triển phần mềm`,dream:`Làm việc trong môi trường công nghệ hiện đại`,bio:`Phiên dịch viên tiếng Nhật thử thách bản thân với Lập trình.`,video:`assets/videos/11_huyentran.mp4`,role:`NODE_11 // JP_TRANSLATOR`},
  {id:12,name:`Hồ Văn Trọng`,year:1991,current:`IT & Life Coach`,goal:`Học vì đam mê`,dream:`25 triệu trẻ em Giàu Toàn Diện`,bio:`IT & Life Coach - Đồng hành và thắp sáng đam mê.`,video:`assets/videos/12_vantrong.mp4`,role:`NODE_12 // SOUL_COACH`},
  {id:13,name:`Vũ Anh Tuấn`,year:1993,current:`Thợ code`,goal:`Tăng cơ hội nghề nghiệp và đi XKLĐ`,dream:`XKLĐ`,bio:`Thợ code thực chiến - Đặt mục tiêu làm việc tại nước ngoài.`,video:`assets/videos/13_anhtuan.mp4`,role:`NODE_13 // OFFSHORE_CODER`}
];

// Audio synthesizer controller
var soundController = new class {
  constructor() {
    this.audioCtx = null;
    this.masterGain = null;
  }
  init() {
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.value = 0.3;
      this.masterGain.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === "suspended") {
      this.audioCtx.resume();
    }
  }
  playGlitchBurst() {
    this.init();
    let duration = 0.8;
    let length = this.audioCtx.sampleRate * duration;
    let buffer = this.audioCtx.createBuffer(1, length, this.audioCtx.sampleRate);
    let channelData = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) {
      channelData[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / length, 0.3);
    }
    let source = this.audioCtx.createBufferSource();
    source.buffer = buffer;
    let gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.4, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.audioCtx.currentTime + duration);
    source.connect(gain);
    gain.connect(this.masterGain);
    source.start();
  }
  startAmbient() {
    this.init();
    let osc = this.audioCtx.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(50, this.audioCtx.currentTime);
    let gain = this.audioCtx.createGain();
    gain.gain.value = 0.06;
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    this._ambientOsc = osc;
    this._ambientGain = gain;
  }
  stopAmbient() {
    if (this._ambientOsc) {
      this._ambientGain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 1);
      this._ambientOsc.stop(this.audioCtx.currentTime + 1);
      this._ambientOsc = null;
    }
  }
  playKeystroke() {
    this.init();
    let osc = this.audioCtx.createOscillator();
    let gain = this.audioCtx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(700 + Math.random() * 300, this.audioCtx.currentTime);
    gain.gain.setValueAtTime(0.08, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.04);
  }
  playErrorBeep() {
    this.init();
    let osc = this.audioCtx.createOscillator();
    let gain = this.audioCtx.createGain();
    osc.type = "square";
    osc.frequency.setValueAtTime(400, this.audioCtx.currentTime);
    gain.gain.setValueAtTime(0.15, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.5);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.5);
  }
  playSuccess() {
    this.init();
    let now = this.audioCtx.currentTime;
    let osc = this.audioCtx.createOscillator();
    let gain = this.audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(523, now);
    osc.frequency.setValueAtTime(659, now + 0.12);
    osc.frequency.setValueAtTime(784, now + 0.24);
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    osc.connect(gain);
    gain.connect(this.masterGain);
    osc.start();
    osc.stop(now + 0.5);
  }
};

// State variables
var currentMemberIndex = 0;
var sysLogInterval;
var fallbackTimer = null;
var fallbackStart = null;
var fallbackDuration = 12000; // 12 seconds fallback timer
var globalSpeed = "1.5"; // Default 1.5x speed to save time

// DOM elements
const matrixCanvas = document.getElementById("matrix-canvas");
const fakeSlide = document.getElementById("fake-slide");
const glitchOverlay = document.getElementById("glitch-overlay");
const bsodScreen = document.getElementById("bsod-screen");
const redScreen = document.getElementById("red-screen");
const blackScreen = document.getElementById("black-screen");
const cliScreen = document.getElementById("cli-screen");
const cliContent = document.getElementById("cli-content");
const mainDash = document.getElementById("main-dash");
const memberContainer = document.getElementById("member-container");
const logContent = document.getElementById("log-content");
const hexContent = document.getElementById("hex-content");
const batchIdSpan = document.getElementById("batch-id");
const cycleProgressFill = document.getElementById("cycle-progress");
const playBtn = document.getElementById("play-btn");
const batchDotsContainer = document.getElementById("batch-dots");
const closingScreen = document.getElementById("closing-screen");
const closingNamesContainer = document.getElementById("closing-names");

// Matrix rain animation
function initMatrixRain() {
  let ctx = matrixCanvas.getContext("2d");
  matrixCanvas.width = window.innerWidth;
  matrixCanvas.height = window.innerHeight;
  let columns = matrixCanvas.width / 16;
  let drops = Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    ctx.fillStyle = "#00fafe";
    ctx.font = "16px Space Mono";
    for (let i = 0; i < drops.length; i++) {
      let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~".charAt(Math.floor(Math.random() * 66));
      ctx.fillText(char, i * 16, drops[i] * 16);
      if (drops[i] * 16 > matrixCanvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }
  setInterval(draw, 33);
}

// Typing simulation helper
function typeText(container, text, className, speed = 30) {
  return new Promise(resolve => {
    let chars = [...text];
    let idx = 0;
    let span = document.createElement("span");
    if (className) span.className = className;
    container.appendChild(span);

    let timer = setInterval(() => {
      span.textContent += chars[idx];
      soundController.playKeystroke();
      idx++;
      if (idx >= chars.length) {
        clearInterval(timer);
        container.appendChild(document.createElement("br"));
        resolve();
      }
    }, speed);
  });
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function showScreen(el) {
  el.classList.remove("hidden");
  el.style.visibility = "visible";
}

function hideScreen(el) {
  el.classList.add("hidden");
}

// Simulated progress bar in CLI
function runCliProgress(container, duration = 2000) {
  return new Promise(resolve => {
    let wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="cli-progress"><div class="cli-progress-fill" id="fake-progress"></div></div>`;
    container.appendChild(wrapper);
    container.appendChild(document.createElement("br"));

    let progressFill = document.getElementById("fake-progress");
    let progress = 0;
    let step = 100 / (duration / 50);

    let timer = setInterval(() => {
      progress = Math.min(progress + step * (0.5 + Math.random()), 100);
      progressFill.style.width = progress + "%";
      if (progress >= 100) {
        clearInterval(timer);
        resolve();
      }
    }, 50);
  });
}

// Sequence transition controller (Intro)
async function startIntroSequence() {
  soundController.init();
  soundController.playGlitchBurst();
  hideScreen(fakeSlide);
  showScreen(glitchOverlay);
  await delay(1200);

  hideScreen(glitchOverlay);
  showScreen(bsodScreen);
  soundController.playErrorBeep();
  await delay(3000);

  hideScreen(bsodScreen);
  showScreen(redScreen);
  soundController.playGlitchBurst();
  await delay(3000);

  hideScreen(redScreen);
  showScreen(blackScreen);
  await delay(2000);

  hideScreen(blackScreen);
  showScreen(cliScreen);
  soundController.startAmbient();

  await typeText(cliContent, `> KHỞI ĐỘNG HỆ THỐNG...`, ``, 25);
  await delay(400);
  await typeText(cliContent, `> CẢNH BÁO: MÁY TÍNH CỦA BẠN ĐÃ BỊ XÂM NHẬP.`, `ransom-line`, 35);
  await delay(300);
  await typeText(cliContent, `> Toàn bộ dữ liệu bài tập đã bị mã hóa.`, `ransom-line`, 30);
  await delay(400);
  await typeText(cliContent, `> Để mở khóa, vui lòng nộp:`, ``, 30);
  await typeText(cliContent, `>    - 1 bài tập nhóm (deadline hôm qua)`, ``, 25);
  await typeText(cliContent, `>    - 13 lượt điểm danh đầy đủ`, ``, 25);
  await typeText(cliContent, `>    - 1 ly trà sữa full topping cho giảng viên`, ``, 25);
  await delay(800);
  await typeText(cliContent, `> ...`, ``, 200);
  await delay(600);
  await typeText(cliContent, `> Đùa đấy :) Nhóm 2 xin chào cả lớp!`, `joke-line`, 35);
  await delay(600);
  await typeText(cliContent, `> 13 người, đủ mọi background, chung 1 lớp CNTT.`, ``, 28);
  await delay(200);
  await typeText(cliContent, `> Có đứa đang chạy xe công nghệ, có đứa freelance, có đứa còn đang tìm đường.`, ``, 25);
  await delay(200);
  await typeText(cliContent, `> Nhưng tụi tui ở đây — và tụi tui sẽ cố hết sức.`, `success-line`, 30);
  await delay(800);
  await typeText(cliContent, `> Decrypting target nodes...`, ``, 25);
  await runCliProgress(cliContent, 1200);

  soundController.playSuccess();
  await delay(500);

  hideScreen(cliScreen);
  showScreen(document.getElementById("flag-finale"));
  await delay(3500);

  hideScreen(document.getElementById("flag-finale"));
  soundController.stopAmbient();
  showScreen(mainDash);

  // Setup sidebar titles dynamically
  document.querySelector('.side-terminal.right .terminal-label').textContent = 'DANH SÁCH MỤC TIÊU';

  // Initialize main components
  initQuickJumpBar();
  initTargetNodesList();
  startSideTerminals();
  goToMember(0);
}

// Create the quick navigation bar at the footer
function initQuickJumpBar() {
  batchDotsContainer.innerHTML = "";
  members.forEach((member, index) => {
    let dot = document.createElement("span");
    dot.className = "batch-dot";
    dot.title = member.name;
    dot.textContent = String(index + 1).padStart(2, "0");
    dot.onclick = () => {
      goToMember(index);
    };
    batchDotsContainer.appendChild(dot);
  });
}

function updateQuickJumpBar(activeIdx) {
  let dots = batchDotsContainer.querySelectorAll(".batch-dot");
  dots.forEach((dot, index) => {
    dot.classList.remove("active", "done");
    if (index === activeIdx) {
      dot.classList.add("active");
    } else if (index < activeIdx) {
      dot.classList.add("done");
    }
  });
}

// Initialize Target Nodes List in Right Terminal Sidebar
function initTargetNodesList() {
  hexContent.innerHTML = "";
  hexContent.className = "log-container target-nodes-list";
  
  members.forEach((member, index) => {
    let item = document.createElement("div");
    item.className = "target-node-item";
    item.id = `target-node-${index}`;
    item.innerHTML = `
      <span class="target-node-badge">[NODE_${String(member.id).padStart(2, "0")}]</span>
      <span class="target-node-name">${member.name}</span>
      <span class="target-node-status">STANDBY</span>
    `;
    item.onclick = () => {
      goToMember(index);
    };
    hexContent.appendChild(item);
  });
}

function updateTargetNodesList(activeIdx) {
  members.forEach((member, index) => {
    let item = document.getElementById(`target-node-${index}`);
    if (!item) return;
    
    let statusSpan = item.querySelector(".target-node-status");
    item.classList.remove("active", "decrypted", "standby");
    
    if (index === activeIdx) {
      item.classList.add("active");
      statusSpan.textContent = "DECRYPTING";
    } else if (index < activeIdx) {
      item.classList.add("decrypted");
      statusSpan.textContent = "DECRYPTED";
    } else {
      item.classList.add("standby");
      statusSpan.textContent = "STANDBY";
    }
  });
}

// Side log terminals simulation
function startSideTerminals() {
  let sysLogs = [
    `[HỆ_THỐNG] ĐANG TRUY CẬP...`,
    `[MẠNG] GATEWAY_01: ĐÃ KẾT NỐI`,
    `[BẢO_MẬT] ĐANG VƯỢT TƯỜNG LỬA...`,
    `[DỮ_LIỆU] ĐANG QUÉT THÀNH VIÊN...`,
    `[NHÓM_02] ĐỒNG BỘ HÓA...`,
    `[BỘ_NHỚ] ĐÃ XÓA DẤU VẾT`,
    `[HỆ_THỐNG] TRUY VẤN THÀNH CÔNG`,
    `[MẠNG] BĂNG THÔNG ỔN ĐỊNH`,
    `[BẢO_MẬT] GIẢI MÃ VIDEO CAMERA TRỰC TIẾP...`
  ];
  sysLogInterval = setInterval(() => {
    let log = document.createElement("p");
    log.className = "log-entry system";
    log.textContent = sysLogs[Math.floor(Math.random() * sysLogs.length)];
    logContent.prepend(log);
    if (logContent.children.length > 50) logContent.lastChild.remove();
  }, 1200);
}

// Fallback timer logic
function startFallbackTimer(index) {
  clearFallbackTimer();
  fallbackStart = performance.now();
  
  function tick(now) {
    if (!fallbackStart) return;
    let elapsed = now - fallbackStart;
    let progress = (elapsed / fallbackDuration) * 100;
    
    if (cycleProgressFill) {
      cycleProgressFill.style.width = Math.min(progress, 100) + "%";
    }
    
    if (elapsed >= fallbackDuration) {
      let autoAdvanceChk = document.getElementById("chk-auto-advance");
      if (autoAdvanceChk && autoAdvanceChk.checked) {
        goToMember(index + 1);
      } else {
        clearFallbackTimer();
      }
      return;
    }
    fallbackTimer = requestAnimationFrame(tick);
  }
  fallbackTimer = requestAnimationFrame(tick);
}

// Go to specific member
function goToMember(index) {
  clearFallbackTimer();
  
  // If we reach the end of the roster list, trigger closing screen
  if (index >= members.length) {
    showClosingScreen();
    return;
  }
  if (index < 0) return;

  // Sound and glitch burst on transition
  soundController.playGlitchBurst();
  
  // Apply visual glitch effect to the container temporarily
  memberContainer.classList.add("glitching");
  setTimeout(() => {
    memberContainer.classList.remove("glitching");
  }, 400);

  currentMemberIndex = index;
  batchIdSpan.textContent = `${String(currentMemberIndex + 1).padStart(2, "0")}/${String(members.length).padStart(2, "0")}`;
  
  updateQuickJumpBar(currentMemberIndex);
  updateTargetNodesList(currentMemberIndex);
  renderMemberProfile(currentMemberIndex);
}

// Render member profile (2-column layout)
function renderMemberProfile(index) {
  let member = members[index];
  
  // Custom HUD metadata like video dimensions, quality, and frame counter simulation
  let streamQuality = (Math.random() > 0.4) ? "1080P // H.264" : "720P // AVC1";
  let randomFPS = Math.floor(Math.random() * 5) + 25; // 25 to 30 FPS
  
  memberContainer.innerHTML = `
    <div class="member-profile-container">
      <div class="member-info-col entering">
        <div class="card-header">
          <span class="id-tag">${member.role}</span>
          <span class="status-tag">● ACTIVE FEED</span>
        </div>
        <div class="card-body">
          <h2 class="member-name">${member.name}</h2>
          <span class="member-year">Năm sinh: ${member.year}</span>
          <div class="member-info">
            <div class="info-row"><span class="title">HIỆN TẠI:</span><span class="text">${member.current || "N/A"}</span></div>
            <div class="info-row"><span class="title">MỤC TIÊU:</span><span class="text">${member.goal || "N/A"}</span></div>
            <div class="info-row"><span class="title">ĐỊNH HƯỚNG:</span><span class="text">${member.dream || "N/A"}</span></div>
          </div>
          <p class="member-bio">// ${member.bio}</p>
        </div>
        
        <!-- Interactive Presentation Control Bar -->
        <div class="member-controls">
          <button class="ctrl-btn" id="btn-prev" title="Thành viên trước">◀ PREV</button>
          <button class="ctrl-btn" id="btn-play-pause" title="Phát/Tạm dừng">⏸ PAUSE</button>
          <button class="ctrl-btn" id="btn-next" title="Thành viên tiếp theo">NEXT ▶</button>
          
          <div class="control-group">
            <span class="ctrl-label">SPEED:</span>
            <select id="select-speed" class="ctrl-select">
              <option value="1">1.0x</option>
              <option value="1.25">1.25x</option>
              <option value="1.5">1.5x</option>
            </select>
          </div>

          <div class="control-group check-group">
            <label class="ctrl-label-checkbox">
              <input type="checkbox" id="chk-auto-advance" checked>
              AUTO NEXT
            </label>
          </div>
        </div>
      </div>
      
      <div class="member-video-col entering">
        <div class="video-wrapper">
          <!-- Digital CCTV HUD overlay -->
          <div class="cctv-hud-overlay">
            <div class="hud-top-left"><span class="hud-rec-dot">●</span> REC</div>
            <div class="hud-top-right" id="hud-timecode">00:00:00:00</div>
            <div class="hud-bottom-left">FEED_CAM_${String(member.id).padStart(2, "0")}</div>
            <div class="hud-bottom-right">${streamQuality} // ${randomFPS}fps</div>
            <div class="hud-crosshair">+</div>
            <div class="hud-corners"></div>
          </div>
          
          <video id="member-video" playsinline preload="auto">
            <source src="${member.video}" type="video/mp4">
            <source src="${member.video}" type="video/quicktime">
            Trình duyệt không hỗ trợ xem video.
          </video>
          <div class="video-overlay" id="video-overlay">
            <div class="play-overlay-circle">
              <span class="play-overlay-icon">▶</span>
            </div>
            <span class="play-overlay-text">GIẢI MÃ DỮ LIỆU TRUYỀN HÌNH</span>
          </div>
        </div>
      </div>
    </div>
  `;

  // Set up events and listeners
  setupVideoAndControls(index);
}

// Timecode calculator helper
function updateTimecode(currentTime, playbackRate) {
  let timecodeEl = document.getElementById("hud-timecode");
  if (!timecodeEl) return;
  
  let totalMs = currentTime * 1000;
  let hours = Math.floor(totalMs / 3600000);
  let minutes = Math.floor((totalMs % 3600000) / 60000);
  let seconds = Math.floor((totalMs % 60000) / 1000);
  let frames = Math.floor((totalMs % 1000) / 33); // Simulating 30fps frames
  
  timecodeEl.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`;
}

// Video events & controls mapping
function setupVideoAndControls(index) {
  let video = document.getElementById("member-video");
  let playPauseBtn = document.getElementById("btn-play-pause");
  let prevBtn = document.getElementById("btn-prev");
  let nextBtn = document.getElementById("btn-next");
  let speedSelect = document.getElementById("select-speed");
  let autoAdvanceChk = document.getElementById("chk-auto-advance");
  let videoOverlay = document.getElementById("video-overlay");

  function safePlay(targetVideo, successCallback, failCallback) {
    let playPromise = targetVideo.play();
    if (playPromise !== undefined && typeof playPromise.then === 'function') {
      playPromise.then(() => {
        if (successCallback) successCallback();
      }).catch(err => {
        if (failCallback) failCallback(err);
      });
    } else {
      // Fallback for older browsers
      if (successCallback) successCallback();
    }
  }

  // Keep speed matching the global speed preference
  speedSelect.value = globalSpeed;
  video.playbackRate = parseFloat(globalSpeed);

  // Attempt autoplay
  safePlay(video, () => {
    videoOverlay.style.display = "none";
    playPauseBtn.textContent = "⏸ PAUSE";
  }, (err) => {
    console.log("Browser autoplay blocked (waiting for interaction):", err);
    videoOverlay.style.display = "flex";
    playPauseBtn.textContent = "▶ PLAY";
    
    // In case autoplay is blocked and user does not click, fall back to timer so slides keep running
    startFallbackTimer(index);
  });

  // Video status syncs
  video.onplay = () => {
    clearFallbackTimer();
    videoOverlay.style.display = "none";
    playPauseBtn.textContent = "⏸ PAUSE";
  };

  video.onpause = () => {
    playPauseBtn.textContent = "▶ PLAY";
  };

  video.onended = () => {
    if (autoAdvanceChk.checked) {
      goToMember(index + 1);
    }
  };

  video.onerror = () => {
    console.warn("Video failed to play, running fallback timer.");
    startFallbackTimer(index);
  };

  // Synchronize controls
  playPauseBtn.onclick = () => {
    if (video.paused) {
      safePlay(video, null, () => {
        startFallbackTimer(index);
      });
    } else {
      video.pause();
    }
  };

  videoOverlay.onclick = () => {
    safePlay(video, null, () => {
      startFallbackTimer(index);
    });
  };

  prevBtn.onclick = () => goToMember(index - 1);
  nextBtn.onclick = () => goToMember(index + 1);

  speedSelect.onchange = () => {
    globalSpeed = speedSelect.value;
    video.playbackRate = parseFloat(globalSpeed);
  };

  // Video progress & HUD timecode display
  video.ontimeupdate = () => {
    if (video.duration) {
      let progress = (video.currentTime / video.duration) * 100;
      if (cycleProgressFill) {
        cycleProgressFill.style.width = progress + "%";
      }
      updateTimecode(video.currentTime, video.playbackRate);
    }
  };
}

// Show the final outro screen
function showClosingScreen() {
  clearInterval(sysLogInterval);
  closingNamesContainer.innerHTML = "";
  
  members.forEach(member => {
    let nameTag = document.createElement("span");
    nameTag.className = "closing-name-tag";
    nameTag.textContent = member.name;
    closingNamesContainer.appendChild(nameTag);
  });

  hideScreen(mainDash);
  showScreen(closingScreen);
}

// Init on page load
initMatrixRain();
if (document.querySelector('.side-terminal.right .terminal-label')) {
  document.querySelector('.side-terminal.right .terminal-label').textContent = 'DANH SÁCH MỤC TIÊU';
}
initQuickJumpBar();
initTargetNodesList();
startSideTerminals();
goToMember(0);

// Real-time clock update
setInterval(() => {
  let d = new Date();
  let clock = document.getElementById("live-clock");
  if (clock) {
    clock.textContent = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")} | ${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}:${String(d.getSeconds()).padStart(2, "0")}`;
  }
}, 1000);