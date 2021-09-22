import React from 'react';
import { Container, Card, CardContent, Typography, IconButton } from '@material-ui/core';
import { Check, Delete } from '@material-ui/icons';

const Todo = ({ title, checkTodo, id, isCompleted, deleteTodo }) => {
    const markComplete = () => checkTodo(id)
    const delTodo = () => deleteTodo(id)
    const todoStyle = isCompleted ? { textDecoration: "line-through" } : { textDecoration: "none" }
    return (
        <div>
            <Container >
                <Card Variant="outlined" style={{ marginTop: 5, background: "lightgray" }} >
                    <CardContent>
                        <Typography Variant="h5" component="h2" style={todoStyle}>
                            <IconButton onClick={markComplete}>
                                <Check style={{ color: "green" }} />
                            </IconButton>
                            {title}
                            <IconButton style={{ float: "right" }} onClick={delTodo}>
                                <Delete style={{ color: "Red" }} />
                            </IconButton>
                        </Typography>
                    </CardContent>

                </Card>

            </Container>


        </div>
    )
}

export default Todo;