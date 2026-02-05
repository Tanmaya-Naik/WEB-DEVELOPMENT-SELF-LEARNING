import { useRef } from "react";

function Video() {
  const videoRef = useRef(null);

  function playVideo() {
    if (!videoRef.current) return;
    videoRef.current.play();
  }

  function pauseVideo() {
    if (!videoRef.current) return;
    videoRef.current.pause();
  }

  function restartVideo() {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
  }

  function seekForward(seconds = 2) {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const newTime = video.currentTime + seconds;

    video.currentTime = Math.min(newTime, video.duration);
  }

  function seekBackward(seconds = 2) {
    if (!videoRef.current) return;

    const video = videoRef.current;
    const newTime = video.currentTime - seconds;

    video.currentTime = Math.max(newTime, 0);
  }

  return (
    <>
      <video
        ref={videoRef}
        src="/tanu.mp4"
        width="600"
        height="400"
      />

      <div>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
        <button onClick={restartVideo}>Restart</button>
        <button onClick={() => seekForward(2)}>+2s</button>
        <button onClick={() => seekBackward(2)}>-2s</button>
      </div>
    </>
  );
}

export default Video;
