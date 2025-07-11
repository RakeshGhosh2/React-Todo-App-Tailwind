import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            text: "Todo msg",
            completed: false
        },
    ],
    addTodo: () => {},
    deleteTodo: () => {},
    updateTodo: () => {},
    togglecomplet: () => {}
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;