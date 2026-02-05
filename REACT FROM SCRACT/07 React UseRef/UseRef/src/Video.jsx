import { useRef } from "react";




function Video(){

    //LETS TAKE CONTROL OVER VIDEOREF
    const videoRef=useRef(null);

    function handleStart(){
        videoRef.current.play();
    }
    function handleStop(){
        videoRef.current.pause();
    }
    function handleRestart(){
        videoRef.current.currentTime = 0;
    }

    return (
        <>
        <video src="/tanu.mp4" width="600" height="400" ref={videoRef}></video>

        <div>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Pause</button>
            <button onClick={handleRestart}>Restart</button>
        </div>
        </>
    )
}

export default Video;