import React from "react";
import "./top-app-bar.scss";
import "../styles/fonts.scss";
import "../styles/util.scss"
import { useNavigate } from "react-router-dom";


export default function TopAppBar() {

    const navigate = useNavigate();

    return (
        <div className="app-bar">
            <div style={{display:"flex", flexDirection:"row"}}>
                <img
                    src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/zqi9qpyw_expires_30_days.png"}
                    className="music-image"
                />
                <div style={{
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginRight: "13px",
                }}>
                    <span className="font-display-semibold-white">{"Голос победы"}</span>
                    <span className="app-bar-text">{"Музыкальное наследие"}</span>
                </div>
            </div>
            <div className="filler"></div>
            
            <div className="app-bar-button-container"
                onClick={() => navigate("/archive")}
                >
                <img
                    src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/l5dct3ao_expires_30_days.png"
                    }
                    className="secondary-image"
                />
                <span className="app-bar-text">{"Архив"}</span>
            </div>
            <div className="app-bar-button-container"
                onClick={() => navigate("/restoration")}
            >
                <img
                    src={
                        "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/uo1tvgmv_expires_30_days.png"
                    }
                    className="secondary-image"
                />
                <span className="app-bar-text">{"Восстановление"}</span>
            </div>
        </div>
    );
}
