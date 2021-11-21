import React from "react";
import NoteCard from "../NoteCard/NoteCard";

const NoteList = () => {
  return (
    <ul>
      {Array.of("Trabalho", "Trabalho", "Estudos").map((category, index) => {
        return (
          <li key={index}>
            <div>{category}</div>
            <NoteCard />
          </li>
        );
      })}
    </ul>
  );
}

export default NoteList;
