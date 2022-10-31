import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./Logo.scss";

import Moon from "./Moon.svg";
import Sun from "./Sun.svg";

function Logo() {
	const { theme, setTheme } = useContext(ThemeContext);
	return (
		<div className="logo">
			<span>todo</span>
			<div
				className="theme-change"
				onClick={() => {
					setTheme((prev) => (prev === "light" ? "dark" : "light"));
				}}
			>
				<img src={theme === "light" ? Moon : Sun} alt="theme-toggle" />
			</div>
		</div>
	);
}

export default Logo;
