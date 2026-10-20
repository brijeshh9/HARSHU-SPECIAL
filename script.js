/* ==========================================================================
   HAPPY BIRTHDAY HARSHUUU 🌸 - MAGICAL 18TH BIRTHDAY CELEBRATION
   ========================================================================== */

// Target Birthday: October 22, 2026 00:00:00 (Local Time)
const BIRTHDAY_DATE = new Date(2026, 9, 22, 0, 0, 0); // Month is 0-indexed: 9 = October

// 18 Sweet & Heart-Melting Reasons Why I Love My Fiancée HarshuuU (18th Milestone!)
const REASONS_LIST = [
  "Your gentle voice that instantly brings peace to my busiest days.",
  "The adorable way your eyes sparkle whenever you smile.",
  "Your pure and caring heart that loves so genuinely.",
  "How you make ordinary moments feel like fairytale memories.",
  "The way you believe in my dreams and support me endlessly.",
  "Your cute little habits that make me smile when I think of you.",
  "How safe and complete my soul feels when I talk to you.",
  "Your laugh—the most beautiful melody in this entire world.",
  "The endless kindness and warmth you show to everyone around you.",
  "How you understand me even when I don't say a single word.",
  "The strength, grace, and maturity you carry yourself with at 18.",
  "That you chose me to be your partner, your best friend, and your fiancé.",
  "How excited you get over little things and sweet surprises.",
  "The comfort of knowing you are my forever home.",
  "Your patience and the way you always listen to my heart.",
  "How proud I feel to tell the entire world: 'She is my fiancée.'",
  "The beautiful, radiant person you are inside and outside.",
  "Simply because you are HarshuuU—my once-in-a-lifetime love, turning 18 today!"
];

// Secret Love Letters for Envelopes
const LOVE_LETTERS = {
  1: {
    title: "Open When You Miss Me 💖",
    date: "A letter for your heart",
    body: `My Dearest HarshuuU,\n\nWhenever distance feels heavy or you miss me, close your eyes and put your hand on your heart. Hear that beat? That is my heart answering yours.\n\nNo matter where I am, my thoughts are always wrapped around you. You are my morning thought, my afternoon daydream, and my night prayer.\n\nWhenever you miss me, remember that we are under the same sky, breathing the same air, counting down until we never have to say goodbye again.\n\nI love you more than words could ever describe.\n\nAlways your fiancé 🌸`
  },
  2: {
    title: "Open When You Need A Smile 🌸",
    date: "A bundle of sunshine for Harshuu",
    body: `Hey my prettiest girl,\n\nDid you know that your smile is officially my favorite view in the universe? It has this superpower of making everything okay.\n\nIf today was tiring, or you feel a little overwhelmed, take a deep breath. You are doing so wonderfully. You are so capable, so smart, and so deeply loved.\n\nI am always here in your corner—cheering for you, believing in you, and saving all my hugs for you!\n\nNow give me that gorgeous smile, my Queen 😊✨`
  },
  3: {
    title: "Open On Your 18th Birthday! (22 Oct) 🎂",
    date: "22nd October &bull; 18th Birthday Day",
    body: `Dearest HarshuuU,\n\nHappy 18th Birthday to the love of my life, my anchor, and my beautiful future wife!\n\nToday the whole world celebrates the day you were born, but nobody in this universe is more grateful for your existence than me. You brought colors into my world that I never knew existed.\n\nOn this 22nd of October, as you step into your golden 18th year, I wish you endless laughter, glowing health, peace in your mind, and the fulfillment of every single dream you hold close to your heart.\n\nI promise to spend the rest of our lives making you feel loved, appreciated, and cherished.\n\nHappy 18th Birthday, HarshuuU! 💖💍🎉`
  }
};

/* ==========================================================================
   GUARANTEED WEB AUDIO SYNTHESIZER: "HAPPY BIRTHDAY TO YOU" MUSIC BOX
   ========================================================================== */
let audioCtx = null;
let isAudioPlaying = false;
let melodyTimeoutId = null;
let customAudioEl = null;

