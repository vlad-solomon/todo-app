import "./Input.scss";
import { useContext, useEffect, useRef } from "react";
import TodosContext from "../../context/TodosContext";

function Input() {
	const inputRef = useRef();
	const { todos, setTodos } = useContext(TodosContext);

	const uid = () => {
		return Math.round(Date.now()).toString(36);
	};

	useEffect(() => {
		inputRef.current.value = "";
	}, [todos]);

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault();
				if (inputRef.current.value.length) {
					setTodos((prev) => [{ id: uid(), text: inputRef.current.value, completed: false }, ...prev]);
				}
			}}
		>
			<input ref={inputRef} className="input" type="text" placeholder="Create a new todo..." />
		</form>
	);
}

export default Input;
