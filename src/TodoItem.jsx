import { useState } from "react";

export default function TodoItem({ todo, dispatch }) {//sends instruction to todo list
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState(todo.title); //stores text while editing

    function handleSave() {  //sends action to reducer, reducer updates state
        dispatch({ type: "edit_todo", payload: { id: todo.id, title: editText } });
        setIsEditing(false);
    }

    return (
        <li>
            <input type="checkbox" checked={todo.completed}
                onChange={() => dispatch({ type: "toggle_todo", payload: { id: todo.id } })}
            />

            {isEditing ? ( //like an if statement
                <>
                    <input
                        type="text"
                        value={editText}   //updated edit text as user types
                        onChange={(e) => setEditText(e.target.value)} //when true shows text input + save button,hides editi and delete
                    />
                    <button onClick={handleSave}>Save</button>
                </>
            ) : (
                <>
                    {todo.title}
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                    <button
                        onClick={() => dispatch({ type: "delete_todo", payload: { id: todo.id } })}
                        disabled={!todo.completed}
    /* delete button wokrs only if todo is completed otherwise disabled*/>
                        Delete
                    </button>
                </>
            )}
        </li>
    );
}