// Authentic Happy Birthday Melody Notes (Frequencies in Hz and Durations in ms)
const HAPPY_BIRTHDAY_NOTES = [
  // "Happy Birthday to you"
  { f: 392.00, d: 340, chord: [130.81, 196.00] }, // G4
  { f: 392.00, d: 240 },                          // G4
  { f: 440.00, d: 550, chord: [174.61, 261.63] }, // A4
  { f: 392.00, d: 550 },                          // G4
  { f: 523.25, d: 550, chord: [261.63, 329.63] }, // C5
  { f: 493.88, d: 1100, chord: [196.00, 246.94] },// B4
  { rest: 220 },

  // "Happy Birthday to you"
  { f: 392.00, d: 340, chord: [196.00] },         // G4
  { f: 392.00, d: 240 },                          // G4
  { f: 440.00, d: 550, chord: [196.00, 293.66] }, // A4
  { f: 392.00, d: 550 },                          // G4
  { f: 587.33, d: 550, chord: [146.83, 220.00] }, // D5
  { f: 523.25, d: 1100, chord: [130.81, 261.63] },// C5
  { rest: 220 },

  // "Happy Birthday dear Harshuu"
  { f: 392.00, d: 340, chord: [130.81] },         // G4
  { f: 392.00, d: 240 },                          // G4
  { f: 783.99, d: 550, chord: [261.63, 392.00] }, // G5
  { f: 659.25, d: 550, chord: [164.81, 329.63] }, // E5
  { f: 523.25, d: 550, chord: [130.81, 261.63] }, // C5
  { f: 493.88, d: 550 },                          // B4
  { f: 440.00, d: 900, chord: [174.61, 220.00] }, // A4
  { rest: 220 },

  // "Happy Birthday to you"
  { f: 698.46, d: 340, chord: [174.61] },         // F5
  { f: 698.46, d: 240 },                          // F5
  { f: 659.25, d: 550, chord: [261.63, 329.63] }, // E5
  { f: 523.25, d: 550 },                          // C5
  { f: 587.33, d: 550, chord: [196.00, 293.66] }, // D5
  { f: 523.25, d: 1400, chord: [130.81, 196.00, 261.63, 329.63] }, // C5 final resolution
  { rest: 1200 } // Pause before loop repeats
];

function initAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

// Plays a gentle, acoustic celesta/music-box chime tone
function playChimeNote(freq, durationSec, isChord = false) {
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const oscHarmonic = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  // Bell/Music-box blend: sine + triangle harmonic
  osc.type = "sine";
  osc.frequency.setValueAtTime(freq, now);

  oscHarmonic.type = "triangle";
  oscHarmonic.frequency.setValueAtTime(freq * 2, now);

  const maxGain = isChord ? 0.03 : 0.08;
  gain.gain.setValueAtTime(0.001, now);
  gain.gain.exponentialRampToValueAtTime(maxGain, now + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + durationSec);

  osc.connect(gain);
  oscHarmonic.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start(now);
  oscHarmonic.start(now);
  osc.stop(now + durationSec + 0.05);
  oscHarmonic.stop(now + durationSec + 0.05);
}

// Infinite Seamless Music Box Loop
function startHappyBirthdayLoop() {
  initAudioContext();
  isAudioPlaying = true;
  updateMusicUI(true, "Happy Birthday Song Playing 💖");

  let noteIndex = 0;

  function playStep() {
    if (!isAudioPlaying) return;

    const item = HAPPY_BIRTHDAY_NOTES[noteIndex];

    if (item.rest) {
      melodyTimeoutId = setTimeout(playStep, item.rest);
    } else {
      const durSec = item.d / 1000;
      playChimeNote(item.f, durSec * 1.6, false);

      // Play backing chord if defined
      if (item.chord && item.chord.length) {
        item.chord.forEach(chordFreq => {
          playChimeNote(chordFreq, durSec * 1.8, true);
        });
      }

      melodyTimeoutId = setTimeout(playStep, item.d);
    }

    noteIndex++;
    if (noteIndex >= HAPPY_BIRTHDAY_NOTES.length) {
      noteIndex = 0; // Seamless loop!
    }
  }

  playStep();
}

