import { useState, createContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(localStorage.getItem("theme") ? JSON.parse(localStorage.getItem("theme")) : "light");

	useEffect(() => {
		localStorage.setItem("theme", JSON.stringify(theme));
	}, [theme, setTheme]);

	return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
}

export default ThemeContext;
