import React, { useState } from 'react';
const Sidebar = ({ onAddNote, handleSearch, notes, onDeleteNote, categories }) => {
    const [text, setText] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddNote(text);
    };
    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value })
    }

    return (
        <div className="app-sidebar">
            <div className="app-sidebar-header">
                <form onSubmit={handleSubmit}>
                    <input className="category"
                        type="text"
                        id="title"
                        placeholder="Note Title"
                        name="title"
                        onChange={(e) => handleChange(e)}

                    />
                    <select name="category" className="option" onChange={handleChange}>
                        {categories.map(option => (<option value={option} className="opt">{option}</option>))}

                    </select>
                    <input type="submit" className="submit" value="Add" />
                </form>
            </div>
            <div className="app-sidebar-notes">
                {notes.map(({ id, title, body, lastModified }, i) => (
                    <div
                        className="app-sidebar-note"

                    >
                        <div className="sidebar-note-title">
                            <strong>{title}</strong>
                            <button onClick={(e) => onDeleteNote(id)}>Delete</button>
                        </div>

                        <p>{body && body.substr(0, 100) + "..."}</p>
                        <small className="note-meta">
                            Last Modified{" "}
                            {new Date(lastModified).toLocaleDateString("en-GB", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                        </small>
                    </div>
                ))
                }
            </div >
        </div >
    )
};
export default Sidebar;