function stopHappyBirthdayLoop() {
  isAudioPlaying = false;
  if (melodyTimeoutId) {
    clearTimeout(melodyTimeoutId);
    melodyTimeoutId = null;
  }
  updateMusicUI(false, "Tap to Play Music");
}

function toggleMusic() {
  if (customAudioEl) {
    if (customAudioEl.paused) {
      customAudioEl.play();
      updateMusicUI(true, "Custom Song Playing 💖");
    } else {
      customAudioEl.pause();
      updateMusicUI(false, "Music Paused");
    }
    return;
  }

  if (isAudioPlaying) {
    stopHappyBirthdayLoop();
  } else {
    startHappyBirthdayLoop();
  }
}

function updateMusicUI(playing, statusText) {
  const bars = document.getElementById("musicBars");
  const btn = document.getElementById("musicToggleBtn");
  const status = document.getElementById("musicStatusText");

  if (playing) {
    if (bars) bars.classList.add("playing");
    if (btn) btn.classList.add("playing");
    if (status) status.textContent = statusText;
  } else {
    if (bars) bars.classList.remove("playing");
    if (btn) btn.classList.remove("playing");
    if (status) status.textContent = statusText;
  }
}

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initSakuraCanvas();
  render18Reasons();
  loadStoredPhotos();
  initMusicPlayer();
  initTouchSparkleHearts();
  initScratchCard();
});

/* ==========================================================================
   ROMANTIC ENTRANCE UNLOCK (SURPRISE REVEAL)
   ========================================================================== */
function unlockSurpriseExperience() {
  const curtain = document.getElementById("entranceCurtain");
  if (curtain) {
    curtain.classList.add("opened");
  }

  if (navigator.vibrate) {
    try { navigator.vibrate([40, 60, 40]); } catch (e) {}
  }

  // 100% Guaranteed Native Audio Playback triggered by user tap!
  startHappyBirthdayLoop();

  // Grand celebration welcome confetti & chime
  triggerGrandConfetti();
}

/* ==========================================================================
   SMOOTH SCROLL TO SECTION
   ========================================================================== */
