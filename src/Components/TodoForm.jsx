import React, { useState } from 'react'
import { FormControl, Container, TextField, Button } from '@material-ui/core';

const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("")
    };
    return (
        <div>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <TextField label=""
                            required={true}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <Button variant="contained" color="primary" style={{ margin: 5 }} type="submit">
                            Add
                        </Button>
                    </FormControl>
                </form>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleChange}
                />
            </Container>
        </div >
    )
}
export default TodoForm;