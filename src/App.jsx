import React from "react";
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

const HomePageLayout = () => (
	<>
		<Hero />
		<Qualifications />
		<Projects />
		<Skills />
		<Blog />
		<Contact />
	</>
);

function App() {
	const location = useLocation();

	const mainPaddingTop = location.pathname.startsWith("/blog/")
		? "2rem"
		: "var(--navbar-height, 60px)";

	return (
		<div className="App">
			<Navbar />
			<main style={{ paddingTop: mainPaddingTop }}>
				<Routes>
					<Route path="/" element={<HomePageLayout />} />
					<Route path="/blog/:slug" element={<BlogPostPage />} />
					{/* Optional: Add a 404 Not Found route */}
					{/* <Route path="*" element={<NotFoundPage />} /> */}
				</Routes>
			</main>
			<Footer />
		</div>
	);
}

export default App;
