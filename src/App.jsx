import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { CommandPaletteProvider } from "./context/CommandPaletteProvider";
import { useCommandPaletteActions } from "./hooks/useCommandPaletteActions";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Hero from "./sections/Hero";
import Qualifications from "./sections/Qualifications";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Blog from "./sections/Blog";
import Contact from "./sections/Contact";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import BackToTopButton from "./components/BackToTopButton";

const HomePageLayout = ({ setActiveSection }) => (
	<>
		<Hero setActiveSection={setActiveSection} />
		<Qualifications setActiveSection={setActiveSection} />
		<Projects setActiveSection={setActiveSection} />
		<Skills setActiveSection={setActiveSection} />
		<Blog setActiveSection={setActiveSection} />
		<Contact setActiveSection={setActiveSection} />
	</>
);
HomePageLayout.propTypes = {
	setActiveSection: PropTypes.func.isRequired,
};

function App() {
	// --- State ---
	const [activeSection, setActiveSection] = useState("hero");

	// --- Hooks ---
	const location = useLocation();

	// --- Constants ---
	const [mainPaddingTop, setMainPaddingTop] = useState("60px");
	// const mainPaddingTop = location.pathname.startsWith("/blog/")
	// 	? "2rem"
	// 	: "var(--navbar-height, 60px)";

	// --- Effects ---
	useEffect(() => {
		const navbarHeight =
			getComputedStyle(document.documentElement).getPropertyValue(
				"--navbar-height"
			) || "60px";
		setMainPaddingTop(
			location.pathname.startsWith("/blog/") ? "2rem" : navbarHeight
		);
	}, [location.pathname]);

	const actions = useCommandPaletteActions();

	return (
		<CommandPaletteProvider actions={actions}>
			<div className="App">
				<Navbar activeSection={activeSection} />
				<main style={{ paddingTop: mainPaddingTop }}>
					<Routes>
						<Route
							path="/"
							element={
								<HomePageLayout
									setActiveSection={setActiveSection}
								/>
							}
						/>
						<Route path="/blog/:slug" element={<BlogPostPage />} />
						<Route path="*" element={<NotFoundPage />} />
					</Routes>
				</main>
				<Footer />
				<BackToTopButton />
			</div>
		</CommandPaletteProvider>
	);
}

export default App;
