// ---- Typewriter effect for the H1
(function(){
  const el = document.querySelector('.typewrite');
  if(!el) return;
  const full = el.getAttribute('data-text') || el.textContent.trim();
  el.textContent = ""; // start blank
  let i = 0;

  function type() {
    if (i <= full.length) {
      el.textContent = full.slice(0, i);
      i++;
      // vary speed a bit for a human feel
      const jitter = 20 + Math.random()*60;
      setTimeout(type, 60 + jitter);
    }
  }
  // slight delay for drama
  setTimeout(type, 600);
})();

// ---- Background music control
(function(){
  const audio = document.getElementById('bg-audio');
  const btn = document.getElementById('playBtn');
  if(!btn || !audio) return;

  let isPlaying = false;

  btn.addEventListener('click', async () => {
    try {
      if(!isPlaying){
        await audio.play();
        isPlaying = true;
        btn.textContent = "⏸ Pause music";
        btn.setAttribute('aria-pressed', 'true');
      } else {
        audio.pause();
        isPlaying = false;
        btn.textContent = "▶ Play music";
        btn.setAttribute('aria-pressed', 'false');
      }
    } catch (e) {
      // If playback fails (e.g., file missing), fall back to enabling the Spotify embed
      console.warn("Audio play failed:", e);
      btn.textContent = "▶ Use the Spotify player below";
      btn.disabled = true;
    }
  });

  // Lower default volume so it’s gentle
  audio.volume = 0.35;
})();
