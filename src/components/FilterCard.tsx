import React, { useState } from "react";
import "./filter-card.scss";
import FilterOption from "./FilterOption";

type filterOptions = {
    id: number;
    name: string;
    selected: boolean;
    callback: (id: number) => void;

}


export default function FilterCard() {
  const [input1, onChangeInput1] = useState("");
  const [filterOptionList,   setFilterOptionList] = useState(Array<filterOptions>)
 
  return (
    <div className="filter-card-container">
      <div className="fliter-card">
        <div className="row-view">
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/sh3adkoi_expires_30_days.png"}
            className="image"
          />
          <input
            placeholder={"Поиск записей..."}
            value={input1}
            onChange={(event) => onChangeInput1(event.target.value)}
            className="input"
          />
        </div>
        <span className="main-text">{"Сортировка"}</span>
        <FilterOption />
        <FilterOption />
        <FilterOption />
        <FilterOption />
        {/* <FilterOption/>
        <FilterOption />
        <FilterOption /> */}
        {/* <span className="main-text">{"Год публикации"}</span>
        <div className="edit-year-container">
          <span >{"С"}</span>
          <input placeholder="1938" className="edit-year-field" >
          </input>
          <span >{"По"}</span>
          <input placeholder="1945" className="edit-year-field" >
          </input>
          <div className="box"></div>
        </div> */}
        <span className="main-text">{"Категории"}</span>
        <div className="row-view4">
          <img
            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/5segyi97_expires_30_days.png"}
            className="image3"
          />
          <span className="filter-text-6">{"Хор"}</span>
        </div>
        <div className="box2"></div>
        <button className="button-confirm" onClick={() => alert("Pressed!")}>
          <span className="filter-text-7">{"Применить"}</span>
        </button>
      </div>
    </div>
  );
}
