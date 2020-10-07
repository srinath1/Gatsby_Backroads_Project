import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getSiteData = graphql`
	query FirstQuery {
		site {
			siteMetadata {
				author
				description
				title
			}
		}
	}
`;

const Header = () => {
	const { site } = useStaticQuery(getSiteData);
	return (
		<div>
			<h1>title:{site.siteMetadata.title}</h1>
			<h1>author:{site.siteMetadata.author}</h1>
		</div>
	);
};

export default Header;
