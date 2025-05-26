import React, { useEffect, useRef, useState } from "react";
import TopAppBar from "../components/TopAppBar";
import { FileDrop } from "react-file-drop";
import "./restoration.scss";
import { dblink } from "../helper/requests";

export default function Restoration() {
  const [isUploaded, setIsUploaded] = useState(false);

  const [file, setFile] = useState<File>();

  const fileInputRef = useRef(null);

  const onFileInputChange = () => {

};

  const onFileDrop = (files: FileList, event: React.DragEvent<HTMLDivElement>) => {
    setFile(files[0]);
    setIsUploaded(true);
};

  const uploadFile = () => {
    if(file == null) return;

    const formData = new FormData();
    formData.append("file", file);

    fetch(dblink + '/upload_audio', {
        method: 'POST',
        body: formData,
    }).then((response) => {
        if(!response.ok){
            response.text().then((text) => {
                alert("Не удалось загрузить файл " + text)
            })
            return
        }

        alert("Файл успешно загружен!")

    }).catch((err) => {

        alert("Не удалось загрузить файл" + err.message)

    })
    .finally(() =>{
        window.location.reload();
    });
  }

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
                {isUploaded ? <button className="uploaded-div"
					onClick={()=>alert("Pressed!")}>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/8i99y37j_expires_30_days.png"} 
						className="image"
					/>
					<span className="uploaded-span-1" >
						{file?.name}
					</span>
					<span className="uploaded-span-2" >
						{file?.size} Б
					</span>
				</button>
                :
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
                }
              
               
              </FileDrop>
              <div className="column4">
                <span className="text6">{"Поддерживаемые форматы:"}</span>
                <span className="text7">{"MP3, WAV, OGG, FLAC (максимальный размер: 50 МБ)"}</span>
              </div>
              <button className="button-row-view uploadFile" disabled={!isUploaded} onClick={uploadFile}>
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
