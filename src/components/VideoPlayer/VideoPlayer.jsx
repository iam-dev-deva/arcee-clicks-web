import React, { useRef } from 'react'
import './VideoPlayer.css'
import source from '../../assets/source.json'

const VideoPlayer = ({playerState,setPlayerState}) => {
    const player = useRef(null);
    const closePlayer = (e)=>{
        if(e.target === player.current){
setPlayerState(false);
        }
    }
  return (
    <div className={`video-player ${playerState?"":'hide'}`} ref={player} onClick={closePlayer}>
        <video src={source.playbackVideo} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer