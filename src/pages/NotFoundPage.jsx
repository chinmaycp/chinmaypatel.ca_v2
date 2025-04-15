import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<div className="not-found-page">
			<div className="not-found-page__content">
				<h1 className="not-found-page__title">Page Not Found</h1>
				<p className="not-found-page__message">
					Sorry, the page you are looking for doesn't seem to exist.
				</p>
				<Link to="/" className="btn btn--primary">
					Go Back Home
				</Link>
			</div>
		</div>
	);
};

export default NotFoundPage;
