import React, { useState } from 'react'
import { FormControl, Container, TextField, Button, MenuItem, Select } from '@material-ui/core';
const TodoForm = ({ addTodo, handleSearch }) => {
    const [text, setText] = useState({});
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
    };
    const handleChange = (e) => {
        setText({ ...text, [e.target.name]: e.target.value })
    }
    const { todo, category } = text;
    console.log({ text })
    return (
        <div>
            <Container maxWidth="sm">
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <div className="Textfield">
                            <TextField id="outlined-basic" label="" variant="outlined"
                                required={true}
                                value={todo}
                                name="todo"
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                    </FormControl>
                    <select className="category" name="category" onChange={handleChange}>
                        <option aria-label="None" value="" />
                        <optgroup label="" style={{ fontSize: 20 }}>
                            <option value="volvo">volvo</option>
                            <option value="saab">saab</option>
                            <option value="saab">benz</option>
                            <option value="saab">aud</option>
                        </optgroup>
                    </select>
                    <Button variant="contained" color="primary" style={{ margin: 5, }} type="submit">
                        Add
                    </Button>
                </form>
                <input
                    className="search"
                    type="text"
                    placeholder="Search"
                    onChange={handleSearch}
                />
            </Container >
        </div >
    )
}
export default TodoForm;