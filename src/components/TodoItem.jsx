import React from "react";
import { useTodo } from "../contexts/TodoContext";

function TodoItem({ todo }) {
    const [isTodoEditable, setIsTodoEditable] = React.useState(false)
    const [todoMsg, setTodoMsg] = React.useState(todo.todo)
    const { updateTodo, deleteTodo, togglecomplet } = useTodo();

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }
    const togglecompleted = () => {
        togglecomplet(todo.id)
    }
    return (
        <div
            className={`flex items-center border text-black border-black/30 rounded-lg px-3 py-1.5 gap-3 shadow-sm shadow-white/50 transition-all duration-300 ${todo.completed ? "bg-green-100" : "bg-purple-100"
                }`}
        >
            <input
                type="checkbox"
                className="h-4 w-4 cursor-pointer rounded border-gray-1000 text-green-600 focus:ring-green-500"
                checked={todo.completed}
                onChange={togglecompleted}
            />

            <input
                type="text"
                className={`w-full bg-transparent outline-none ${isTodoEditable ? "border border-gray-300 px-2 rounded" : "border-transparent"
                    } ${todo.completed ? "line-through text-gray-500" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!isTodoEditable}
            />

            {/* Edit/Save Button */}

            <button
                className={`h-8 w-8 shrink-0 rounded-lg border border-yellow-400 bg-white text-sm flex items-center justify-center transition-colors
    ${todo.completed ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
                onClick={() => {
                    if (todo.completed) return;
                    isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>


            {/* Delete Button */}
            <button
                className="h-8 w-8 shrink-0 rounded-lg border  border-red-400 bg-white text-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
                onClick={() => deleteTodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;