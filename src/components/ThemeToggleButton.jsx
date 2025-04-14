import React from "react";
import { useTheme } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggleButton = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="theme-toggle-button"
			aria-label={`Switch to ${
				theme === "light" ? "dark" : "light"
			} mode`}
			title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
		>
			{theme === "light" ? <FaMoon /> : <FaSun />}
		</button>
	);
};

export default ThemeToggleButton;
