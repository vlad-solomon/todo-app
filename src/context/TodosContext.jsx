import { useState, createContext, useEffect } from "react";

const TodosContext = createContext();

const sampleTodos = [
	{
		id: "l9wucucs",
		text: "10 minutes meditation",
		completed: true,
	},
	{
		id: "l9wud5uk",
		text: "Read for 1 hour",
		completed: false,
	},
];

export function TodosProvider({ children }) {
	const [todos, setTodos] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : sampleTodos);
	const [query, setQuery] = useState("all");

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos, setTodos]);

	return <TodosContext.Provider value={{ todos, setTodos, query, setQuery }}>{children}</TodosContext.Provider>;
}

export default TodosContext;
