import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

import PropTypes from "prop-types";
HomePageLayout.propTypes = {
	setActiveSection: PropTypes.func.isRequired,
};

function App() {
	const location = useLocation();

	const mainPaddingTop = location.pathname.startsWith("/blog/")
		? "2rem"
		: "var(--navbar-height, 60px)";

	const [activeSection, setActiveSection] = useState("hero");

	return (
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
	);
}

export default App;
