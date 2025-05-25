import React, { useEffect, useState } from "react";
import "./filter-card.scss"

type filterOptions = {
    id: number;
    name: string;
    selected: boolean;
    callback: (id: number) => void;

}

export default function FilterOption(
    // props: filterOptions
) {
  useEffect(() => {
    setSelected(true);
  });

  const [selected, setSelected] = useState(false);
  return (
    <div className="filter-filter-list-container">
      <span >{"По релевантности"}</span>
      <img
        hidden={!selected}
        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/d8YN87RSkr/12eerrck_expires_30_days.png"}
        className="image2"
      />
    </div>
  );
}
