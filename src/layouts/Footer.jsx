import React from "react";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="footer__container">
				<p>&copy; {currentYear} Your Name. All rights reserved.</p>
				{/* Add social links or other info later */}
			</div>
		</footer>
	);
};

export default Footer;