function scrollToSection(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/* ==========================================================================
   18 REASONS POPULATOR (SWEET 18 MILESTONE)
   ========================================================================== */
function render18Reasons() {
  const container = document.getElementById("reasonsGrid");
  if (!container) return;

  container.innerHTML = "";

  REASONS_LIST.forEach((reason, index) => {
    const card = document.createElement("div");
    card.className = "reason-card";
    card.innerHTML = `
      <div class="reason-num">#${index + 1}</div>
      <div class="reason-heart">💖</div>
      <div class="reason-text">${reason}</div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("revealed");
      if (card.classList.contains("revealed")) {
        triggerSingleHeartEffect(card);
      }
    });

    container.appendChild(card);
  });
}

function triggerSingleHeartEffect(element) {
  const rect = element.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  if (window.confetti) {
    window.confetti({
      particleCount: 15,
      spread: 50,
      origin: { x, y },
      colors: ['#ff758c', '#ff7eb3', '#f7a8b8', '#ffccd9']
    });
  }
}

/* ==========================================================================
   INTERACTIVE LOVE METER
   ========================================================================== */
let meterCalculated = false;

function calculateLoveMeter() {
  if (meterCalculated) return;
  meterCalculated = true;

  const fill = document.getElementById("meterFill");
  const percentText = document.getElementById("meterPercent");
  const resultBox = document.getElementById("meterResultBox");
  const btn = document.getElementById("calculateLoveBtn");

  btn.disabled = true;
  btn.style.opacity = "0.7";
  btn.textContent = "Calculating Love Frequency... 💖";

  let current = 0;
  const interval = setInterval(() => {
    current += 4;
    if (current <= 100) {
      fill.style.width = current + "%";
      percentText.textContent = current + "%";
    } else {
      clearInterval(interval);
      fill.style.width = "100%";
      percentText.textContent = "∞ INFINITE %";
      btn.textContent = "✨ Calculated: Infinite Love ✨";
      resultBox.style.display = "block";
      triggerGrandConfetti();
    }
  }, 35);
}

/* ==========================================================================
   DIGITAL COUNTDOWN TIMER (TO 22 OCTOBER)
   ========================================================================== */
function initCountdown() {
  const daysEl = document.getElementById("daysNum");
  const hoursEl = document.getElementById("hoursNum");
  const minsEl = document.getElementById("minutesNum");
  const secsEl = document.getElementById("secondsNum");
  const statusMsg = document.getElementById("countdownMessage");
  const titleEl = document.getElementById("countdownTitle");

  function updateTimer() {
    const now = new Date().getTime();
    const target = BIRTHDAY_DATE.getTime();
    const diff = target - now;

    if (diff <= 0) {
      daysEl.textContent = "00";
      hoursEl.textContent = "00";
      minsEl.textContent = "00";
      secsEl.textContent = "00";
      titleEl.innerHTML = "🎉 IT'S HARSHUU'S 18th BIRTHDAY TODAY! (22 OCT) 🎉";
      statusMsg.innerHTML = "💖 Happy 18th Birthday to my wonderful fiancée HarshuuU! Welcome to 18, my Queen! 🎂✨";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minsEl.textContent = String(minutes).padStart(2, "0");
    secsEl.textContent = String(seconds).padStart(2, "0");
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ==========================================================================
   3D GIFT BOX UNWRAP & COUPON REDEEM
   ========================================================================== */
let giftUnwrapped = false;

function unwrapBirthdayGift() {
  if (giftUnwrapped) return;
  giftUnwrapped = true;

  const lid = document.getElementById("giftLid");
  const vault = document.getElementById("couponsVault");

  if (lid) {
    lid.classList.add("unwrapped");
  }

  if (navigator.vibrate) {
    try { navigator.vibrate([60, 40, 60]); } catch (e) {}
  }

  triggerGrandConfetti();

  setTimeout(() => {
    if (vault) {
      vault.style.display = "block";
      vault.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 400);
}

function redeemCoupon(element, title) {
  if (element.classList.contains("redeemed")) {
    alert(`💖 You've already redeemed this coupon, Harshuu! Your fiancé is on it! 🥰`);
    return;
  }

  element.classList.add("redeemed");
  const status = element.querySelector(".coupon-status");
  if (status) {
    status.textContent = "✓ REDEEMED 💖";
  }

  if (navigator.vibrate) {
    try { navigator.vibrate([40, 40]); } catch (e) {}
  }

  triggerSingleHeartEffect(element);
  alert(`🎉 COUPON REDEEMED!\n\nYour fiancé is now officially on duty for: "${title}"! 💍`);
}

/* ==========================================================================
   INTERACTIVE SCRATCH-OFF CARD ENGINE
   ========================================================================== */
function initScratchCard() {
  const canvas = document.getElementById("scratchCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const width = canvas.width;
  const height = canvas.height;

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f7a8b8');
  gradient.addColorStop(0.3, '#ffccd9');
  gradient.addColorStop(0.6, '#ea728c');
  gradient.addColorStop(1, '#f5d68f');

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  ctx.font = 'bold 16px "Playfair Display", Georgia, serif';
  ctx.fillStyle = '#ffffff';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0,0,0,0.2)';
  ctx.shadowBlur = 4;
  ctx.fillText('✨ SCRATCH WITH FINGER ✨', width / 2, height / 2 - 8);
  
  ctx.font = '13px "Plus Jakarta Sans", sans-serif';
  ctx.fillText('Secret message from your fiancé 💖', width / 2, height / 2 + 16);

  let isDrawing = false;
  let scratchedPixels = 0;
  let cardCompleted = false;

  function scratch(x, y) {
    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 22, 0, Math.PI * 2);
    ctx.fill();

    scratchedPixels++;
    if (scratchedPixels > 45 && !cardCompleted) {
      cardCompleted = true;
      triggerGrandConfetti();
    }
  }

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  }

  canvas.addEventListener('pointerdown', (e) => {
    isDrawing = true;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  });

  window.addEventListener('pointermove', (e) => {
    if (!isDrawing) return;
    const pos = getPos(e);
    scratch(pos.x, pos.y);
  });

  window.addEventListener('pointerup', () => {
    isDrawing = false;
  });
}

