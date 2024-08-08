import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notelist from "../notelist";

function createNote(notes) {
  return <Note title={notes.title} content={notes.content} />;
}

function App() {
  return (
    <div>
      <Header />
      {notelist.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
