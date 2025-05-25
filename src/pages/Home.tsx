import React from "react";
import TopAppBar from "../components/TopAppBar";
import "./home.scss";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();
    
    return (
    <>
      <div className="contain">
        <TopAppBar />
        <div className="scroll-view">
          <div className="column">
            <div className="column2">
              <span className="text">{"Сохраняем музыкальное наследие военных лет"}</span>
              <span className="text2">
                {
                  "Проект Голос Победы использует современные технологии для восстановления и оцифровки исторических аудиозаписей."
                }
              </span>
            </div>
            <div className="row-view">
              <button className="button-row-view" onClick={() => navigate("/archive")}>
                <img src={"/Archive.svg"} className="image" />
                <span className="text3">{"Перейти в архив"}</span>
              </button>
              <button className="button-row-view" onClick={() => navigate("/restoration")}>
                <img src={"/Restore.svg"} className="image" />
                <span className="text3">{"Восстановить запись"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
