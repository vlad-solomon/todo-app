import "./Filter.scss";

import { useContext } from "react";
import TodosContext from "../../context/TodosContext";

function Filter() {
	const { query, setQuery } = useContext(TodosContext);
	const filter = ["all", "active", "completed"];

	return (
		<div className="filter">
			{filter.map((option) => {
				return (
					<span key={option} className={`filter__option ${query === option ? "selected" : ""}`} onClick={() => setQuery(option)}>
						{option}
					</span>
				);
			})}
		</div>
	);
}

export default Filter;
