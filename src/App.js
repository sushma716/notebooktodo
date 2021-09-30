import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState(['Work', 'home', 'personal']);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = (obj) => {
    const { title, category } = obj;
    const newNote = {
      id: uuid(),
      title,
      body: "",
      category,
      lastModified: Date.now(),
    };

    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };
  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }




  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const addCategory = (option) => {
    categories.push(option);
    setCategories([...categories]);
  }

  function groupBy(todos, property) {
    return todos.reduce((acc, obj) => {
      console.log({ obj })
      const key = obj['category']; // undefined
      console.log({ key })
      if (!acc[key]) {
        acc[key] = []; // { saab: [], volvo:[], mercedes: [] }
      }
      // Add object to list for given key's value
      console.log(acc[key])
      acc[key].push(obj);
      return acc;
    }, {});
  }

  const todoData = notes.filter(todo => todo.title.includes(searchTerm));
  const groupCategories = groupBy(todoData, 'category');

  console.log({ notes, groupCategories })
  return (
    <div className="container">
      <input className="search" type="text" placeholder="note search" onChange={handleSearch} />
      <div className="App">
        <Sidebar
          notes={todoData}
          onAddNote={onAddNote}
          onDeleteNote={onDeleteNote}
          categories={categories}
        />
        <Main notes={groupCategories} addCategory={addCategory} />
      </div>
    </div>
  );
}

export default App;