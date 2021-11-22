import React from "react";
import RegistrationForm from "./Components/RegistrationForm/RegistrationForm";
import NoteList from "./Components/NoteList/NoteList";
import '../src/assets/styles.css'

const App = () => {
  return (
    <section className="container-section">
      <RegistrationForm />
      <NoteList />
    </section >
  );
}

export default App;
