import React, { useState } from "react";
import notelist from "../notelist";

function AddButton({ onAdd }) {
  const [titleContent, setTitleContent] = useState({
    title: "",
    texts: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setTitleContent((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleClick() {
    const newData = { title: titleContent.title, content: titleContent.texts };
    onAdd(newData);
    setTitleContent({ title: "", texts: "" });
  }

  return (
    <div className="button">
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleChange}
        value={titleContent.title}
      />
      <input
        type="text"
        placeholder="Texts"
        name="texts"
        onChange={handleChange}
        value={titleContent.texts}
      />
      <button className="btn" onClick={handleClick}>
        Add
      </button>
    </div>
  );
}

export default AddButton;
