import React from "react";

const Navbar = () => {
	return (
		<header className="navbar">
			<div className="navbar__container">
				<a href="#" className="navbar__logo">
					Your Name
				</a>
				{/* Or use a logo component */}
				<nav className="navbar__nav">
					<ul className="navbar__list">
						<li className="navbar__item">
							<a href="#qualifications" className="navbar__link">
								Qualifications
							</a>
						</li>
						<li className="navbar__item">
							<a href="#projects" className="navbar__link">
								Projects
							</a>
						</li>
						<li className="navbar__item">
							<a href="#skills" className="navbar__link">
								Skills
							</a>
						</li>
						<li className="navbar__item">
							<a href="#blog" className="navbar__link">
								Blog
							</a>
						</li>
						<li className="navbar__item">
							<a href="#contact" className="navbar__link">
								Contact
							</a>
						</li>
						{/* Add links to Resume PDF, GitHub, LinkedIn later */}
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Navbar;
