import { useEffect, useRef, useState } from "react";
import { cssVideo } from "./style";

const Player = () => {
  const video = useRef();
  const timeSeek = useRef();
  const currentTime = useRef();
  const [play, setPlay] = useState(false);
  const [mute, setMute] = useState(false);
  
  useEffect(() => {
    play ? video.current.play() : video.current.pause();
  }, [play]);

  const handleUpdateTime = () => {
    var timeSeekNow = video.current.currentTime * (100 / video.current.duration);
    timeSeek.current.value = timeSeekNow;

    var currentMinutes = Math.floor(video.current.currentTime / 60);
    var currentSeconds = Math.floor(video.current.currentTime - currentMinutes * 60);
    var durationMinutes = Math.floor(video.current.duration / 60);
    var durationSeconds = Math.floor(video.current.duration - durationMinutes * 60);

    if (currentMinutes < 10 ) currentMinutes = "0" + currentMinutes;
    if (currentSeconds < 10 ) currentSeconds = "0" + currentSeconds;
    if (durationMinutes < 10 ) durationMinutes = "0" + durationMinutes;
    if (durationSeconds < 10 ) durationSeconds = "0" + durationSeconds;

    currentTime.current.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
  }

  const handleChangeSeek = () => {
    const updateSeek = video.current.duration * (timeSeek.current.value / 100);
    video.current.currentTime = updateSeek;
  }

  return(
    <div>
      <video
        className={cssVideo}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        ref={video}
        muted={mute}
        onTimeUpdate={handleUpdateTime}
      />
      <button type="button" onClick={() => setPlay(!play)}>{play ? 'Pause' : 'Play'}</button>
      <button type="button" onClick={() => setMute(!mute)}>{mute ? 'Unmute' : 'Mute'}</button>
      <input ref={timeSeek} type="range" min={0} max={100} value={0} step={1} onChange={handleChangeSeek}/>
      <span ref={currentTime}>00:00/00:00</span>
    </div>
  )
}

export default Player;
