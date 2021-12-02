import React from "react";
import { useState } from 'react';
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import NoteList from "./Components/NoteList/NoteList";
import '../src/assets/styles.css'

const App = () => {
  const [notas, setNotas] = useState([]);

  const criarNota = (titulo, descricao) => {
    const novaNota = {
      titulo: titulo,
      descricao: descricao
    };

    let arrayNotas = [...notas, novaNota];
    setNotas(arrayNotas);
  }

  return (
    <section className="container-section">
      <RegistrationForm obterInformacoesFormulario={criarNota}/>
      <NoteList obterNotas={notas} />
    </section >
  );
}

export default App;