/* ==========================================================================
   LOVE LETTERS MODAL LOGIC
   ========================================================================== */
function openLetter(letterId) {
  const letter = LOVE_LETTERS[letterId];
  if (!letter) return;

  document.getElementById("modalLetterTitle").textContent = letter.title;
  document.getElementById("modalLetterBody").textContent = letter.body;
  document.getElementById("letterModal").classList.add("active");

  triggerGentleConfetti();
}

function closeLetterModal(event) {
  if (event.target === document.getElementById("letterModal")) {
    document.getElementById("letterModal").classList.remove("active");
  }
}

function closeLetterModalDirect() {
  document.getElementById("letterModal").classList.remove("active");
}

/* ==========================================================================
   INTERACTIVE BIRTHDAY CAKE & CANDLE BLOWING
   ========================================================================== */
let candlesBlown = false;

function blowOutCandles() {
  if (candlesBlown) return;
  candlesBlown = true;

  if (navigator.vibrate) {
    try { navigator.vibrate([60, 40, 80]); } catch (e) {}
  }

  for (let i = 1; i <= 5; i++) {
    const flame = document.getElementById(`flame${i}`);
    if (flame) {
      flame.classList.add("blown-out");
    }
  }

  triggerGrandConfetti();

  document.getElementById("wishMessageBox").style.display = "block";
  document.getElementById("blowCandleBtn").style.display = "none";
  document.getElementById("relightBtn").style.display = "inline-block";
}

function relightCandles() {
  candlesBlown = false;
  for (let i = 1; i <= 5; i++) {
    const flame = document.getElementById(`flame${i}`);
    if (flame) {
      flame.classList.remove("blown-out");
    }
  }

  document.getElementById("wishMessageBox").style.display = "none";
  document.getElementById("blowCandleBtn").style.display = "inline-block";
  document.getElementById("relightBtn").style.display = "none";
}

function triggerHeartBurst() {
  triggerGrandConfetti();
}

function triggerGrandConfetti() {
  if (window.confetti) {
    const count = 220;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      window.confetti(Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio)
      }));
    }

    fire(0.25, {
      spread: 28,
      startVelocity: 55,
      colors: ['#ff758c', '#ff7eb3', '#f7a8b8', '#ffffff']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#f5d68f', '#ffc0cb', '#ea728c']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  }
}

function triggerGentleConfetti() {
  if (window.confetti) {
    window.confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#f7a8b8', '#ffccd9', '#ffffff', '#f5d68f']
    });
  }
}

/* ==========================================================================
   MUSIC PLAYER CONTROLS & CUSTOM FILE UPLOAD
   ========================================================================== */
function initMusicPlayer() {
  const toggleBtn = document.getElementById("musicToggleBtn");
  const uploadBtn = document.getElementById("musicUploadTrigger");
  const fileInput = document.getElementById("customAudioInput");

  if (toggleBtn) {
    toggleBtn.addEventListener("click", toggleMusic);
  }

  if (uploadBtn && fileInput) {
    uploadBtn.addEventListener("click", () => {
      fileInput.click();
    });
    fileInput.addEventListener("change", handleCustomAudioUpload);
  }
}

function handleCustomAudioUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  stopHappyBirthdayLoop();

  if (customAudioEl) {
    customAudioEl.pause();
  }

  const fileUrl = URL.createObjectURL(file);
  customAudioEl = new Audio(fileUrl);
  customAudioEl.loop = true;
  customAudioEl.play();

  document.getElementById("musicTrackName").textContent = file.name.replace(/\.[^/.]+$/, "");
  updateMusicUI(true, "Playing Your Song 💕");
}

