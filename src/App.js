import "./App.scss";

import Backdrop from "./components/Backdrop/Backdrop";
import Logo from "./components/Logo/Logo";
import Input from "./components/Input/Input";
import Todos from "./components/Todos/Todos";
import Filter from "./components/Filter/Filter";

import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { TodosProvider } from "./context/TodosContext";

import "./media.scss";

function App() {
	const { theme } = useContext(ThemeContext);
	return (
		<div className={`App ${theme}`}>
			<Backdrop theme={theme} />
			<div className="todos__wrapper">
				<Logo />
				<TodosProvider>
					<Input />
					<Todos />
					<Filter />
				</TodosProvider>
			</div>
		</div>
	);
}

export default App;
