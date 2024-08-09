import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notelist from "../notelist";
import AddButton from "./AddButton";

function App() {
  const [notes, setNotes] = useState(notelist);

  function addNote(newNote) {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  }

  return (
    <div>
      <Header />
      <AddButton onAdd={addNote} />
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