/* ==========================================================================
   PHOTO CUSTOMIZER & PERSISTENCE
   ========================================================================= */
function openCustomizeModal() {
  document.getElementById("customizeModal").classList.add("active");
}

function closeCustomizeModal(event) {
  if (event.target === document.getElementById("customizeModal")) {
    document.getElementById("customizeModal").classList.remove("active");
  }
}

function closeCustomizeModalDirect() {
  document.getElementById("customizeModal").classList.remove("active");
}

function handlePhotoUpload(event, targetImgId) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    const dataUrl = e.target.result;
    const imgEl = document.getElementById(targetImgId);
    if (imgEl) {
      imgEl.src = dataUrl;
      try {
        localStorage.setItem(`harshuu_${targetImgId}`, dataUrl);
      } catch (err) {
        console.warn("Storage quota warning", err);
      }
    }
  };
  reader.readAsDataURL(file);
}

function loadStoredPhotos() {
  ['polaroidImg1', 'polaroidImg2', 'polaroidImg3', 'polaroidImg4', 'imgTimeline1', 'imgTimeline2', 'imgTimeline3'].forEach(id => {
    const stored = localStorage.getItem(`harshuu_${id}`);
    if (stored) {
      const img = document.getElementById(id);
      if (img) img.src = stored;
    }
  });
}

/* ==========================================================================
   TOUCH / CURSOR FLOATING SPARKLE HEARTS
   ========================================================================== */
function initTouchSparkleHearts() {
  let lastSpawn = 0;
  const hearts = ['💖', '🌸', '✨', '💕', '🥰'];

  function spawnHeart(x, y) {
    const now = Date.now();
    if (now - lastSpawn < 120) return;
    lastSpawn = now;

    const heart = document.createElement("div");
    heart.className = "touch-heart";
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = (x - 12) + "px";
    heart.style.top = (y - 12) + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1200);
  }

  window.addEventListener("pointermove", (e) => {
    spawnHeart(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener("pointerdown", (e) => {
    spawnHeart(e.clientX, e.clientY);
  }, { passive: true });
}

/* ==========================================================================
   CANVAS SAKURA CHERRY BLOSSOM PETALS ENGINE
   ========================================================================== */
function initSakuraCanvas() {
  const canvas = document.getElementById("sakuraCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const petalCount = 38;
  const petals = [];

  class SakuraPetal {
    constructor() {
      this.reset();
      this.y = Math.random() * height;
    }

    reset() {
      this.x = Math.random() * width;
      this.y = -20;
      this.size = Math.random() * 9 + 8;
      this.speedY = Math.random() * 1.4 + 0.8;
      this.speedX = Math.random() * 1.2 - 0.4;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 1.5;
      this.flip = Math.random();
      this.flipSpeed = Math.random() * 0.03 + 0.01;
      this.opacity = Math.random() * 0.45 + 0.4;
      
      const colors = [
        'rgba(255, 183, 197, ',
        'rgba(255, 192, 203, ',
        'rgba(255, 218, 224, ',
        'rgba(247, 168, 184, '
      ];
      this.colorBase = colors[Math.floor(Math.random() * colors.length)];
    }

    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
      this.rotation += this.rotationSpeed;
      this.flip += this.flipSpeed;

      if (this.y > height + 20 || this.x > width + 20 || this.x < -20) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.scale(1, Math.sin(this.flip));

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-this.size / 2, -this.size / 2, -this.size / 2, this.size / 2, 0, this.size);
      ctx.bezierCurveTo(this.size / 2, this.size / 2, this.size / 2, -this.size / 2, 0, 0);
      
      ctx.fillStyle = this.colorBase + this.opacity + ')';
      ctx.shadowColor = 'rgba(255, 182, 193, 0.4)';
      ctx.shadowBlur = 4;
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < petalCount; i++) {
    petals.push(new SakuraPetal());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    petals.forEach(petal => {
      petal.update();
      petal.draw();
    });
    requestAnimationFrame(animate);
  }

  animate();
}
