import React from "react"
import TopAppBar from "../components/TopAppBar"
import FilterCard from "../components/FilterCard"
import "./archive.scss"

export default function Archive() {

    return (
        <>
        <TopAppBar/>
        <div className="archive-container">
            <FilterCard/>
        </div>
        </>
    )

}