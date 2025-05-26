import React, { useEffect, useState } from "react";
import TopAppBar from "../components/TopAppBar";
import FilterCard from "../components/FilterCard";
import "./archive.scss";
import AudioFileCard from "../components/AudioFileCard";
import { getAudioFileList } from "../helper/requests";

type audioFileType = {

    id: number,
    author: string,
    name: string,
    url: string,


}


export default function Archive() {
  const [audioRecordings, setAudioRecordings] = useState([
    
  ] );

  // Sorting options
  const sortingOptions = [
    { id: 1, label: "По релевантности", selected: true },
    { id: 2, label: "По названию", selected: false },
    { id: 3, label: "По дате", selected: false },
    { id: 4, label: "По дате публикации", selected: false },
    { id: 5, label: "По популярности", selected: false },
  ];

  // Genre options
  const genreOptions = [
    { id: 1, label: "Хор", checked: true },
    { id: 2, label: "Строевой марш", checked: false },
    { id: 3, label: "Походный марш", checked: false },
    { id: 4, label: "Траурный марш", checked: true },
    { id: 5, label: "Пьеса-сигнал", checked: false },
  ];
  
  useEffect(() => {
    getAudioFileList().then((response) => {
        setAudioRecordings(response);  
    })
  }, [])
  

  return (
    <>
      <TopAppBar />
      <div className="archive-container">
        <div className="audio-file-list">
          {audioRecordings.map((element) => (
            <AudioFileCard id={element.id} author={element.author} name={element.name} url={element.url} />
          ))}
        </div>
        <FilterCard />
      </div>
    </>
  );
}
