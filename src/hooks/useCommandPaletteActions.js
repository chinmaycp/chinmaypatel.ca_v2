import { useMemo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const initialActions = [
	{
		id: "home",
		name: "Home / Scroll to Top",
		shortcut: ["h"],
		keywords: "home hero top start landing",
		section: "Navigation",
	},
	{
		id: "projects",
		name: "View Projects",
		shortcut: ["p"],
		keywords: "work code case studies portfolio examples",
		section: "Navigation",
	},
	{
		id: "skills",
		name: "View Skills",
		shortcut: ["s", "k"],
		keywords:
			"tech stack technologies expertise tools languages frameworks",
		section: "Navigation",
	},
	{
		id: "blog",
		name: "View Blog",
		shortcut: ["b"],
		keywords: "writing articles posts thoughts updates",
		section: "Navigation",
	},
	{
		id: "contact",
		name: "Contact Me",
		shortcut: ["c"],
		keywords: "email message connect hire get in touch",
		section: "Navigation",
	},
	{
		id: "theme",
		name: "Toggle Theme",
		shortcut: ["t"],
		keywords: "dark light mode appearance theme change color",
		section: "Preferences",
	},
	{
		id: "github",
		name: "Open GitHub Profile",
		shortcut: ["g", "h"],
		keywords: "code repository source profile social",
		section: "External Links",
		performStatic: () =>
			window.open("https://github.com/chinmaycp", "_blank"),
	},
	{
		id: "linkedin",
		name: "Open LinkedIn Profile",
		shortcut: ["l", "i"],
		keywords: "profile professional network resume social",
		section: "External Links",
		performStatic: () =>
			window.open("https://linkedin.com/in/username", "_blank"),
	},
];

export const useCommandPaletteActions = () => {
	const { toggleTheme } = useTheme();
	const navigate = useNavigate();
	const location = useLocation();

	const navigateToSection = useCallback(
		(sectionId) => {
			if (location.pathname === "/") {
				const element = document.getElementById(sectionId);
				if (element) {
					element.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				} else if (sectionId === "hero") {
					window.scrollTo({ top: 0, behavior: "smooth" });
				}
			} else {
				navigate(`/#${sectionId}`);
			}
		},
		[navigate, location.pathname]
	);

	const performToggleTheme = useCallback(() => {
		toggleTheme();
	}, [toggleTheme]);

	const performExternalLink = useCallback((id) => {
		const action = initialActions.find((a) => a.id === id);
		action?.performStatic?.();
	}, []);

	const actions = useMemo(() => {
		return initialActions
			.map((action) => {
				switch (action.id) {
					case "home":
						return {
							...action,
							perform: () => navigateToSection("hero"),
						};
					case "projects":
						return {
							...action,
							perform: () => navigateToSection("projects"),
						};
					case "skills":
						return {
							...action,
							perform: () => navigateToSection("skills"),
						};
					case "blog":
						return {
							...action,
							perform: () => navigateToSection("blog"),
						};
					case "contact":
						return {
							...action,
							perform: () => navigateToSection("contact"),
						};
					case "theme":
						return { ...action, perform: performToggleTheme };
					case "github":
						return {
							...action,
							perform: () => performExternalLink("github"),
						};
					case "linkedin":
						return {
							...action,
							perform: () => performExternalLink("linkedin"),
						};
					default:
						return action;
				}
			})
			.filter((action) => action != null);
	}, [navigateToSection, performToggleTheme, performExternalLink]);

	return actions;
};
