import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound"; //для работы со звуком

import "./audio-file-card.scss";
import { dblink } from "../helper/requests";

const soundurl =  "/truba-upala.mp3"

type audioFileCardProds = {
    id: number,
    author: string,
    name: string,
    url: string
}


export default function AudioFileCard(props: audioFileCardProds) {
    const [objectUrl, setObjectUrl] = useState(undefined);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);


    const downloadFile = () => {
        if (!isLoaded) {
            fetchAudio();
        }
    };

    const togglePlayback = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const fetchAudio = () => {
        console.log("fetching");
        setIsLoading(true);

        fetch(dblink + props.url).then((response) => {
            console.log(response.status);
            
            response.blob().then((blob) => {
                console.log(blob);

                const objectUrl = URL.createObjectURL(blob);
                console.log(objectUrl);

                setObjectUrl(objectUrl);
                togglePlayback();

                setIsLoaded(true);
                setIsLoading(false);

                
            }).catch((err) =>
                console.log(err))
            .finally(() => {
                setIsLoading(false);
            })
        })
    }

    useEffect(() => {
        if (audioRef.current && objectUrl) {
            // When the objectUrl changes, reset the audio element
            audioRef.current.load();
            
            // Auto-play when loaded (optional)
            audioRef.current.onloadeddata = () => {
                if (isPlaying) {
                    audioRef.current?.play();
                }
            };
        }
    }, [objectUrl]);


  return (
    <>
      <div className="audio-file-card">
        {/* <img  src={"/ButtonPause.svg"} onClick={playingButton}/>
        <img  src={"/Loader.gif"} onClick={playingButton}/> */}

        {isLoading ? 
        <img  src={"/Loader.gif"} onClick={downloadFile}/>
        :
        isLoaded ?
        <img  src={"/check-circle 1.svg"} onClick={downloadFile}/>
        :
        <img  src={"/download.svg"} onClick={downloadFile}/>
        }

        <div>
          <span className="audio-file-author">{props.author}</span>
          <span className="audio-file-name">{props.name}</span>

        </div>
        <div className="filler"/>

        <audio  className="filecardaudio"
                controls={true} 
                ref={audioRef}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
            >
                <source src={objectUrl} type="audio/wav" />
                Your browser does not support the audio element.
            </audio>
      </div>
    </>
  );
}


