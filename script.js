/* ==========================================================================
   HAPPY BIRTHDAY HARSHUUU 🌸 - MAGICAL ROMANTIC SCRIPT (22 OCTOBER)
   ========================================================================== */

// Target Birthday: October 22, 2026 00:00:00 (Local Time)
const BIRTHDAY_DATE = new Date(2026, 9, 22, 0, 0, 0); // Month is 0-indexed: 9 = October

// YouTube Video ID for "Happy Birthday Instrumental Orchestral" (Edward Benhur)
const YT_VIDEO_ID = '57jZJ2QpKRg';
let ytPlayer = null;
let ytPlayerReady = false;
let userRequestedPlay = false;

// 22 Sweet & Heart-Melting Reasons Why I Love My Fiancée HarshuuU
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
  "The strength and grace you carry yourself with every day.",
  "That you chose me to be your partner, your best friend, and your fiancé.",
  "How excited you get over little things and sweet surprises.",
  "The comfort of knowing you are my forever home.",
  "Your patience and the way you always listen to my heart.",
  "The sweet love notes and check-ins that brighten my mornings.",
  "How your smile can melt away all my stress in a single second.",
  "The dreams we are building together for our future home and family.",
  "Your honesty, your loyalty, and your unwavering trust in us.",
  "How proud I feel to tell the entire world: 'She is my fiancée.'",
  "The beautiful person you are inside and outside.",
  "Simply because you are HarshuuU—my once-in-a-lifetime love."
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
    title: "Open On Your Birthday! (22 Oct) 🎂",
    date: "22nd October &bull; Birthday Day",
    body: `Dearest HarshuuU,\n\nHappy Birthday to the love of my life, my anchor, and my beautiful future wife!\n\nToday the whole world celebrates the day you were born, but nobody in this universe is more grateful for your existence than me. You brought colors into my world that I never knew existed.\n\nOn this 22nd of October, I wish you endless laughter, glowing health, peace in your mind, and the fulfillment of every single dream you hold close to your heart.\n\nI promise to spend the rest of our lives making you feel loved, appreciated, and cherished.\n\nHappy, Happy Birthday, HarshuuU! 💖💍🎉`
  }
};

/* ==========================================================================
   YOUTUBE IFRAME PLAYER API INTEGRATION (CONTINUOUS SEAMLESS LOOP)
   ========================================================================== */
window.onYouTubeIframeAPIReady = function() {
  ytPlayer = new YT.Player('youtubePlayer', {
    height: '100',
    width: '100',
    videoId: YT_VIDEO_ID,
    playerVars: {
      autoplay: 0,
      controls: 0,
      disablekb: 1,
      fs: 0,
      loop: 1,
      playlist: YT_VIDEO_ID, // Essential for native YouTube continuous loop
      modestbranding: 1,
      rel: 0,
      playsinline: 1
    },
    events: {
      onReady: (event) => {
        ytPlayerReady = true;
        event.target.setVolume(85);
        if (userRequestedPlay) {
          event.target.playVideo();
        }
      },
      onStateChange: (event) => {
        if (event.data === YT.PlayerState.PLAYING) {
          updateMusicUI(true, "Happy Birthday Song Playing 💖");
        } else if (event.data === YT.PlayerState.PAUSED) {
          updateMusicUI(false, "Music Paused");
        } else if (event.data === YT.PlayerState.ENDED) {
          // ENSURE CONTINUOUS INFINITE LOOP: immediately restart and play again!
          event.target.seekTo(0);
          event.target.playVideo();
          updateMusicUI(true, "Playing on Loop 💖");
        }
      },
      onError: () => {
        console.warn("YouTube player encountered an issue, fallback active.");
      }
    }
  });
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initCountdown();
  initSakuraCanvas();
  render22Reasons();
  loadStoredPhotos();
  initMusicPlayer();
  initTouchSparkleHearts();
});

/* ==========================================================================
   ROMANTIC ENTRANCE UNLOCK (SURPRISE REVEAL)
   ========================================================================== */
