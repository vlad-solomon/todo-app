import { useContext } from "react";
import "./Todos.scss";
import Todo from "../Todo/Todo";
import Filter from "../Filter/Filter";
import Empty from "../Empty/Empty";

import TodosContext from "../../context/TodosContext";

function Todos() {
	const { todos, setTodos, query } = useContext(TodosContext);
	const remaining = todos.filter((todo) => !todo.completed).length;

	const filteredTodos = (query) => {
		switch (query) {
			case "active":
				return todos.filter((todo) => !todo.completed);
			case "completed":
				return todos.filter((todo) => todo.completed);
			default:
				return todos;
		}
	};

	return (
		<div className="todos">
			<div className="todos__wrapper">{filteredTodos(query).length ? filteredTodos(query).map((todo) => <Todo key={todo.id} {...todo} setTodos={setTodos} />) : <Empty query={query} />}</div>
			<div className="todos__footer">
				<span style={{ visibility: !remaining ? "hidden" : "visible" }}>
					{remaining} {remaining === 1 ? "item" : "items"} left
				</span>
				<Filter />
				<span
					style={{ cursor: "pointer", textAlign: "right", visibility: todos.filter((todo) => todo.completed).length ? "visible" : "hidden" }}
					onClick={() => {
						setTodos((prev) => prev.filter((todo) => !todo.completed));
					}}
				>
					Clear Completed
				</span>
			</div>
		</div>
	);
}

export default Todos;
