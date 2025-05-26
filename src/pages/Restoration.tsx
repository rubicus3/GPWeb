import React, { useEffect, useRef, useState } from "react";
import TopAppBar from "../components/TopAppBar";
import { FileDrop } from "react-file-drop";
import "./restoration.scss";

export default function Restoration() {
  const [isUploaded, setIsUploaded] = useState(false);

  const fileInputRef = useRef(null);

  const onFileInputChange = (event) => {
    const { files } = event.target;
    // do something with your files...
  };

  const onFileDrop = (files: FileList, event: React.DragEvent<HTMLDivElement>) => {
    console.log(files);
  };

  return (
    <div className="restoration-container">
      <TopAppBar />
      <div className="restoration-text-container">
        <div className="restoration-text">
          <span className="title-text">{"Загрузка аудиозаписи"}</span>
          <div className="view">
            <div className="column2">
              <span className="text2">
                {"Загрузите песню с низким качеством для обработки с помощью искусственного интеллекта"}
              </span>
              <FileDrop className="file-drop" onDrop={(files, event) => onFileDrop(files, event)}>
                <div className="column3">
                  <img
                    src={
                      "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/abyuey13_expires_30_days.png"
                    }
                    className="image"
                  />
                  <span className="text3">{"Перетащите аудиофайл сюда"}</span>
                  <span className="text4">{"или"}</span>
                  <button ref={fileInputRef} onClick={onFileInputChange} className="button-row-view">
                    <span className="text5">{"Выберите файл"}</span>
                  </button>
                </div>
              </FileDrop>
              <div className="column4">
                <span className="text6">{"Поддерживаемые форматы:"}</span>
                <span className="text7">{"MP3, WAV, OGG, FLAC (максимальный размер: 50 МБ)"}</span>
              </div>
              <button className="button-row-view if-disabled" disabled={!isUploaded} onClick={() => alert("Pressed!")}>
                <img
                  src={
                    "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/07us7fy5_expires_30_days.png"
                  }
                  className="image2"
                />
                <span className="text8">{"Загрузить для восстановления"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
