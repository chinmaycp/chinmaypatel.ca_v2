import React, {
	createContext,
	useState,
	useEffect,
	useContext,
	useCallback,
} from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
	// Default to 'dark' as requested
	const [theme, setTheme] = useState("light");

	// Apply theme to document body
	useEffect(() => {
		const root = window.document.documentElement; // Get the root element (html)
		const isDark = theme === "dark";
		root.setAttribute("data-theme", theme); // Set the data-theme attribute
		// Optional: Add/remove class if you prefer using .dark-theme selector
		// root.classList.remove(isDark ? 'light' : 'dark');
		// root.classList.add(theme);
	}, [theme]);

	// Load saved theme from localStorage or default on initial load
	useEffect(() => {
		const savedTheme = localStorage.getItem("theme");
		// Set initial theme: localStorage > default ('dark')
		if (savedTheme && (savedTheme === "light" || savedTheme === "dark")) {
			setTheme(savedTheme);
		} else {
			setTheme("light"); // Default to dark if nothing saved or invalid
		}
	}, []);

	const toggleTheme = useCallback(() => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
		localStorage.setItem("theme", newTheme); // Save preference
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Custom hook to use the theme context
export const useTheme = () => {
	const context = useContext(ThemeContext);
	if (context === undefined) {
		throw new Error("useTheme must be used within a ThemeProvider");
	}
	return context;
};
