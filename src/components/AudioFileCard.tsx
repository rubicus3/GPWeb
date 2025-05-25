import React, { useEffect, useState } from "react";
import "./audio-file-card.scss";

type audioFileCardProds = {
    id: number,
    author: string,
    name: string,
    url: string
}


export default function AudioFileCard(props: audioFileCardProds) {

    const [author, setAuthor] = useState("");
    const [name, setName] = useState("");

    useEffect(() => {
        setAuthor(props.author);
        setName(props.name);
    });


  return (
    <>
      <div className="audio-file-card">
        <img src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/o0sps67t_expires_30_days.png"} />
        <div>
          <span className="audio-file-author">{author}</span>
          <span className="audio-file-name">{name}</span>
        </div>
      </div>
    </>
  );
}
