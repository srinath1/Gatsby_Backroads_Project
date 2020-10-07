import React from 'react';
import Layout from '../components/Layout';
import Contact from '../components/Contact/Contact';

import StyledHero from '../components/StyledHero';
import { graphql } from 'gatsby';
export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "connectBcg.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 4160, quality: 90) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
const contact = ({ data }) => {
	return (
		<Layout>
			<h2>The contact</h2>
			<StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid} />
		<Contact/>
		
		</Layout>
	);
};

export default contact;
