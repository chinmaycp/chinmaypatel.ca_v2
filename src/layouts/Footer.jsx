import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__container">
				<p>&copy; {currentYear} Your Name. All rights reserved.</p>
				<p>
					Inspired by{" "}
					<a
						href="https://apple.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Apple.com
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
