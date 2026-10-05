const video = document.querySelector("#garden-video");

let updateQueued = false;

function updateVideo() {
  updateQueued = false;

  // Chờ video sẵn sàng và hoàn thành lần tua trước.
  if (
    video.readyState < 2 ||
    !Number.isFinite(video.duration) ||
    video.seeking
  ) {
    return;
  }

  // Độ dài trang có thể cuộn.
  const scrollableHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  // Chuyển vị trí cuộn thành số từ 0 đến 1.
  const progress =
    scrollableHeight > 0
      ? Math.min(1, Math.max(0, window.scrollY / scrollableHeight))
      : 0;

  // Chuyển tiến độ cuộn thành thời điểm trong video.
  const targetTime = progress * video.duration;

  if (Math.abs(video.currentTime - targetTime) > 0.03) {
    video.currentTime = targetTime;
  }
}

function queueUpdate() {
  if (updateQueued) return;

  updateQueued = true;
  requestAnimationFrame(updateVideo);
}

window.addEventListener("scroll", queueUpdate, { passive: true });
window.addEventListener("resize", queueUpdate);

video.addEventListener("loadeddata", queueUpdate);
video.addEventListener("seeked", queueUpdate);

queueUpdate();