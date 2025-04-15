import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggleButton from "../components/ThemeToggleButton";

const Navbar = ({ activeSection }) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
		document.body.style.overflow = isMobileMenuOpen ? "auto" : "hidden";
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
		document.body.style.overflow = "auto";
	};

	const navLinks = [
		{ to: "qualifications", label: "Qualifications" },
		{ to: "projects", label: "Projects" },
		{ to: "skills", label: "Skills" },
		{ to: "blog", label: "Blog" },
		{ to: "contact", label: "Contact" },
	];

	return (
		<header
			className={`navbar ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}
		>
			<div className="navbar__container">
				<a href="#" className="navbar__logo" onClick={closeMobileMenu}>
					CHINMAY PATEL
				</a>
				<div className="navbar__right-group">
					<nav className="navbar__nav navbar__nav--desktop">
						<ul className="navbar__list">
							{navLinks.map((link) => (
								<li key={link.to} className="navbar__item">
									{/* Consider using react-scroll for better active highlighting later */}
									{/* <ScrollLink to={link.to} smooth={true} duration={500} spy={true} offset={-NAVBAR_HEIGHT} className="navbar__link"> */}
									<a
										href={`#${link.to}`}
										className={`navbar__link ${
											activeSection === link.to
												? "active"
												: ""
										}`}
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</nav>
					<ThemeToggleButton />
					<button
						className="navbar__hamburger"
						onClick={toggleMobileMenu}
						aria-label={
							isMobileMenuOpen ? "Close menu" : "Open menu"
						}
						aria-expanded={isMobileMenuOpen}
						aria-controls="mobile-menu"
					>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>
			<nav
				id="mobile-menu"
				className={`navbar__nav navbar__nav--mobile ${
					isMobileMenuOpen ? "is-open" : ""
				}`}
			>
				<ul className="navbar__list--mobile">
					<li className="navbar__item--mobile">
						<a
							href="#hero"
							className={`navbar__link--mobile ${
								activeSection === "hero" ? "active" : ""
							}`}
							onClick={closeMobileMenu}
						>
							Home
						</a>
					</li>
					{navLinks.map((link) => (
						<li key={link.to} className="navbar__item--mobile">
							<a
								href={`#${link.to}`}
								className={`navbar__link--mobile ${
									activeSection === link.to ? "active" : ""
								}`}
								onClick={closeMobileMenu}
							>
								{link.label}
							</a>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
};

Navbar.propTypes = {
	activeSection: PropTypes.string,
};
Navbar.defaultProps = {
	activeSection: "hero",
};

export default Navbar;
