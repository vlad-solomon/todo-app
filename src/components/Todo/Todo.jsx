import { useState } from "react";

import "./Todo.scss";

import Check from "./Check.svg";
import Clear from "./Clear.svg";

function Todo({ id, text, completed, setTodos }) {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div className={`todo ${completed ? "completed" : ""}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
			<div
				className="todo__status"
				onClick={() => {
					setTodos((prev) => {
						return prev.map((todo) => {
							if (todo.id === id) {
								return { ...todo, completed: !todo.completed };
							}
							return todo;
						});
					});
				}}
			>
				<img src={Check} alt="check" />
			</div>
			<span className="todo__text">{text}</span>
			{isHovered && (
				<img
					src={Clear}
					className="todo__clear"
					alt="clear"
					onClick={() => {
						setTodos((prev) => {
							return prev.filter((todo) => todo.id !== id);
						});
					}}
				/>
			)}
		</div>
	);
}

export default Todo;
