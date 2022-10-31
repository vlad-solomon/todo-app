import "./Empty.scss";

function Empty({ query }) {
	const message = (query) => {
		switch (query) {
			case "all":
				return "You have no todos\nTry creating some!";
			case "completed":
				return "You have no completed todos\nTry completing some!";
			case "active":
				return "You have no active todos!";
		}
	};
	return (
		<div className="empty">
			<span>{message(query)}</span>
		</div>
	);
}

export default Empty;
