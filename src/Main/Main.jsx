import React, { useState } from "react";
const Main = ({ activeNote, onUpdateNote, notes, addCategory }) => {
    const [option, setCategory] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const onEditField = (field, value) => {
        onUpdateNote({
            ...activeNote,
            [field]: value,
            lastModified: Date.now(),
        });
    };


    const renderCategory = (category) => {
        return notes[category].length ? notes[category].map(item => {
            return (<p className="category_note">{item.title}</p>)
        }) : ''
    }
    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }





    return (
        <div className="app-main">
            <div>
                <input type="text" className="category" onChange={(e) => setCategory(e.target.value)} />
                <button type="button" className="button" onClick={() => addCategory(option)}> Add Category</button>
            </div>

            <div >
                <h2>category:</h2>
                {Object.keys(notes).length && Object.keys(notes).map((category) => {
                    return (
                        <>
                            <h2>{category}</h2>
                            {renderCategory(category)}

                        </>
                    )
                })}
            </div>
        </div>
    );
};

export default Main;