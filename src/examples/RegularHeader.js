import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
const getSiteData = graphql`
	query SecondQuery {
		site {
			siteMetadata {
				author
				description
				title
			}
		}
	}
`;

const RegularHeader = () => {
	return (
		<StaticQuery
			query={getSiteData}
			render={(data) => {
				console.log('data', data);
				return <h1>hello people:{data.site.siteMetadata.title}</h1>;
			}}
		/>
	);
};

export default RegularHeader;
