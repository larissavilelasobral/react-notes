import React from "react";
import NoteCard from "../NoteCard/NoteCard";
import './NoteList.css'

const NoteList = () => {
  return (
    <ul className="container-li">
      {Array.of("Trabalho", "Trabalho", "Estudos").map((category, index) => {
        return (
          <li key={index} className="card-li">
            <NoteCard
            titulo={category} 
            />
          </li>
        );
      })}
    </ul>
  );
}

export default NoteList;
