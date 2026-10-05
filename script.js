const video = document.querySelector('#garden-video');
const status = document.querySelector('#media-status');
const motionToggle = document.querySelector('#motion-toggle');
const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
let staticMode = motionPreference.matches;
let updateQueued = false;

function updateVideo() {
  updateQueued = false;
  if (staticMode || video.readyState < 2 || !Number.isFinite(video.duration) || video.seeking) return;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? Math.min(1, Math.max(0, window.scrollY / height)) : 0;
  const target = Math.min(progress * video.duration, Math.max(0, video.duration - 0.05));
  if (Math.abs(video.currentTime - target) > 0.03) video.currentTime = target;
}

function queueUpdate() {
  if (updateQueued) return;
  updateQueued = true;
  requestAnimationFrame(updateVideo);
}

function applyMotionMode() {
  document.body.classList.toggle('static-mode', staticMode);
  motionToggle.textContent = staticMode ? 'Enable camera motion' : 'Use still image';
  motionToggle.setAttribute('aria-pressed', String(staticMode));
  status.textContent = staticMode ? 'Still image mode. Scroll to read the story.' : '';
  video.pause();
  if (!staticMode) {
    if (!video.getAttribute('src')) {
      status.textContent = 'Loading the garden…';
      video.src = video.dataset.src;
      video.load();
    }
    queueUpdate();
  }
}

motionToggle.addEventListener('click', () => {
  staticMode = !staticMode;
  applyMotionMode();
});
motionPreference.addEventListener('change', (event) => {
  staticMode = event.matches;
  applyMotionMode();
});
video.addEventListener('loadeddata', () => {
  document.body.classList.add('video-ready');
  if (!staticMode) status.textContent = '';
  queueUpdate();
});
video.addEventListener('error', () => {
  document.body.classList.remove('video-ready');
  status.textContent = 'The video could not load. You can still scroll to read the garden story.';
});
video.addEventListener('seeked', queueUpdate);
window.addEventListener('scroll', queueUpdate, { passive: true });
window.addEventListener('resize', queueUpdate);
applyMotionMode();
