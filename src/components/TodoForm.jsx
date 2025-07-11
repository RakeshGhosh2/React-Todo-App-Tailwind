import React, { useState} from "react";
import {useTodo} from '../contexts/TodoContext'

function TodoForm() {

    const [todo, setTodo] = useState([]);
    const {addTodo} =useTodo()

    const add=(e)=>{
        e. preventDefault()
        if(! todo) return
        addTodo({todo,completed: false})
        setTodo('')
    }
    return (
        <form onSubmit={add} className="flex ">
            <input
                type="text"
                placeholder="Write Todo..."
                className=" w-full border border-black/30 rounded-l-lg px-3 outline-none 
                duration-150 bg-white/20 py-1.5 focus:bg-white/30 focus:ring-1
                focus:ring-green-500/60 placeholder:text-green-600 text-black"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0
                hover:bg-green-700 active:bg-green-800 transition-colors"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;