function unlockSurpriseExperience() {
  const curtain = document.getElementById("entranceCurtain");
  if (curtain) {
    curtain.classList.add("opened");
  }

  // Mobile subtle romantic haptic feedback
  if (navigator.vibrate) {
    try { navigator.vibrate([40, 60, 40]); } catch (e) {}
  }

  // Play YouTube Happy Birthday Orchestral song on loop
  userRequestedPlay = true;
  if (ytPlayer && ytPlayerReady) {
    try {
      ytPlayer.unMute();
      ytPlayer.playVideo();
      updateMusicUI(true, "Happy Birthday Song Playing 💖");
    } catch (e) {
      startRomanticSynthMelody();
    }
  } else {
    // If YouTube player is still initializing, start audio synth fallback immediately
    startRomanticSynthMelody();
  }

  // Grand celebration welcome confetti
  triggerGrandConfetti();
  playCelebrationChime();
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
      playCelebrationChime();
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
      titleEl.innerHTML = "🎉 IT'S HARSHUU'S BIRTHDAY TODAY! (22 OCT) 🎉";
      statusMsg.innerHTML = "💖 Happy Birthday to my wonderful fiancée HarshuuU! Today is all about you! 🎂✨";
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
   22 REASONS POPULATOR
   ========================================================================== */
function render22Reasons() {
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

  playCelebrationChime();
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
   ROMANTIC MUSIC PLAYER (YOUTUBE LOOP + WEB AUDIO SYNTH + CUSTOM FILE)
   ========================================================================== */
let audioCtx = null;
let isPlaying = false;
let synthInterval = null;
let customAudioEl = null;

function initMusicPlayer() {
  const toggleBtn = document.getElementById("musicToggleBtn");
  const uploadBtn = document.getElementById("musicUploadTrigger");
  const fileInput = document.getElementById("customAudioInput");

  toggleBtn.addEventListener("click", toggleMusic);

  uploadBtn.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", handleCustomAudioUpload);
}

function toggleMusic() {
  // If custom uploaded audio
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

  // If YouTube player is ready
  if (ytPlayer && ytPlayerReady) {
    try {
      const state = ytPlayer.getPlayerState();
      if (state === YT.PlayerState.PLAYING) {
        ytPlayer.pauseVideo();
        updateMusicUI(false, "Music Paused");
      } else {
        stopRomanticSynthMelody();
        ytPlayer.playVideo();
        updateMusicUI(true, "Happy Birthday Song Playing 💖");
      }
      return;
    } catch (e) {
      console.warn("YouTube toggle exception", e);
    }
  }

  // Fallback to built-in Romantic Melody Synthesizer
  if (!isPlaying) {
    startRomanticSynthMelody();
    updateMusicUI(true, "Romantic Melody Playing 🌸");
  } else {
    stopRomanticSynthMelody();
    updateMusicUI(false, "Tap to Play Music");
  }
}

function updateMusicUI(playing, statusText) {
  isPlaying = playing;
  const bars = document.getElementById("musicBars");
  const btn = document.getElementById("musicToggleBtn");
  const status = document.getElementById("musicStatusText");

  if (playing) {
    bars.classList.add("playing");
    btn.classList.add("playing");
    status.textContent = statusText;
  } else {
    bars.classList.remove("playing");
    btn.classList.remove("playing");
    status.textContent = statusText;
  }
}

function startRomanticSynthMelody() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }

  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }

  isPlaying = true;

  const chords = [
    [261.63, 329.63, 392.00, 523.25], // C4, E4, G4, C5
    [196.00, 246.94, 293.66, 392.00], // G3, B3, D4, G4
    [220.00, 261.63, 329.63, 440.00], // A3, C4, E4, A4
    [174.61, 220.00, 261.63, 349.23]  // F3, A3, C4, F4
  ];

  let chordIndex = 0;
  let noteIndex = 0;

  function playNextNote() {
    if (!isPlaying || !audioCtx) return;

    const currentChord = chords[chordIndex];
    const freq = currentChord[noteIndex];

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 0.1);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.9);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.95);

    noteIndex++;
    if (noteIndex >= currentChord.length) {
      noteIndex = 0;
      chordIndex = (chordIndex + 1) % chords.length;
    }
  }

  playNextNote();
  synthInterval = setInterval(playNextNote, 420);
}

function stopRomanticSynthMelody() {
  isPlaying = false;
  if (synthInterval) {
    clearInterval(synthInterval);
    synthInterval = null;
  }
}

function playCelebrationChime() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = audioCtx || new AudioContext();
    const notes = [523.25, 659.25, 783.99, 1046.50];

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);
      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + idx * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + idx * 0.12 + 0.7);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + idx * 0.12);
      osc.stop(ctx.currentTime + idx * 0.12 + 0.75);
    });
  } catch (e) {
    // Audio permission fallback
  }
}

function handleCustomAudioUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  stopRomanticSynthMelody();
  if (ytPlayer && ytPlayerReady) {
    try { ytPlayer.pauseVideo(); } catch (e) {}
  }

  if (customAudioEl) {
    customAudioEl.pause();
  }

  const fileUrl = URL.createObjectURL(file);
  customAudioEl = new Audio(fileUrl);
  customAudioEl.loop = true; // Loop custom song forever
  customAudioEl.play();

  document.getElementById("musicTrackName").textContent = file.name.replace(/\.[^/.]+$/, "");
  updateMusicUI(true, "Playing Your Couple Song 💕");
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
